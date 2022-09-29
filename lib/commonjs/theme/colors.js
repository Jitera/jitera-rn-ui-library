"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

const colors = {
  primary: '#2089dc',
  secondary: '#ca71eb',
  background: '#FAFAFA',
  header: '#FFFFFF',
  white: '#ffffff',
  black: '#242424',
  text: '#242424',
  grey0: '#393e42',
  grey1: '#43484d',
  grey2: '#5e6977',
  grey3: '#86939e',
  grey4: '#bdc6cf',
  grey5: '#e1e8ee',
  greyOutline: '#bbb',
  searchBg: '#303337',
  success: '#52c41a',
  error: '#ff190c',
  warning: '#faad14',
  disabled: 'hsl(208, 8%, 90%)',
  googleLogin: '#4285F4',
  facebookLogin: '#4267B2',
  divider: _reactNative.StyleSheet.hairlineWidth < 1 ? '#bcbbc1' : 'rgba(0, 0, 0, 0.12)',
  platform: {
    ios: {
      primary: '#007aff',
      secondary: '#5856d6',
      background: '#ffffff',
      grey: '#7d7d7d',
      searchBg: '#dcdce1',
      success: '#4cd964',
      error: '#ff3b30',
      warning: '#ffcc00'
    },
    android: {
      primary: '#2196f3',
      secondary: '#9C27B0',
      background: '#ffffff',
      grey: 'rgba(0, 0, 0, 0.54)',
      searchBg: '#dcdce1',
      success: '#4caf50',
      error: '#f44336',
      warning: '#ffeb3b'
    },
    web: {
      primary: '#2089dc',
      secondary: '#ca71eb',
      background: '#ffffff',
      grey: '#393e42',
      searchBg: '#303337',
      success: '#52c41a',
      error: '#ff190c',
      warning: '#faad14'
    },
    default: {
      primary: '#007aff',
      secondary: '#5856d6',
      background: '#ffffff',
      grey: '#7d7d7d',
      searchBg: '#dcdce1',
      success: '#4cd964',
      error: '#ff3b30',
      warning: '#ffcc00'
    }
  }
};
var _default = colors;
exports.default = _default;
//# sourceMappingURL=colors.js.map