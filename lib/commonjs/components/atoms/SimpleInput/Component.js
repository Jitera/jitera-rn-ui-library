"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeGestureHandler = require("react-native-gesture-handler");

var _Icon = require("../Icon");

var _useFirstMountState = require("../../../hooks/useFirstMountState");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const FloatingIcon = _ref => {
  let {
    icon,
    style,
    containerStyle,
    onTap,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _reactNative.StyleSheet.flatten([styleSheet.floatingIconContainer, containerStyle])
  }, /*#__PURE__*/_react.default.createElement(_reactNativeGestureHandler.TapGestureHandler, {
    onHandlerStateChange: e => {
      if (e.nativeEvent.state === _reactNativeGestureHandler.State.BEGAN) {
        onTap && onTap();
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({}, props, {
    style: style
  }), icon)));
};

const SimpleInput = /*#__PURE__*/_react.default.forwardRef((_ref2, ref) => {
  let {
    value,
    placeholder,
    style,
    numberOfLines = 1,
    isPreview,
    editable,
    maxLength,
    inputRef,
    inputStyle,
    secureTextEntry,
    showClearText,
    clearIconColor,
    clearIconProps,
    showSecureEye,
    secureEyeIconColor,
    secureEyeIconProps,
    onChange,
    onBlur,
    onClear,
    onFocus,
    ...props
  } = _ref2;
  const internalInputRef = (0, _react.useRef)(null);
  const isFirstMount = (0, _useFirstMountState.useFirstMountState)();
  const [contentSizeHeight, setContentSizeHeight] = (0, _react.useState)(0);
  const isMultiline = (0, _react.useMemo)(() => {
    if (secureTextEntry && numberOfLines > 1) {
      return false;
    }

    return numberOfLines > 1;
  }, [secureTextEntry, numberOfLines]);
  const isClearIconVisible = (0, _react.useMemo)(() => {
    if (showClearText !== undefined) {
      return showClearText;
    }

    return (value === null || value === void 0 ? void 0 : value.length) > 0;
  }, [value, showClearText]);
  const [secured, setSecured] = (0, _react.useState)(secureTextEntry);
  const isSecureEyeIconVisible = (0, _react.useMemo)(() => {
    if (showSecureEye !== undefined) {
      return showSecureEye;
    }

    return secureTextEntry;
  }, [secureTextEntry, showSecureEye]);
  const paddingRight = (0, _react.useMemo)(() => {
    if (isClearIconVisible && isSecureEyeIconVisible) {
      return 74;
    }

    if (isClearIconVisible || isSecureEyeIconVisible) {
      return 44;
    }

    return undefined;
  }, []);
  const minHeight = (0, _react.useMemo)(() => {
    if (_reactNative.Platform.OS === 'ios' && isMultiline) {
      return numberOfLines * contentSizeHeight + 28;
    }

    return undefined;
  }, [contentSizeHeight, numberOfLines, isMultiline]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    ref: ref,
    style: _reactNative.StyleSheet.flatten([styleSheet.container, style])
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styleSheet.containerTextInput
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styleSheet.containerClearIconTextInput
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, _extends({}, props, {
    ref: ref => {
      if (inputRef) {
        inputRef.current = ref;
      }

      internalInputRef.current = ref;
    },
    editable: editable || !isPreview,
    style: _reactNative.StyleSheet.flatten([styleSheet.textInput, {
      textAlignVertical: isMultiline ? 'top' : 'center'
    }, {
      paddingTop: 14,
      paddingBottom: 14
    }, {
      minHeight
    }, {
      borderColor: inputStyle === null || inputStyle === void 0 ? void 0 : inputStyle.borderColor
    }, {
      paddingRight
    }, inputStyle]),
    value: value,
    placeholder: placeholder,
    maxLength: maxLength,
    multiline: isMultiline,
    numberOfLines: secureTextEntry ? undefined : numberOfLines,
    secureTextEntry: secured,
    underlineColorAndroid: "transparent",
    onFocus: event => {
      var _internalInputRef$cur;

      if (!isPreview) {
        onFocus && onFocus(event);
        return;
      }

      (_internalInputRef$cur = internalInputRef.current) === null || _internalInputRef$cur === void 0 ? void 0 : _internalInputRef$cur.blur();
    },
    onChangeText: onChange,
    onEndEditing: event => {
      onBlur && onBlur(event);
    },
    onContentSizeChange: e => {
      if (_reactNative.Platform.OS === 'ios' && isFirstMount) {
        setContentSizeHeight(e.nativeEvent.contentSize.height);
      }
    }
  })), isClearIconVisible && /*#__PURE__*/_react.default.createElement(FloatingIcon, {
    containerStyle: {
      display: isMultiline ? undefined : 'flex',
      justifyContent: isMultiline ? undefined : 'center'
    },
    style: {
      marginTop: isMultiline ? 10 : undefined,
      marginRight: isSecureEyeIconVisible ? 40 : 10
    },
    icon: /*#__PURE__*/_react.default.createElement(_Icon.Icon, _extends({}, clearIconProps, {
      type: _Icon.IconType.Ionicons,
      name: "close-circle",
      color: clearIconColor
    })),
    onTap: () => {
      if (!isPreview) {
        onClear && onClear();
      }
    }
  }), isSecureEyeIconVisible && /*#__PURE__*/_react.default.createElement(FloatingIcon, {
    containerStyle: {
      display: 'flex',
      justifyContent: 'center'
    },
    style: {
      marginRight: 10
    },
    icon: /*#__PURE__*/_react.default.createElement(_Icon.Icon, _extends({}, secureEyeIconProps, {
      type: _Icon.IconType.Ionicons,
      name: secured ? 'eye' : 'eye-off',
      color: secureEyeIconColor
    })),
    onTap: () => {
      if (!isPreview) {
        setSecured(oldSecured => !oldSecured);
      }
    }
  }))));
});

const styleSheet = _reactNative.StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },
  containerTextInput: {
    display: 'flex',
    flexDirection: 'column'
  },
  placeholderContainer: {
    marginBottom: 5
  },
  containerClearIconTextInput: {
    position: 'relative'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  floatingIconContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 2
  }
});

var _default = SimpleInput;
exports.default = _default;
//# sourceMappingURL=Component.js.map