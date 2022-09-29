import React from 'react';
import {
  Easing,
  Animated,
  ViewStyle,
  StyleProp,
  StyleSheet,
} from 'react-native';
import { Text } from '../../..';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { ThemeProps } from '../../../theme';

const ANIMATION_DURATION = 1000;
const HIDE_DURATION = 3000;
const ERROR_HIDE_DURATION = 4000;

let instanceToastComponent: any = null;

interface ToastType {
  key: string;
  color?: string;
  backgroundColor?: string;
}
export type ToastProps = {
  animationDuration?: number;
  duration?: number;
  errorDuration?: number;
  toastTypes?: Array<ToastType>;
};
type ToastState = {
  animation: Animated.Value;
  show: boolean;
  component?: React.ReactNode;
  props: any;
  containerStyle?: StyleProp<ViewStyle>;
};

export class ToastComponent extends React.PureComponent<
  ToastProps & Partial<ThemeProps<ToastProps>>,
  ToastState
> {
  static displayName = 'Toast';

  timeout?: any = undefined;
  queue: Array<any> = [];
  toastTypes?: Array<ToastType> = undefined;

  public static defaultProps = {
    animationDuration: ANIMATION_DURATION,
    duration: HIDE_DURATION,
    errorDuration: ERROR_HIDE_DURATION,
    toastTypes: null,
  };

  state = {
    animation: new Animated.Value(1),
    show: false,
    component: undefined,
    props: {},
    containerStyle: undefined,
    barHeight: 0,
  };

  componentDidMount() {
    const { theme, toastTypes } = this.props;
    // eslint-disable-next-line consistent-this
    instanceToastComponent = this;
    if (toastTypes) {
      this.toastTypes = toastTypes;
    } else {
      this.toastTypes = [
        {
          key: 'default',
          color: theme?.colors?.white,
          backgroundColor: theme?.colors?.primary,
        },
        {
          key: 'success',
          color: theme?.colors?.white,
          backgroundColor: theme?.colors?.success,
        },
        {
          key: 'error',
          color: theme?.colors?.white,
          backgroundColor: theme?.colors?.error,
        },
      ];
    }
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    instanceToastComponent = null;
  }

  show(component: string | React.ReactNode, props = {}) {
    this.queue.push({ component, props });
    this.process();
  }

  clear() {
    this.hide(() => {
      this.queue = [];
    });
  }

  process() {
    const {
      theme,
      errorDuration,
      duration: defaultDuration,
      animationDuration: defaultAnimationDuration,
    } = this.props;
    const { animation, show } = this.state;
    if (show) {
      return;
    }
    const item = this.queue.shift();
    if (!item || typeof item !== 'object') {
      return;
    }
    const { component, props = {} } = item;
    const { animationDuration, duration, containerStyle, ...containerProps } =
      props;
    animation.setValue(0);

    const toastStyle = this.toastTypes
      ? this.toastTypes.find(
          (typeItem: ToastType) =>
            typeItem.key === (containerProps.type || 'default')
        )
      : { color: theme?.colors?.white };
    this.setState(
      {
        show: true,
        containerStyle,
        props: containerProps,
        component:
          typeof component === 'string' ? (
            <Text
              theme={theme}
              style={[
                styles.text_default,
                {
                  color: toastStyle?.color,
                },
              ]}
            >
              {component}
            </Text>
          ) : (
            component
          ),
      },
      () => {
        Animated.timing(animation, {
          easing: Easing.bezier(0.04, 0.9, 0.11, 0.9),
          duration: animationDuration || defaultAnimationDuration,
          toValue: 1,
          useNativeDriver: true,
        }).start(() => {
          this.timeout = setTimeout(() => {
            this.hide();
          }, duration || (containerProps.type === 'error' ? errorDuration : defaultDuration));
        });
      }
    );
  }

  hide(callback?: () => void) {
    const { show, animation } = this.state;
    if (show) {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      Animated.timing(animation, {
        easing: Easing.inOut(Easing.ease),
        duration: ANIMATION_DURATION,
        toValue: 0,
        useNativeDriver: true,
      }).start(() => {
        if (callback) {
          callback();
        }
        this.setState(
          {
            show: false,
            props: {},
            containerStyle: {},
          },
          () => {
            this.process();
          }
        );
      });
    }
  }

  getAnimationValue() {
    const { animation } = this.state;
    const value = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [-60, 0],
    });
    return {
      transform: [
        {
          translateY: value,
        },
      ],
    };
  }

  render() {
    const { theme } = this.props;
    const { component, show, containerStyle } = this.state;
    const props: any = this.state.props;
    if (!component || !show || !props) {
      return null;
    }
    const toastStyle = this.toastTypes
      ? this.toastTypes.find(
          (item: ToastType) => item.key === (props.type || 'default')
        )
      : { backgroundColor: theme?.colors?.success };

    return (
      <Animated.View
        style={[
          styles.container,
          containerStyle,
          {
            backgroundColor: toastStyle?.backgroundColor,
          },
          { ...this.getAnimationValue() },
        ]}
        {...props}
      >
        <SafeAreaView edges={['top']}>{component}</SafeAreaView>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9,
  },
  text_default: {
    color: '#FFFFFF',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  text_type_error: {
    color: '#FFFFFF',
  },
});

export default {
  show(
    component: React.ReactNode,
    modalOptions: any = {},
    overlayOptions: any = {}
  ) {
    instanceToastComponent &&
      instanceToastComponent.show(component, modalOptions, overlayOptions);
  },
  success(
    component: React.ReactNode,
    modalOptions: any = { type: 'success' },
    overlayOptions: any = {}
  ) {
    instanceToastComponent &&
      instanceToastComponent.show(component, modalOptions, overlayOptions);
  },
  error(
    component: React.ReactNode,
    modalOptions: any = { type: 'error' },
    overlayOptions: any = {}
  ) {
    instanceToastComponent &&
      instanceToastComponent.show(component, modalOptions, overlayOptions);
  },
  hide(callback: () => void = () => {}) {
    instanceToastComponent && instanceToastComponent.hide(callback);
  },
  isShow() {
    return instanceToastComponent.isShow();
  },
};
