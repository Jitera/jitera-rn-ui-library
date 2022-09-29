function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { View, Easing, Animated, StyleSheet, Dimensions, BackHandler, TouchableOpacity } from 'react-native';
const {
  width,
  height
} = Dimensions.get('window');
let instanceModalComponent = null;
const DEFAULT_STATES = {
  show: false,
  overlayOptions: {},
  component: null,
  touchOutSideToHide: true,
  disableAnimation: false,
  backButtonClose: false,
  animationName: ''
};
export class ModalComponent extends React.PureComponent {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      animation: new Animated.Value(1),
      ...DEFAULT_STATES
    });

    _defineProperty(this, "isShow", () => {
      return this.state.show;
    });

    _defineProperty(this, "canBack", () => {
      return this.state.backButtonClose;
    });

    _defineProperty(this, "hide", callback => {
      this.setState({
        show: false,
        callback: undefined,
        component: null
      });

      if (typeof callback === 'function') {
        callback();
      }
    });

    _defineProperty(this, "onBack", () => {
      BackHandler.removeEventListener('hardwareBackPress', this.onBack);

      if (this.state.backButtonClose) {
        this.hide();
        return false;
      }

      return true;
    });

    _defineProperty(this, "show", (component, modalOptions, overlayOptions) => {
      const {
        animation
      } = this.state;
      const {
        touchOutSideToHide,
        backButtonClose,
        disableAnimation,
        animationName
      } = modalOptions;
      BackHandler.addEventListener('hardwareBackPress', this.onBack);
      this.setState({
        show: true,
        animation,
        overlayOptions,
        component,
        touchOutSideToHide: touchOutSideToHide || true,
        disableAnimation,
        backButtonClose,
        animationName
      }, () => {
        animation.setValue(0.8);
        Animated.timing(animation, {
          toValue: 1,
          easing: Easing.elastic(2),
          duration: 450,
          useNativeDriver: true
        }).start();
      });
    });

    _defineProperty(this, "handleTouchOutSide", () => {
      const {
        touchOutSideToHide
      } = this.state;

      if (touchOutSideToHide) {
        this.hide();
      }
    });

    _defineProperty(this, "renderBackground", () => {
      const overlayOptions = this.state.overlayOptions;
      return /*#__PURE__*/React.createElement(TouchableOpacity, {
        activeOpacity: 0.98,
        key: "overlay",
        style: [styles.overlay, overlayOptions.style]
      });
    });

    _defineProperty(this, "getAnimationStyles", () => {
      const {
        disableAnimation,
        animationName,
        animation
      } = this.state;

      if (disableAnimation) {
        return {};
      }

      switch (animationName) {
        case 'slideUp':
          return {
            transform: [{
              translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [100, 0]
              })
            }]
          };

        default:
          return {
            transform: [{
              scale: animation
            }]
          };
      }
    });
  }

  componentDidMount() {
    instanceModalComponent = this;
  }

  componentWillUnmount() {
    instanceModalComponent = null;
  }

  render() {
    const {
      show,
      touchOutSideToHide,
      component
    } = this.state;

    if (!show) {
      return null;
    }

    return /*#__PURE__*/React.createElement(View, {
      key: "main",
      style: styles.container
    }, this.renderBackground(), /*#__PURE__*/React.createElement(Animated.View, {
      style: [styles.form_container, this.getAnimationStyles()]
    }, touchOutSideToHide ? /*#__PURE__*/React.createElement(TouchableOpacity, {
      activeOpacity: 0.98,
      onPress: this.handleTouchOutSide,
      style: styles.outside
    }) : null, component));
  }

}

_defineProperty(ModalComponent, "displayName", 'Modal');

_defineProperty(ModalComponent, "defaultProps", {});

const styles = StyleSheet.create({
  container: {
    zIndex: 998,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: height
  },
  form_container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    zIndex: 9999
  },
  overlay: {
    opacity: 0.3,
    backgroundColor: '#000',
    position: 'absolute',
    width,
    height: height,
    left: 0,
    top: 0
  },
  overlay_blur: {
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  modalWrapper: {
    borderRadius: 8,
    marginHorizontal: 24,
    height: '70%'
  },
  modal_body: {
    paddingVertical: 24
  },
  buttonCancelWrapper: {
    paddingBottom: 24
  },
  modal_footer: {
    marginTop: 10
  },
  modal_header: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: 'hidden'
  },
  blur: {
    width: '100%',
    height: '100%'
  },
  outside: {
    position: 'absolute',
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%'
  },
  transparent: {
    backgroundColor: 'transparent'
  }
});
export default {
  show(component) {
    let modalOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let overlayOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    instanceModalComponent && instanceModalComponent.show(component, modalOptions, overlayOptions);
  },

  hide() {
    let callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};
    instanceModalComponent && instanceModalComponent.hide(callback);
  },

  isShow() {
    return instanceModalComponent.isShow();
  },

  canBack() {
    return instanceModalComponent.canBack();
  }

};
//# sourceMappingURL=Component.js.map