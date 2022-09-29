import React from "react";
import { TouchableOpacity, StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import View from "../View/Component";
import { defaultTheme } from "../../../theme";
import { Text, Icon, IconType } from "../../../index";
const Header = /*#__PURE__*/React.forwardRef((_ref, ref) => {
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
    leftIconType = IconType.Feather,
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
  const defaultLeftIconSize = leftIconSize || (Platform.OS === "web" ? 24 : defaultTheme.fontSizes.FONT_24);
  const defaultRightIconSize = rightIconSize || (Platform.OS === "web" ? 24 : defaultTheme.fontSizes.FONT_24);

  const onPressBack = () => {
    if (onBackPress) {
      return onBackPress();
    }
  };

  const renderCenterComponent = () => {
    if (renderCenter) {
      return renderCenter();
    }

    return /*#__PURE__*/React.createElement(Text, {
      style: [styles.labelText, titleStyle]
    }, title);
  }; // Render the default left button


  const renderDefaultLeftButton = () => /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: onPressBack,
    style: styles.buttonBackContainer
  }, /*#__PURE__*/React.createElement(Icon, {
    type: IconType.Feather,
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
      return /*#__PURE__*/React.createElement(TouchableOpacity, {
        onPress: onPressLeftIcon,
        style: styles.buttonBackContainer
      }, /*#__PURE__*/React.createElement(Icon, {
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
      return /*#__PURE__*/React.createElement(TouchableOpacity, {
        onPress: onPressRightIcon,
        style: styles.rightButtonContainer
      }, /*#__PURE__*/React.createElement(Icon, {
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

    return /*#__PURE__*/React.createElement(React.Fragment, null, safeAreaTop ? /*#__PURE__*/React.createElement(SafeAreaView, {
      edges: ["top"],
      style: {
        backgroundColor
      }
    }) : undefined, /*#__PURE__*/React.createElement(View, {
      ref: ref,
      style: [styles.wrapper, {
        backgroundColor,
        borderBottomWidth: borderBottomWidth !== null && borderBottomWidth !== void 0 ? borderBottomWidth : 1,
        borderBottomColor: borderBottomColor !== null && borderBottomColor !== void 0 ? borderBottomColor : "rgba(0,0,0,0.1)",
        height: height || (Platform.OS === "web" ? 45 : defaultTheme === null || defaultTheme === void 0 ? void 0 : (_defaultTheme$spacing = defaultTheme.spacing) === null || _defaultTheme$spacing === void 0 ? void 0 : _defaultTheme$spacing.SPACING_45)
      }, style]
    }, /*#__PURE__*/React.createElement(View, {
      style: styles.leftWrapper
    }, renderLeftComponents()), /*#__PURE__*/React.createElement(View, {
      style: styles.centerWrapper
    }, renderCenterComponent()), /*#__PURE__*/React.createElement(View, {
      style: styles.rightWrapper
    }, renderRightComponents())));
  };

  return renderInside();
});
const styles = StyleSheet.create({
  buttonBackContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: Platform.OS === "web" ? 10 : defaultTheme.spacing.SPACING_10
  },
  rightButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: Platform.OS === "web" ? 10 : defaultTheme.spacing.SPACING_10
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
    fontSize: Platform.OS === "web" ? 16 : defaultTheme.fontSizes.FONT_16,
    textAlign: "center"
  },
  rightWrapper: {
    flex: 0.2,
    alignItems: "flex-end"
  }
});
Header.displayName = "Header";
export default Header;
//# sourceMappingURL=Component.js.map