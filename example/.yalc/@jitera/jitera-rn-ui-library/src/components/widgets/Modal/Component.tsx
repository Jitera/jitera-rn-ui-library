import React from 'react';
import {
  View,
  Easing,
  Animated,
  StyleSheet,
  Dimensions,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import type { ThemeProps } from '../../../theme';

const { width, height } = Dimensions.get('window');

let instanceModalComponent: any = null;
const DEFAULT_STATES = {
  show: false,
  overlayOptions: {},
  component: null,
  touchOutSideToHide: true,
  disableAnimation: false,
  backButtonClose: false,
  animationName: '',
};

export type ModalProps = {
  local?: boolean;
};

type ModalState = {
  animation: Animated.Value;
  component: React.ReactNode;
  show: boolean;
  callback?: () => void;
  overlayOptions: any;
  touchOutSideToHide: boolean;
  disableAnimation: boolean;
  backButtonClose: boolean;
  animationName: string;
};

export class ModalComponent extends React.PureComponent<
  ModalProps & Partial<ThemeProps<ModalProps>>,
  ModalState
> {
  static displayName = 'Modal';

  public static defaultProps = {};

  state = {
    animation: new Animated.Value(1),
    ...DEFAULT_STATES,
  };

  componentDidMount() {
    instanceModalComponent = this;
  }

  componentWillUnmount() {
    instanceModalComponent = null;
  }

  isShow = () => {
    return this.state.show;
  };

  canBack = () => {
    return this.state.backButtonClose;
  };

  hide = (callback?: () => void) => {
    this.setState({
      show: false,
      callback: undefined,
      component: null,
    });
    if (typeof callback === 'function') {
      callback();
    }
  };

  onBack = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.onBack);
    if (this.state.backButtonClose) {
      this.hide();
      return false;
    }
    return true;
  };

  show = (
    component: React.ReactNode,
    modalOptions: any,
    overlayOptions: any
  ) => {
    const { animation } = this.state;
    const {
      touchOutSideToHide,
      backButtonClose,
      disableAnimation,
      animationName,
    } = modalOptions;
    BackHandler.addEventListener('hardwareBackPress', this.onBack);
    this.setState(
      {
        show: true,
        animation,
        overlayOptions,
        component,
        touchOutSideToHide: touchOutSideToHide || true,
        disableAnimation,
        backButtonClose,
        animationName,
      },
      () => {
        animation.setValue(0.8);
        Animated.timing(animation, {
          toValue: 1,
          easing: Easing.elastic(2),
          duration: 450,
          useNativeDriver: true,
        }).start();
      }
    );
  };

  handleTouchOutSide = () => {
    const { touchOutSideToHide } = this.state;
    if (touchOutSideToHide) {
      this.hide();
    }
  };

  renderBackground = () => {
    const overlayOptions: any = this.state.overlayOptions;

    return (
      <TouchableOpacity
        activeOpacity={0.98}
        key="overlay"
        style={[styles.overlay, overlayOptions.style]}
      />
    );
  };

  getAnimationStyles = () => {
    const { disableAnimation, animationName, animation } = this.state;

    if (disableAnimation) {
      return {};
    }
    switch (animationName) {
      case 'slideUp':
        return {
          transform: [
            {
              translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [100, 0],
              }),
            },
          ],
        };
      default:
        return {
          transform: [{ scale: animation }],
        };
    }
  };

  render() {
    const { show, touchOutSideToHide, component } = this.state;
    if (!show) {
      return null;
    }

    return (
      <View key="main" style={styles.container}>
        {this.renderBackground()}
        <Animated.View
          style={[styles.form_container, this.getAnimationStyles()]}
        >
          {touchOutSideToHide ? (
            <TouchableOpacity
              activeOpacity={0.98}
              onPress={this.handleTouchOutSide}
              style={styles.outside}
            />
          ) : null}
          {component}
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    zIndex: 998,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: height,
  },
  form_container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    zIndex: 9999,
  },
  overlay: {
    opacity: 0.3,
    backgroundColor: '#000',
    position: 'absolute',
    width,
    height: height,
    left: 0,
    top: 0,
  },
  overlay_blur: {
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
  },
  modalWrapper: {
    borderRadius: 8,
    marginHorizontal: 24,
    height: '70%',
  },
  modal_body: {
    paddingVertical: 24,
  },
  buttonCancelWrapper: {
    paddingBottom: 24,
  },
  modal_footer: {
    marginTop: 10,
  },
  modal_header: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: 'hidden',
  },
  blur: {
    width: '100%',
    height: '100%',
  },
  outside: {
    position: 'absolute',
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
  },
  transparent: {
    backgroundColor: 'transparent',
  },
});

export default {
  show(
    component: React.ReactNode,
    modalOptions: any = {},
    overlayOptions: any = {}
  ) {
    instanceModalComponent &&
      instanceModalComponent.show(component, modalOptions, overlayOptions);
  },
  hide(callback: () => void = () => {}) {
    instanceModalComponent && instanceModalComponent.hide(callback);
  },
  isShow() {
    return instanceModalComponent.isShow();
  },
  canBack() {
    return instanceModalComponent.canBack();
  },
};
