"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Text", {
  enumerable: true,
  get: function () {
    return _ThemedComponent.default;
  }
});
exports.default = void 0;

var _ThemedComponent = _interopRequireDefault(require("./ThemedComponent"));

var _theme = require("../../../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _theme.withTheme)(_ThemedComponent.default, "Text");

exports.default = _default;
//# sourceMappingURL=index.js.map