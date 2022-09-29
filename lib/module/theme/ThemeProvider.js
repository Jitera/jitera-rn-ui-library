function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import deepmerge from 'deepmerge';
import spacing from './spacing';
import fontSizes from './fontSize';
import fonts from './fonts';
import { SafeAreaProvider, SafeAreaInsetsContext } from 'react-native-safe-area-context';
import colors from './colors';
import darkColors from './colorsDark';
import CommonLoading from '../components/widgets/CommonLoading';
import Modal from '../components/widgets/Modal';
import Toast from '../components/widgets/Toast';
export const ThemeContext = /*#__PURE__*/React.createContext({
  theme: {
    colors,
    fontSizes,
    spacing,
    fonts
  }
});

class ThemeInner extends React.Component {
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
          theme: deepmerge(theme, updates)
        };
      });
    });

    _defineProperty(this, "replaceTheme", theme => {
      this.setState(() => ({
        theme: deepmerge(this.defaultTheme, theme)
      }));
    });

    _defineProperty(this, "getTheme", () => this.state.theme);

    const defaultColors = props.useDark ? darkColors : colors;
    this.defaultTheme = deepmerge({
      colors: defaultColors,
      fontSizes,
      spacing,
      fonts,
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
      const defaultColors = useDark ? darkColors : colors;
      return {
        theme: deepmerge(state.theme, deepmerge({
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
    return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
      value: {
        theme: theme,
        updateTheme: this.updateTheme,
        replaceTheme: this.replaceTheme
      }
    }, /*#__PURE__*/React.createElement(React.Fragment, null, this.props.children, /*#__PURE__*/React.createElement(Modal, _extends({
      theme: theme
    }, theme.Modal)), /*#__PURE__*/React.createElement(Toast, _extends({
      theme: theme
    }, theme.Toast)), /*#__PURE__*/React.createElement(CommonLoading, _extends({
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
    return /*#__PURE__*/React.createElement(SafeAreaProvider, null, /*#__PURE__*/React.createElement(SafeAreaInsetsContext.Consumer, null, insets => /*#__PURE__*/React.createElement(ThemeInner, _extends({
      insets: insets
    }, props))));
  }

  return /*#__PURE__*/React.createElement(ThemeProvider, props);
};

export default ThemeProvider;
export const ThemeConsumer = ThemeContext.Consumer;
//# sourceMappingURL=ThemeProvider.js.map