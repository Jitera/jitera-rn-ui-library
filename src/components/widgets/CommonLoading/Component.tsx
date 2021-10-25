import React from 'react';
import {
  View,
  Easing,
  Animated,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { Text } from '../../atoms/Text/Component';
import type { ThemeProps } from '../../../theme';

const { width } = Dimensions.get('window');

let instanceLoadingComponent: any = null;
const DEFAULT_STATES = {
  title: '',
  isShow: false,
  overlayProps: {},
  overlayStyles: {},
  showLoadingIcon: true,
  animationIconOnly: false,
};

export type CommonLoadingProps = {
  loadingSize?: 'small' | 'large';
  loadingColor?: string;
};
type CommonLoadingState = {
  animation: Animated.Value;
  title: string;
  isShow: boolean;
  overlayProps: any;
  overlayStyles: any;
  showLoadingIcon: boolean;
  animationIconOnly: boolean;
};

export class CommonLoadingComponent extends React.Component<
  CommonLoadingProps & Partial<ThemeProps<CommonLoadingProps>>,
  CommonLoadingState
> {
  static displayName = 'CommonLoading';

  public static defaultProps = {
    loadingSize: 'large',
  };

  state = {
    animation: new Animated.Value(1),
    ...DEFAULT_STATES,
  };

  componentDidMount() {
    instanceLoadingComponent = this;
  }

  componentWillUnmount() {
    instanceLoadingComponent = null;
  }

  onProcess() {
    const { isShow } = this.state;
    return isShow;
  }

  getAnimationStyle() {
    const { animation } = this.state;
    const value = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0.6, 1],
    });
    const valueFade = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });
    return {
      opacity: valueFade,
      transform: [
        {
          scale: value,
        },
      ],
    };
  }

  runAnimation(options: any, callback?: Animated.EndCallback) {
    const { animation } = this.state;
    const { duration, fromValue, toValue } = options;
    animation.setValue(fromValue || 0);
    return Animated.timing(animation, {
      toValue: toValue || 1,
      useNativeDriver: true,
      duration: duration || 150,
      easing: Easing.elastic(1),
    }).start(callback);
  }

  show({
    showLoadingIcon = true,
    overlayProps = {},
    overlayStyles = {},
    animation = true,
    animations = {},
    animationIconOnly = true,
    title = '',
  }) {
    this.setState(
      {
        title,
        isShow: true,
        overlayProps,
        overlayStyles,
        showLoadingIcon,
        animationIconOnly,
      },
      () => {
        if (animation) {
          this.runAnimation(animations);
        }
      }
    );
  }

  hide() {
    const { animation } = this.state;
    animation.setValue(0);
    this.setState({
      ...DEFAULT_STATES,
    });
  }

  renderBackground() {
    const { isShow, overlayStyles, overlayProps } = this.state;

    return isShow ? (
      <View style={[styles.overlay, overlayStyles]} {...overlayProps} />
    ) : null;
  }

  render() {
    const { title, isShow, showLoadingIcon, animationIconOnly } = this.state;
    const { theme, loadingColor, loadingSize } = this.props;
    if (!isShow) {
      return null;
    }
    return (
      <Animated.View
        style={[
          styles.background,
          !animationIconOnly ? this.getAnimationStyle() : {},
        ]}
      >
        {this.renderBackground()}
        <View style={styles.loading_bar_container}>
          {showLoadingIcon ? (
            <Animated.View
              style={[
                styles.image,
                animationIconOnly ? this.getAnimationStyle() : {},
              ]}
            >
              <ActivityIndicator
                color={loadingColor}
                style={styles.image}
                size={loadingSize}
              />
            </Animated.View>
          ) : null}
          {title ? (
            <Text theme={theme} h3 style={styles.loading_text}>
              {title}
            </Text>
          ) : null}
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    top: 0,
    left: 0,
    zIndex: 9999,
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    position: 'absolute',
    flexDirection: 'column',
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
  },
  overlay: {
    zIndex: 111,
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: '#000',
    opacity: 0.5,
  },
  container: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    flex: 1,
  },
  loading: {
    color: '#FFFFFF',
  },
  loading_bar_container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    marginBottom: 20,
  },
  text_container: {
    flex: 1,
    width,
    justifyContent: 'center',
  },
  blur: {
    width: '100%',
    height: '100%',
  },
  loading_text: {
    textAlign: 'center',
    paddingHorizontal: 15,
  },
});

export default {
  show(options = {}) {
    if (instanceLoadingComponent) {
      instanceLoadingComponent.show(options);
    }
  },
  hide() {
    if (instanceLoadingComponent) {
      instanceLoadingComponent.hide();
    }
  },
  onProcess() {
    if (instanceLoadingComponent) {
      instanceLoadingComponent.onProcess();
    }
  },
};
