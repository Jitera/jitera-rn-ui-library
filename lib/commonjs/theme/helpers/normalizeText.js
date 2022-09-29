"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNativeSizeMatters = require("react-native-size-matters");

function normalize(number) {
  let factor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.25;
  return (0, _reactNativeSizeMatters.moderateScale)(number, factor);
}

var _default = normalize;
exports.default = _default;
//# sourceMappingURL=normalizeText.js.map