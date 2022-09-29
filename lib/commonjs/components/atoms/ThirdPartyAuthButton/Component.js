"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ThirdPartyAuthProvider = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeSizeMatters = require("react-native-size-matters");

var _reactNativeGestureHandler = require("react-native-gesture-handler");

var _reactNativeSvg = require("react-native-svg");

var WebBrowser = _interopRequireWildcard(require("expo-web-browser"));

var Google = _interopRequireWildcard(require("expo-auth-session/providers/google"));

var Facebook = _interopRequireWildcard(require("expo-auth-session/providers/facebook"));

var AppleAuthentication = _interopRequireWildcard(require("expo-apple-authentication"));

var _Icon = require("../Icon");

var _Text = _interopRequireDefault(require("../Text"));

var _View = _interopRequireDefault(require("../View"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

let ThirdPartyAuthProvider;
exports.ThirdPartyAuthProvider = ThirdPartyAuthProvider;

(function (ThirdPartyAuthProvider) {
  ThirdPartyAuthProvider["GOOGLE"] = "Google";
  ThirdPartyAuthProvider["FACEBOOK"] = "Facebook";
  ThirdPartyAuthProvider["APPLE"] = "Apple";
})(ThirdPartyAuthProvider || (exports.ThirdPartyAuthProvider = ThirdPartyAuthProvider = {}));

const ERROR_COLOR = "#dc2626";

const baseAuthStylesheet = _reactNativeSizeMatters.ScaledSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "8@s",
    borderRadius: "5@s",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: "1@s"
    },
    shadowOpacity: "0.2@s",
    shadowRadius: "1.5@s",
    elevation: "2@s"
  },
  text: {
    textAlign: "center",
    marginLeft: "8@s",
    fontSize: "14@s"
  },
  errorMessage: {
    color: ERROR_COLOR,
    marginTop: "5@s"
  }
});

const googleAuthStylesheet = _reactNativeSizeMatters.ScaledSheet.create({
  container: {
    backgroundColor: "white"
  }
});

const facebookAuthStylesheet = _reactNativeSizeMatters.ScaledSheet.create({
  container: {
    backgroundColor: "#4267B2"
  },
  text: {
    color: "#fff"
  }
});

const GoogleIcon = () => /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Svg, {
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
}, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.G, {
  transform: "matrix(1, 0, 0, 1, 27.009001, -39.238998)"
}, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: "#4285F4",
  d: "M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: "#34A853",
  d: "M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: "#FBBC05",
  d: "M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: "#EA4335",
  d: "M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
})));

const useLoginText = () => {
  const getLoginText = (authProvider, authResult) => {
    if ((authResult === null || authResult === void 0 ? void 0 : authResult.type) === "success") {
      return "Signed In";
    }

    return `Sign in with ${authProvider}`;
  };

  return {
    getLoginText
  };
};

const ErrorMessage = _ref => {
  let {
    errorMessage
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Text.default, {
    style: baseAuthStylesheet.errorMessage
  }, errorMessage);
};

const GoogleAuthButton = _ref2 => {
  let {
    config,
    style,
    errorMessage,
    value,
    onChange
  } = _ref2;
  const [_, response, promptAsync] = Google.useIdTokenAuthRequest(config);
  const {
    getLoginText
  } = useLoginText();
  (0, _react.useEffect)(() => {
    var _authentication;

    onChange && onChange({
      accessToken: response === null || response === void 0 ? void 0 : (_authentication = response.authentication) === null || _authentication === void 0 ? void 0 : _authentication.accessToken,
      authentication: response
    });
  }, [response]);
  return /*#__PURE__*/_react.default.createElement(_reactNativeGestureHandler.TouchableOpacity, {
    style: _reactNative.StyleSheet.flatten([style]),
    onPress: () => {
      promptAsync();
    }
  }, /*#__PURE__*/_react.default.createElement(_View.default, {
    style: _reactNative.StyleSheet.flatten([baseAuthStylesheet.container, googleAuthStylesheet.container])
  }, /*#__PURE__*/_react.default.createElement(GoogleIcon, null), /*#__PURE__*/_react.default.createElement(_Text.default, {
    style: _reactNative.StyleSheet.flatten([baseAuthStylesheet.text])
  }, getLoginText(ThirdPartyAuthProvider.GOOGLE, value === null || value === void 0 ? void 0 : value.authentication))), errorMessage && /*#__PURE__*/_react.default.createElement(ErrorMessage, {
    errorMessage: errorMessage
  }));
};

