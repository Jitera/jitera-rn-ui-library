function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { StyleSheet } from "react-native";
import View from "../View/Component";
import getIconType from "./getIconType";
import getIconStyle from "./getIconStyle";
export let IconType;

(function (IconType) {
  IconType["Zocial"] = "Zocial";
  IconType["Octicons"] = "Octicons";
  IconType["MaterialIcons"] = "MaterialIcons";
  IconType["MaterialCommunityIcons"] = "MaterialCommunityIcons";
  IconType["Ionicons"] = "Ionicons";
  IconType["Foundation"] = "Foundation";
  IconType["EvilIcons"] = "EvilIcons";
  IconType["Entypo"] = "Entypo";
  IconType["FontAwesome"] = "FontAwesome";
  IconType["FontAwesome5"] = "FontAwesome5";
  IconType["SimpleLineIcons"] = "SimpleLineIcons";
  IconType["Feather"] = "Feather";
  IconType["AntDesign"] = "AntDesign";
  IconType["Fontisto"] = "Fontisto";
})(IconType || (IconType = {}));

/** Icons are visual indicators usually used to describe action or intent.
 * They are also used for displaying information. */
const Icon = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    type = IconType.MaterialIcons,
    name,
    size = 24,
    color,
    style,
    ...props
  } = _ref;
  const IconComponent = getIconType(type);
  const iconSpecificStyle = getIconStyle(type, {});
  return /*#__PURE__*/React.createElement(View, {
    ref: ref,
    style: StyleSheet.flatten([style, styles.container, {
      width: size,
      height: size
    }])
  }, /*#__PURE__*/React.createElement(IconComponent, _extends({
    testID: "iconIcon",
    style: StyleSheet.flatten([styles.icon]),
    size: size,
    name: name,
    color: color
  }, iconSpecificStyle, props)));
});
const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    backgroundColor: "transparent"
  }
});
Icon.displayName = "Icon";
export default Icon;
//# sourceMappingURL=Component.js.map