"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactNativeSafeAreaContext = require("react-native-safe-area-context");

var _Component = _interopRequireDefault(require("../View/Component"));

var _theme = require("../../../theme");

var _index = require("../../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Header = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    title,
    height,
    renderLeft,
    renderCenter,
    renderRight,
    backgroundColor,
    borderBottomWidth,
    borderBottomColor,
    onBackPress,
    useDefaultBackButton = false,
    style,
    leftIconName = "chevron-left",
    leftIconType = _index.IconType.Feather,
    leftIconSize,
    leftIconColor,
    onPressLeftIcon,
    rightIconName,
    rightIconType,
    rightIconSize,
    rightIconColor,
    onPressRightIcon,
    titleStyle,
    safeAreaTop
  } = _ref;
  const defaultLeftIconSize = leftIconSize || (_reactNative.Platform.OS === "web" ? 24 : _theme.defaultTheme.fontSizes.FONT_24);
  const defaultRightIconSize = rightIconSize || (_reactNative.Platform.OS === "web" ? 24 : _theme.defaultTheme.fontSizes.FONT_24);

  const onPressBack = () => {
    if (onBackPress) {
      return onBackPress();
    }
  };

  const renderCenterComponent = () => {
    if (renderCenter) {
      return renderCenter();
    }

    return /*#__PURE__*/_react.default.createElement(_index.Text, {
      style: [styles.labelText, titleStyle]
    }, title);
  }; // Render the default left button


  const renderDefaultLeftButton = () => /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: onPressBack,
    style: styles.buttonBackContainer
  }, /*#__PURE__*/_react.default.createElement(_index.Icon, {
    type: _index.IconType.Feather,
    name: "chevron-left",
    size: defaultLeftIconSize,
    color: "#000"
  }));

  const renderLeftComponents = () => {
    if (useDefaultBackButton) {
      return renderDefaultLeftButton();
    } else if (renderLeft) {
      return renderLeft();
    } else if (leftIconName) {
      return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
        onPress: onPressLeftIcon,
        style: styles.buttonBackContainer
      }, /*#__PURE__*/_react.default.createElement(_index.Icon, {
        type: leftIconType,
        name: leftIconName,
        size: defaultLeftIconSize,
        color: leftIconColor
      }));
    }

    return null;
  };

  const renderRightComponents = () => {
    if (renderRight) {
      return renderRight();
    } else if (rightIconName) {
      return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
        onPress: onPressRightIcon,
        style: styles.rightButtonContainer
      }, /*#__PURE__*/_react.default.createElement(_index.Icon, {
        type: rightIconType,
        name: rightIconName,
        size: defaultRightIconSize,
        color: rightIconColor
      }));
    }

    return null;
  };

  const renderInside = () => {
    var _defaultTheme$spacing;

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, safeAreaTop ? /*#__PURE__*/_react.default.createElement(_reactNativeSafeAreaContext.SafeAreaView, {
      edges: ["top"],
      style: {
        backgroundColor
      }
    }) : undefined, /*#__PURE__*/_react.default.createElement(_Component.default, {
      ref: ref,
      style: [styles.wrapper, {
        backgroundColor,
        borderBottomWidth: borderBottomWidth !== null && borderBottomWidth !== void 0 ? borderBottomWidth : 1,
        borderBottomColor: borderBottomColor !== null && borderBottomColor !== void 0 ? borderBottomColor : "rgba(0,0,0,0.1)",
        height: height || (_reactNative.Platform.OS === "web" ? 45 : _theme.defaultTheme === null || _theme.defaultTheme === void 0 ? void 0 : (_defaultTheme$spacing = _theme.defaultTheme.spacing) === null || _defaultTheme$spacing === void 0 ? void 0 : _defaultTheme$spacing.SPACING_45)
      }, style]
    }, /*#__PURE__*/_react.default.createElement(_Component.default, {
      style: styles.leftWrapper
    }, renderLeftComponents()), /*#__PURE__*/_react.default.createElement(_Component.default, {
      style: styles.centerWrapper
    }, renderCenterComponent()), /*#__PURE__*/_react.default.createElement(_Component.default, {
      style: styles.rightWrapper
    }, renderRightComponents())));
  };

  return renderInside();
});

const styles = _reactNative.StyleSheet.create({
  buttonBackContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: _reactNative.Platform.OS === "web" ? 10 : _theme.defaultTheme.spacing.SPACING_10
  },
  rightButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: _reactNative.Platform.OS === "web" ? 10 : _theme.defaultTheme.spacing.SPACING_10
  },
  wrapper: {
    flexDirection: "row",
    borderColor: "rgba(0,0,0,0.1)",
    alignItems: "center"
  },
  leftWrapper: {
    flex: 0.2
  },
  centerWrapper: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center"
  },
  labelText: {
    width: "100%",
    fontWeight: "600",
    fontSize: _reactNative.Platform.OS === "web" ? 16 : _theme.defaultTheme.fontSizes.FONT_16,
    textAlign: "center"
  },
  rightWrapper: {
    flex: 0.2,
    alignItems: "flex-end"
  }
});

Header.displayName = "Header";
var _default = Header;
exports.default = _default;
//# sourceMappingURL=Component.js.map