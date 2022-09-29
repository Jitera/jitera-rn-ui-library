"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNativeWebview = require("react-native-webview");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const WebView = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    Component,
    style,
    source,
    isPreview = false,
    ...props
  } = _ref;
  let newSource = source;

  if (typeof source === "string") {
    newSource = {
      uri: source
    };
  }

  let WebViewComponent = _reactNativeWebview.WebView;

  if (isPreview) {
    WebViewComponent = Component;
  }

  return /*#__PURE__*/_react.default.createElement(WebViewComponent, _extends({
    ref: ref,
    containerStyle: style // for react-native-web-view
    ,
    style: style // for html preview

  }, props, {
    source: newSource
  }));
});

WebView.displayName = "WebView";
var _default = WebView;
exports.default = _default;
//# sourceMappingURL=Component.js.map