const FacebookAuthButton = _ref3 => {
  let {
    config,
    style,
    errorMessage,
    value,
    onChange
  } = _ref3;
  const [_, response, promptAsync] = Facebook.useAuthRequest(config);
  const {
    getLoginText
  } = useLoginText();
  (0, _react.useEffect)(() => {
    var _authentication2;

    onChange && onChange({
      accessToken: response === null || response === void 0 ? void 0 : (_authentication2 = response.authentication) === null || _authentication2 === void 0 ? void 0 : _authentication2.accessToken,
      authentication: response
    });
  }, [response]);
  return /*#__PURE__*/_react.default.createElement(_reactNativeGestureHandler.TouchableOpacity, {
    style: _reactNative.StyleSheet.flatten([style]),
    onPress: () => {
      promptAsync();
    }
  }, /*#__PURE__*/_react.default.createElement(_View.default, {
    style: _reactNative.StyleSheet.flatten([baseAuthStylesheet.container, facebookAuthStylesheet.container])
  }, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    type: _Icon.IconType.AntDesign,
    name: "facebook-square",
    color: "#fff"
  }), /*#__PURE__*/_react.default.createElement(_Text.default, {
    style: _reactNative.StyleSheet.flatten([baseAuthStylesheet.text, facebookAuthStylesheet.text])
  }, getLoginText(ThirdPartyAuthProvider.FACEBOOK, value === null || value === void 0 ? void 0 : value.authentication))), errorMessage && /*#__PURE__*/_react.default.createElement(ErrorMessage, {
    errorMessage: errorMessage
  }));
};

const AppleAuthButton = _ref4 => {
  let {
    errorMessage,
    value,
    onChange,
    style,
    buttonType = AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN,
    buttonStyle = AppleAuthentication.AppleAuthenticationButtonStyle.BLACK,
    cornerRadius = 5,
    ...props
  } = _ref4;

  const handleLogin = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [AppleAuthentication.AppleAuthenticationScope.FULL_NAME, AppleAuthentication.AppleAuthenticationScope.EMAIL]
      });
      onChange && onChange({
        idToken: credential.identityToken,
        uid: credential.user,
        authentication: credential
      }); // signed in
    } catch (e) {
      if (e.code === "ERR_CANCELED") {
        onChange && onChange({
          idToken: "",
          uid: "",
          authentication: {
            type: "cancel"
          }
        });
      } else {
        onChange && onChange({
          idToken: "",
          uid: "",
          authentication: {
            type: "error"
          }
        });
      }
    }
  };

  return /*#__PURE__*/_react.default.createElement(_reactNativeGestureHandler.TouchableOpacity, null, /*#__PURE__*/_react.default.createElement(AppleAuthentication.AppleAuthenticationButton, _extends({}, props, {
    buttonType: buttonType,
    buttonStyle: buttonStyle,
    cornerRadius: cornerRadius,
    style: _reactNative.StyleSheet.flatten([{
      height: 44
    }, style]),
    onPress: handleLogin
  })), errorMessage && /*#__PURE__*/_react.default.createElement(ErrorMessage, {
    errorMessage: errorMessage
  }));
};

const AuthButton = {
  [ThirdPartyAuthProvider.GOOGLE]: GoogleAuthButton,
  [ThirdPartyAuthProvider.FACEBOOK]: FacebookAuthButton,
  [ThirdPartyAuthProvider.APPLE]: AppleAuthButton
};

const ThirdPartyAuthButton = _ref5 => {
  let {
    type,
    errorMessage,
    ...props
  } = _ref5;
  (0, _react.useEffect)(() => {
    WebBrowser.warmUpAsync();
    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);
  const Component = AuthButton === null || AuthButton === void 0 ? void 0 : AuthButton[type];
  return Component ? /*#__PURE__*/_react.default.createElement(Component, _extends({}, props, {
    errorMessage: errorMessage
  })) : null;
};

var _default = ThirdPartyAuthButton;
exports.default = _default;
//# sourceMappingURL=Component.js.map