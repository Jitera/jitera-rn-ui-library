"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Component = _interopRequireDefault(require("./Component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ThemedScrollView = /*#__PURE__*/_react.default.forwardRef(_ref => {
  let {
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Component.default, props, children);
});

var _default = ThemedScrollView;
exports.default = _default;
//# sourceMappingURL=ThemedComponent.js.map