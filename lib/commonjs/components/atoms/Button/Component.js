"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _helpers = require("../../../theme/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Button = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    style,
    title,
    titleStyle: titleStyleProps,
    disabled,
    loading,
    onPress,
    children
  } = _ref;

  const containerStyle = _reactNative.StyleSheet.flatten([styles.container, style]);

  const titleStyle = _reactNative.StyleSheet.flatten([styles.title, titleStyleProps, (disabled || loading) && {
    opacity: 0.1
  }]);

  let backgroundColor = containerStyle.backgroundColor;

  if ((disabled || loading) && backgroundColor) {
    backgroundColor = (0, _helpers.Color)(backgroundColor).alpha(0.2).toString();
  }

  containerStyle.backgroundColor = backgroundColor;

  const handlePress = event => {
    if (loading || disabled) return;

    if (onPress) {
      onPress(event);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    ref: ref,
    style: containerStyle,
    onPress: handlePress
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, loading && /*#__PURE__*/_react.default.createElement(_reactNative.ActivityIndicator, {
    style: styles.loading,
    size: "small"
  }), title && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: titleStyle
  }, title), children));
});

const styles = _reactNative.StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "#40a9ff",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 20
  },
  loading: {
    position: "absolute"
  }
});

Button.displayName = "Button";
var _default = Button;
exports.default = _default;
//# sourceMappingURL=Component.js.map