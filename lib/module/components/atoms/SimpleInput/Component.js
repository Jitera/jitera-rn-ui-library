function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useMemo, useRef, useState } from 'react';
import { TextInput, StyleSheet, View, Platform } from 'react-native';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import { Icon, IconType } from '../Icon';
import { useFirstMountState } from '../../../hooks/useFirstMountState';

const FloatingIcon = _ref => {
  let {
    icon,
    style,
    containerStyle,
    onTap,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(View, {
    style: StyleSheet.flatten([styleSheet.floatingIconContainer, containerStyle])
  }, /*#__PURE__*/React.createElement(TapGestureHandler, {
    onHandlerStateChange: e => {
      if (e.nativeEvent.state === State.BEGAN) {
        onTap && onTap();
      }
    }
  }, /*#__PURE__*/React.createElement(View, _extends({}, props, {
    style: style
  }), icon)));
};

const SimpleInput = /*#__PURE__*/React.forwardRef((_ref2, ref) => {
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
  const internalInputRef = useRef(null);
  const isFirstMount = useFirstMountState();
  const [contentSizeHeight, setContentSizeHeight] = useState(0);
  const isMultiline = useMemo(() => {
    if (secureTextEntry && numberOfLines > 1) {
      return false;
    }

    return numberOfLines > 1;
  }, [secureTextEntry, numberOfLines]);
  const isClearIconVisible = useMemo(() => {
    if (showClearText !== undefined) {
      return showClearText;
    }

    return (value === null || value === void 0 ? void 0 : value.length) > 0;
  }, [value, showClearText]);
  const [secured, setSecured] = useState(secureTextEntry);
  const isSecureEyeIconVisible = useMemo(() => {
    if (showSecureEye !== undefined) {
      return showSecureEye;
    }

    return secureTextEntry;
  }, [secureTextEntry, showSecureEye]);
  const paddingRight = useMemo(() => {
    if (isClearIconVisible && isSecureEyeIconVisible) {
      return 74;
    }

    if (isClearIconVisible || isSecureEyeIconVisible) {
      return 44;
    }

    return undefined;
  }, []);
  const minHeight = useMemo(() => {
    if (Platform.OS === 'ios' && isMultiline) {
      return numberOfLines * contentSizeHeight + 28;
    }

    return undefined;
  }, [contentSizeHeight, numberOfLines, isMultiline]);
  return /*#__PURE__*/React.createElement(View, {
    ref: ref,
    style: StyleSheet.flatten([styleSheet.container, style])
  }, /*#__PURE__*/React.createElement(View, {
    style: styleSheet.containerTextInput
  }, /*#__PURE__*/React.createElement(View, {
    style: styleSheet.containerClearIconTextInput
  }, /*#__PURE__*/React.createElement(TextInput, _extends({}, props, {
    ref: ref => {
      if (inputRef) {
        inputRef.current = ref;
      }

      internalInputRef.current = ref;
    },
    editable: editable || !isPreview,
    style: StyleSheet.flatten([styleSheet.textInput, {
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
      if (Platform.OS === 'ios' && isFirstMount) {
        setContentSizeHeight(e.nativeEvent.contentSize.height);
      }
    }
  })), isClearIconVisible && /*#__PURE__*/React.createElement(FloatingIcon, {
    containerStyle: {
      display: isMultiline ? undefined : 'flex',
      justifyContent: isMultiline ? undefined : 'center'
    },
    style: {
      marginTop: isMultiline ? 10 : undefined,
      marginRight: isSecureEyeIconVisible ? 40 : 10
    },
    icon: /*#__PURE__*/React.createElement(Icon, _extends({}, clearIconProps, {
      type: IconType.Ionicons,
      name: "close-circle",
      color: clearIconColor
    })),
    onTap: () => {
      if (!isPreview) {
        onClear && onClear();
      }
    }
  }), isSecureEyeIconVisible && /*#__PURE__*/React.createElement(FloatingIcon, {
    containerStyle: {
      display: 'flex',
      justifyContent: 'center'
    },
    style: {
      marginRight: 10
    },
    icon: /*#__PURE__*/React.createElement(Icon, _extends({}, secureEyeIconProps, {
      type: IconType.Ionicons,
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
const styleSheet = StyleSheet.create({
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
export default SimpleInput;
//# sourceMappingURL=Component.js.map