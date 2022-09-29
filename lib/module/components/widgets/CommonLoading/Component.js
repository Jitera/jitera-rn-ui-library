function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { View, Easing, Animated, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import Text from '../../atoms/Text/ThemedComponent';
const {
  width
} = Dimensions.get('window');
let instanceLoadingComponent = null;
const DEFAULT_STATES = {
  title: '',
  isShow: false,
  overlayProps: {},
  overlayStyles: {},
  showLoadingIcon: true,
  animationIconOnly: false
};
export class CommonLoadingComponent extends React.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      animation: new Animated.Value(1),
      ...DEFAULT_STATES
    });
  }

  componentDidMount() {
    instanceLoadingComponent = this;
  }

  componentWillUnmount() {
    instanceLoadingComponent = null;
  }

  onProcess() {
    const {
      isShow
    } = this.state;
    return isShow;
  }

  getAnimationStyle() {
    const {
      animation
    } = this.state;
    const value = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0.6, 1]
    });
    const valueFade = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });
    return {
      opacity: valueFade,
      transform: [{
        scale: value
      }]
    };
  }

  runAnimation(options, callback) {
    const {
      animation
    } = this.state;
    const {
      duration,
      fromValue,
      toValue
    } = options;
    animation.setValue(fromValue || 0);
    return Animated.timing(animation, {
      toValue: toValue || 1,
      useNativeDriver: true,
      duration: duration || 150,
      easing: Easing.elastic(1)
    }).start(callback);
  }

  show(_ref) {
    let {
      showLoadingIcon = true,
      overlayProps = {},
      overlayStyles = {},
      animation = true,
      animations = {},
      animationIconOnly = true,
      title = ''
    } = _ref;
    this.setState({
      title,
      isShow: true,
      overlayProps,
      overlayStyles,
      showLoadingIcon,
      animationIconOnly
    }, () => {
      if (animation) {
        this.runAnimation(animations);
      }
    });
  }

  hide() {
    const {
      animation
    } = this.state;
    animation.setValue(0);
    this.setState({ ...DEFAULT_STATES
    });
  }

  renderBackground() {
    const {
      isShow,
      overlayStyles,
      overlayProps
    } = this.state;
    return isShow ? /*#__PURE__*/React.createElement(View, _extends({
      style: [styles.overlay, overlayStyles]
    }, overlayProps)) : null;
  }

  render() {
    const {
      title,
      isShow,
      showLoadingIcon,
      animationIconOnly
    } = this.state;
    const {
      theme,
      loadingColor,
      loadingSize
    } = this.props;

    if (!isShow) {
      return null;
    }

    return /*#__PURE__*/React.createElement(Animated.View, {
      style: [styles.background, !animationIconOnly ? this.getAnimationStyle() : {}]
    }, this.renderBackground(), /*#__PURE__*/React.createElement(View, {
      style: styles.loading_bar_container
    }, showLoadingIcon ? /*#__PURE__*/React.createElement(Animated.View, {
      style: [styles.image, animationIconOnly ? this.getAnimationStyle() : {}]
    }, /*#__PURE__*/React.createElement(ActivityIndicator, {
      color: loadingColor,
      style: styles.image,
      size: loadingSize
    })) : null, title ? /*#__PURE__*/React.createElement(Text, {
      theme: theme,
      style: styles.loading_text
    }, title) : null));
  }

}

_defineProperty(CommonLoadingComponent, "displayName", 'CommonLoading');

_defineProperty(CommonLoadingComponent, "defaultProps", {
  loadingSize: 'large'
});

const styles = StyleSheet.create({
  background: {
    top: 0,
    left: 0,
    zIndex: 9999,
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    position: 'absolute',
    flexDirection: 'column'
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center'
  },
  overlay: {
    zIndex: 111,
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: '#000',
    opacity: 0.5
  },
  container: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    flex: 1
  },
  loading: {
    color: '#FFFFFF'
  },
  loading_bar_container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    marginBottom: 20
  },
  text_container: {
    flex: 1,
    width,
    justifyContent: 'center'
  },
  blur: {
    width: '100%',
    height: '100%'
  },
  loading_text: {
    textAlign: 'center',
    paddingHorizontal: 15
  }
});
export default {
  show() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

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
  }

};
//# sourceMappingURL=Component.js.map