"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _deepmerge = _interopRequireDefault(require("deepmerge"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _ThemeProvider = require("./ThemeProvider");

var _theme = _interopRequireDefault(require("./theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const isClassComponent = Component => Boolean(Component.prototype && Component.prototype.isReactComponent);

const ThemedComponent = (WrappedComponent, themeKey, displayName) => {
  return Object.assign((props, forwardedRef) => {
    const {
      children,
      ...rest
    } = props;
    return /*#__PURE__*/_react.default.createElement(_ThemeProvider.ThemeConsumer, null, context => {
      // If user isn't using ThemeProvider
      if (!context) {
        const newProps = { ...rest,
          theme: _theme.default,
          children
        };
        return isClassComponent(WrappedComponent) ? /*#__PURE__*/_react.default.createElement(WrappedComponent, _extends({
          ref: forwardedRef
        }, newProps)) : /*#__PURE__*/_react.default.createElement(WrappedComponent, newProps);
      }

      const {
        theme,
        updateTheme,
        replaceTheme
      } = context;
      const newProps = {
        theme,
        updateTheme,
        replaceTheme,
        ...(0, _deepmerge.default)(themeKey && theme[themeKey] || {}, rest, {
          clone: false
        }),
        children
      };

      if (isClassComponent(WrappedComponent)) {
        return /*#__PURE__*/_react.default.createElement(WrappedComponent, _extends({
          ref: forwardedRef
        }, newProps));
      }

      return /*#__PURE__*/_react.default.createElement(WrappedComponent, newProps);
    });
  }, {
    displayName: displayName
  });
};

function withTheme(WrappedComponent, themeKey) {
  const name = themeKey ? `Themed.${themeKey}` : `Themed.${WrappedComponent.displayName || WrappedComponent.name || 'Component'}`;
  const Component = ThemedComponent(WrappedComponent, themeKey, name);

  if (isClassComponent(WrappedComponent)) {
    return (0, _hoistNonReactStatics.default)( /*#__PURE__*/_react.default.forwardRef(Component), WrappedComponent);
  }

  return Component;
}

var _default = withTheme;
exports.default = _default;
//# sourceMappingURL=withTheme.js.map