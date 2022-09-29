"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerCustomIconType = exports.default = void 0;

var _Component = require("./Component");

const customIcons = {};

const registerCustomIconType = (id, customIcon) => {
  customIcons[id] = customIcon;
};

exports.registerCustomIconType = registerCustomIconType;

var _default = type => {
  switch (type) {
    case _Component.IconType.Zocial:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require("react-native-vector-icons/Zocial").default;

    case _Component.IconType.Octicons:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require("react-native-vector-icons/Octicons").default;

    case _Component.IconType.MaterialIcons:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require("react-native-vector-icons/MaterialIcons").default;

    case _Component.IconType.MaterialCommunityIcons:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require("react-native-vector-icons/MaterialCommunityIcons").default;

    case _Component.IconType.Ionicons:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require("react-native-vector-icons/Ionicons").default;

    case _Component.IconType.Foundation:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require("react-native-vector-icons/Foundation").default;

    case _Component.IconType.EvilIcons:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require("react-native-vector-icons/EvilIcons").default;

    case _Component.IconType.Entypo:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require("react-native-vector-icons/Entypo").default;

    case _Component.IconType.FontAwesome:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require("react-native-vector-icons/FontAwesome").default;

    case _Component.IconType.FontAwesome5:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require("react-native-vector-icons/FontAwesome5").default;

    case _Component.IconType.SimpleLineIcons:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require("react-native-vector-icons/SimpleLineIcons").default;

    case _Component.IconType.Feather:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require("react-native-vector-icons/Feather").default;

    case _Component.IconType.AntDesign:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require("react-native-vector-icons/AntDesign").default;

    case _Component.IconType.Fontisto:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require("react-native-vector-icons/Fontisto").default;

    default:
      if (Object.prototype.hasOwnProperty.call(customIcons, type)) {
        return customIcons[type];
      } // eslint-disable-next-line @typescript-eslint/no-var-requires


      return require("react-native-vector-icons/MaterialIcons").default;
  }
};

exports.default = _default;
//# sourceMappingURL=getIconType.js.map