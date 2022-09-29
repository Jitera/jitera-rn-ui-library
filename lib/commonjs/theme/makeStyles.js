"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTheme = exports.makeStyles = void 0;

var _react = require("react");

var _reactNative = require("react-native");

var _ThemeProvider = require("./ThemeProvider");

const useTheme = () => {
  return (0, _react.useContext)(_ThemeProvider.ThemeContext);
};

exports.useTheme = useTheme;

const makeStyles = styles => function () {
  let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const {
    theme
  } = useTheme();
  const css = typeof styles === 'function' ? styles(theme, props) : styles;
  return _reactNative.StyleSheet.create(css);
};

exports.makeStyles = makeStyles;
//# sourceMappingURL=makeStyles.js.map