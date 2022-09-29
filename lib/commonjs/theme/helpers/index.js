"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Color", {
  enumerable: true,
  get: function () {
    return _color.default;
  }
});
exports.isIOS = exports.ScreenWidth = exports.ScreenHeight = void 0;
Object.defineProperty(exports, "normalizeText", {
  enumerable: true,
  get: function () {
    return _normalizeText.default;
  }
});
exports.patchWebProps = void 0;
Object.defineProperty(exports, "renderNode", {
  enumerable: true,
  get: function () {
    return _renderNode.default;
  }
});
Object.defineProperty(exports, "styleCache", {
  enumerable: true,
  get: function () {
    return _styleCache.default;
  }
});

var _reactNative = require("react-native");

var _color = _interopRequireDefault(require("../../shared/color"));

var _renderNode = _interopRequireDefault(require("./renderNode"));

var _styleCache = _interopRequireDefault(require("./styleCache"));

var _normalizeText = _interopRequireDefault(require("./normalizeText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Screen = _reactNative.Dimensions.get('window');

const ScreenWidth = Screen.width;
exports.ScreenWidth = ScreenWidth;
const ScreenHeight = Screen.height;
exports.ScreenHeight = ScreenHeight;
const isIOS = _reactNative.Platform.OS === 'ios';
exports.isIOS = isIOS;

const patchWebProps = _ref => {
  let { ...rest
  } = _ref;
  return rest;
};

exports.patchWebProps = patchWebProps;
//# sourceMappingURL=index.js.map