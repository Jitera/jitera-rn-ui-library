"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerCustomIconType = exports.default = void 0;

var _Component = require("./Component");

var _vectorIcons = require("@expo/vector-icons");

const customIcons = {};

const registerCustomIconType = (id, customIcon) => {
  customIcons[id] = customIcon;
};

exports.registerCustomIconType = registerCustomIconType;

var _default = type => {
  switch (type) {
    case _Component.IconType.Zocial:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return _vectorIcons.Zocial;

    case _Component.IconType.Octicons:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return _vectorIcons.Octicons;

    case _Component.IconType.MaterialIcons:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return _vectorIcons.MaterialIcons;

    case _Component.IconType.MaterialCommunityIcons:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return _vectorIcons.MaterialCommunityIcons;

    case _Component.IconType.Ionicons:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return _vectorIcons.Ionicons;

    case _Component.IconType.Foundation:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return _vectorIcons.Foundation;

    case _Component.IconType.EvilIcons:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return _vectorIcons.EvilIcons;

    case _Component.IconType.Entypo:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return _vectorIcons.Entypo;

    case _Component.IconType.FontAwesome:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return _vectorIcons.FontAwesome;

    case _Component.IconType.FontAwesome5:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return _vectorIcons.FontAwesome5;

    case _Component.IconType.SimpleLineIcons:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return _vectorIcons.SimpleLineIcons;

    case _Component.IconType.Feather:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return _vectorIcons.Feather;

    case _Component.IconType.AntDesign:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return _vectorIcons.AntDesign;

    case _Component.IconType.Fontisto:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return _vectorIcons.Fontisto;

    default:
      if (Object.prototype.hasOwnProperty.call(customIcons, type)) {
        return customIcons[type];
      } // eslint-disable-next-line @typescript-eslint/no-var-requires


      return _vectorIcons.MaterialIcons;
  }
};

exports.default = _default;
//# sourceMappingURL=getIconType.web.js.map