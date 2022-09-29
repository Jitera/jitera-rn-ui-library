"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Component = require("./Component");

var _default = (type, extraProps) => {
  switch (type) {
    case _Component.IconType.FontAwesome5:
      return {
        solid: extraProps.solid || false,
        brand: extraProps.brand || false
      };

    default:
      return {};
  }
};

exports.default = _default;
//# sourceMappingURL=getIconStyle.js.map