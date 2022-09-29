"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

const cache = {};

var _default = (key, values, allStyle) => {
  if (!cache[key]) {
    const styles = _reactNative.StyleSheet.create({
      [key]: values
    });

    cache[key] = styles;
  }

  return allStyle ? cache : cache[key][key];
};

exports.default = _default;
//# sourceMappingURL=styleCache.js.map