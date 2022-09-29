"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "WebView", {
  enumerable: true,
  get: function () {
    return _Component.default;
  }
});
exports.default = void 0;

var _Component = _interopRequireDefault(require("./Component"));

var _theme = require("../../../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _theme.withTheme)(_Component.default, "WebView");

exports.default = _default;
//# sourceMappingURL=index.js.map