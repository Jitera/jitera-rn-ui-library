"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ThemeContext = exports.ThemeConsumer = void 0;

var _react = _interopRequireDefault(require("react"));

var _deepmerge = _interopRequireDefault(require("deepmerge"));

var _spacing = _interopRequireDefault(require("./spacing"));

var _fontSize = _interopRequireDefault(require("./fontSize"));

var _fonts = _interopRequireDefault(require("./fonts"));

var _reactNativeSafeAreaContext = require("react-native-safe-area-context");

var _colors = _interopRequireDefault(require("./colors"));

var _colorsDark = _interopRequireDefault(require("./colorsDark"));

var _CommonLoading = _interopRequireDefault(require("../components/widgets/CommonLoading"));

var _Modal = _interopRequireDefault(require("../components/widgets/Modal"));

var _Toast = _interopRequireDefault(require("../components/widgets/Toast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ThemeContext = /*#__PURE__*/_react.default.createContext({
  theme: {
    colors: _colors.default,
    fontSizes: _fontSize.default,
    spacing: _spacing.default,
    fonts: _fonts.default
  }
});

exports.ThemeContext = ThemeContext;

class ThemeInner extends _react.default.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "defaultTheme", void 0);

    _defineProperty(this, "Wrapper", void 0);

    _defineProperty(this, "updateTheme", updates => {
      this.setState(_ref => {
        let {
          theme
        } = _ref;
        return {
          theme: (0, _deepmerge.default)(theme, updates)
        };
      });
    });

    _defineProperty(this, "replaceTheme", theme => {
      this.setState(() => ({
        theme: (0, _deepmerge.default)(this.defaultTheme, theme)
      }));
    });

    _defineProperty(this, "getTheme", () => this.state.theme);

    const defaultColors = props.useDark ? _colorsDark.default : _colors.default;
    this.defaultTheme = (0, _deepmerge.default)({
      colors: defaultColors,
      fontSizes: _fontSize.default,
      spacing: _spacing.default,
      fonts: _fonts.default,
      safeArea: props.insets
    }, props.theme);
    this.state = {
      theme: this.defaultTheme,
      useDark: Boolean(props.useDark)
    };
  }

  static getDerivedStateFromProps(props, state) {
    const {
      useDark
    } = props;

    const isTheme = theme => {
      return !(Object.keys(theme).length === 0 && theme.constructor === Object);
    }; //isTheme will check if the theme is provided by user and will update the theme only if its provided by user
    //Not checking if the theme exist or not will always result in if statement getting executed as props.theme !== state.theme if theme is not provided


    if (useDark !== state.useDark || isTheme(props.theme) && props.theme !== state.theme) {
      const defaultColors = useDark ? _colorsDark.default : _colors.default;
      return {
        theme: (0, _deepmerge.default)(state.theme, (0, _deepmerge.default)({
          colors: defaultColors
        }, props.theme)),
        useDark
      };
    }

    return null;
  }

  render() {
    const {
      theme
    } = this.state;
    return /*#__PURE__*/_react.default.createElement(ThemeContext.Provider, {
      value: {
        theme: theme,
        updateTheme: this.updateTheme,
        replaceTheme: this.replaceTheme
      }
    }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.props.children, /*#__PURE__*/_react.default.createElement(_Modal.default, _extends({
      theme: theme
    }, theme.Modal)), /*#__PURE__*/_react.default.createElement(_Toast.default, _extends({
      theme: theme
    }, theme.Toast)), /*#__PURE__*/_react.default.createElement(_CommonLoading.default, _extends({
      theme: theme
    }, theme.CommonLoading))));
  }

}

_defineProperty(ThemeInner, "defaultProps", {
  theme: {},
  insets: {},
  useDark: false
});

const ThemeProvider = _ref2 => {
  let {
    safeArea,
    ...props
  } = _ref2;

  if (safeArea) {
    return /*#__PURE__*/_react.default.createElement(_reactNativeSafeAreaContext.SafeAreaProvider, null, /*#__PURE__*/_react.default.createElement(_reactNativeSafeAreaContext.SafeAreaInsetsContext.Consumer, null, insets => /*#__PURE__*/_react.default.createElement(ThemeInner, _extends({
      insets: insets
    }, props))));
  }

  return /*#__PURE__*/_react.default.createElement(ThemeProvider, props);
};

var _default = ThemeProvider;
exports.default = _default;
const ThemeConsumer = ThemeContext.Consumer;
exports.ThemeConsumer = ThemeConsumer;
//# sourceMappingURL=ThemeProvider.js.map