"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IconType = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _Component = _interopRequireDefault(require("../View/Component"));

var _getIconType = _interopRequireDefault(require("./getIconType"));

var _getIconStyle = _interopRequireDefault(require("./getIconStyle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

let IconType;
exports.IconType = IconType;

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
})(IconType || (exports.IconType = IconType = {}));

/** Icons are visual indicators usually used to describe action or intent.
 * They are also used for displaying information. */
const Icon = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    type = IconType.MaterialIcons,
    name,
    size = 24,
    color,
    style,
    ...props
  } = _ref;
  const IconComponent = (0, _getIconType.default)(type);
  const iconSpecificStyle = (0, _getIconStyle.default)(type, {});
  return /*#__PURE__*/_react.default.createElement(_Component.default, {
    ref: ref,
    style: _reactNative.StyleSheet.flatten([style, styles.container, {
      width: size,
      height: size
    }])
  }, /*#__PURE__*/_react.default.createElement(IconComponent, _extends({
    testID: "iconIcon",
    style: _reactNative.StyleSheet.flatten([styles.icon]),
    size: size,
    name: name,
    color: color
  }, iconSpecificStyle, props)));
});

const styles = _reactNative.StyleSheet.create({
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
var _default = Icon;
exports.default = _default;
//# sourceMappingURL=Component.js.map