function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { Easing, Animated, StyleSheet } from 'react-native';
import { Text } from '../../..';
import { SafeAreaView } from 'react-native-safe-area-context';
const ANIMATION_DURATION = 1000;
const HIDE_DURATION = 3000;
const ERROR_HIDE_DURATION = 4000;
let instanceToastComponent = null;
export class ToastComponent extends React.PureComponent {
  constructor() {
    super(...arguments);

    _defineProperty(this, "timeout", undefined);

    _defineProperty(this, "queue", []);

    _defineProperty(this, "toastTypes", undefined);

    _defineProperty(this, "state", {
      animation: new Animated.Value(1),
      show: false,
      component: undefined,
      props: {},
      containerStyle: undefined,
      barHeight: 0
    });
  }

  componentDidMount() {
    const {
      theme,
      toastTypes
    } = this.props; // eslint-disable-next-line consistent-this

    instanceToastComponent = this;

    if (toastTypes) {
      this.toastTypes = toastTypes;
    } else {
      var _theme$colors, _theme$colors2, _theme$colors3, _theme$colors4, _theme$colors5, _theme$colors6;

      this.toastTypes = [{
        key: 'default',
        color: theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.white,
        backgroundColor: theme === null || theme === void 0 ? void 0 : (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.primary
      }, {
        key: 'success',
        color: theme === null || theme === void 0 ? void 0 : (_theme$colors3 = theme.colors) === null || _theme$colors3 === void 0 ? void 0 : _theme$colors3.white,
        backgroundColor: theme === null || theme === void 0 ? void 0 : (_theme$colors4 = theme.colors) === null || _theme$colors4 === void 0 ? void 0 : _theme$colors4.success
      }, {
        key: 'error',
        color: theme === null || theme === void 0 ? void 0 : (_theme$colors5 = theme.colors) === null || _theme$colors5 === void 0 ? void 0 : _theme$colors5.white,
        backgroundColor: theme === null || theme === void 0 ? void 0 : (_theme$colors6 = theme.colors) === null || _theme$colors6 === void 0 ? void 0 : _theme$colors6.error
      }];
    }
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    instanceToastComponent = null;
  }

  show(component) {
    let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.queue.push({
      component,
      props
    });
    this.process();
  }

  clear() {
    this.hide(() => {
      this.queue = [];
    });
  }

  process() {
    var _theme$colors7;

    const {
      theme,
      errorDuration,
      duration: defaultDuration,
      animationDuration: defaultAnimationDuration
    } = this.props;
    const {
      animation,
      show
    } = this.state;

    if (show) {
      return;
    }

    const item = this.queue.shift();

    if (!item || typeof item !== 'object') {
      return;
    }

    const {
      component,
      props = {}
    } = item;
    const {
      animationDuration,
      duration,
      containerStyle,
      ...containerProps
    } = props;
    animation.setValue(0);
    const toastStyle = this.toastTypes ? this.toastTypes.find(typeItem => typeItem.key === (containerProps.type || 'default')) : {
      color: theme === null || theme === void 0 ? void 0 : (_theme$colors7 = theme.colors) === null || _theme$colors7 === void 0 ? void 0 : _theme$colors7.white
    };
    this.setState({
      show: true,
      containerStyle,
      props: containerProps,
      component: typeof component === 'string' ? /*#__PURE__*/React.createElement(Text, {
        theme: theme,
        style: [styles.text_default, {
          color: toastStyle === null || toastStyle === void 0 ? void 0 : toastStyle.color
        }]
      }, component) : component
    }, () => {
      Animated.timing(animation, {
        easing: Easing.bezier(0.04, 0.9, 0.11, 0.9),
        duration: animationDuration || defaultAnimationDuration,
        toValue: 1,
        useNativeDriver: true
      }).start(() => {
        this.timeout = setTimeout(() => {
          this.hide();
        }, duration || (containerProps.type === 'error' ? errorDuration : defaultDuration));
      });
    });
  }

  hide(callback) {
    const {
      show,
      animation
    } = this.state;

    if (show) {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      Animated.timing(animation, {
        easing: Easing.inOut(Easing.ease),
        duration: ANIMATION_DURATION,
        toValue: 0,
        useNativeDriver: true
      }).start(() => {
        if (callback) {
          callback();
        }

        this.setState({
          show: false,
          props: {},
          containerStyle: {}
        }, () => {
          this.process();
        });
      });
    }
  }

  getAnimationValue() {
    const {
      animation
    } = this.state;
    const value = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [-60, 0]
    });
    return {
      transform: [{
        translateY: value
      }]
    };
  }

  render() {
    var _theme$colors8;

    const {
      theme
    } = this.props;
    const {
      component,
      show,
      containerStyle
    } = this.state;
    const props = this.state.props;

    if (!component || !show || !props) {
      return null;
    }

    const toastStyle = this.toastTypes ? this.toastTypes.find(item => item.key === (props.type || 'default')) : {
      backgroundColor: theme === null || theme === void 0 ? void 0 : (_theme$colors8 = theme.colors) === null || _theme$colors8 === void 0 ? void 0 : _theme$colors8.success
    };
    return /*#__PURE__*/React.createElement(Animated.View, _extends({
      style: [styles.container, containerStyle, {
        backgroundColor: toastStyle === null || toastStyle === void 0 ? void 0 : toastStyle.backgroundColor
      }, { ...this.getAnimationValue()
      }]
    }, props), /*#__PURE__*/React.createElement(SafeAreaView, {
      edges: ['top']
    }, component));
  }

}

_defineProperty(ToastComponent, "displayName", 'Toast');

_defineProperty(ToastComponent, "defaultProps", {
  animationDuration: ANIMATION_DURATION,
  duration: HIDE_DURATION,
  errorDuration: ERROR_HIDE_DURATION,
  toastTypes: null
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9
  },
  text_default: {
    color: '#FFFFFF',
    paddingVertical: 5,
    paddingHorizontal: 5
  },
  text_type_error: {
    color: '#FFFFFF'
  }
});
export default {
  show(component) {
    let modalOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let overlayOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    instanceToastComponent && instanceToastComponent.show(component, modalOptions, overlayOptions);
  },

  success(component) {
    let modalOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      type: 'success'
    };
    let overlayOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    instanceToastComponent && instanceToastComponent.show(component, modalOptions, overlayOptions);
  },

  error(component) {
    let modalOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      type: 'error'
    };
    let overlayOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    instanceToastComponent && instanceToastComponent.show(component, modalOptions, overlayOptions);
  },

  hide() {
    let callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};
    instanceToastComponent && instanceToastComponent.hide(callback);
  },

  isShow() {
    return instanceToastComponent.isShow();
  }

};
//# sourceMappingURL=Component.js.map