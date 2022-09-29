"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Carousel", {
  enumerable: true,
  get: function () {
    return _ThemedComponent.default;
  }
});
exports.default = void 0;

var _ThemedComponent = _interopRequireDefault(require("./ThemedComponent"));

var _theme = require("../../../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _theme.withTheme)(_ThemedComponent.default, 'Carousel');

exports.default = _default;
//# sourceMappingURL=index.js.map