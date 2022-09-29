function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useCallback } from "react";
import { StyleSheet } from "react-native";
import { CodeField, Cursor } from "react-native-confirmation-code-field";
import Text from "../Text/ThemedComponent";
import View from "../View/Component";
export let OTPInputType;

(function (OTPInputType) {
  OTPInputType["Box"] = "box";
  OTPInputType["Underline"] = "underline";
})(OTPInputType || (OTPInputType = {}));

const OTPInput = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    style,
    value,
    onBlur,
    pinCount,
    cellStyle,
    errorProps,
    errorStyle,
    onChange,
    keyboardType = "number-pad",
    errorMessage,
    cellTextStyle,
    focusCellStyle,
    focusCellTextStyle,
    autoFocus,
    otpInputType = "box",
    isSecure = false,
    isPreview
  } = _ref;
  const renderSymbol = useCallback((symbol, isFocused) => {
    let textChild = null;

    if (symbol) {
      textChild = isSecure ? "•" : symbol;
    } else if (isFocused) {
      textChild = /*#__PURE__*/React.createElement(Cursor, null);
    }

    return textChild;
  }, [isSecure]);
  const renderOtpCell = useCallback((index, symbol, isFocused) => {
    let wrapperStyle = styles.cellRoot;
    let cellFocusStyle = styles.focusCell;

    if (otpInputType === OTPInputType.Box) {
      wrapperStyle = styles.boxCellRoot;
      cellFocusStyle = styles.boxCellFocus;
    }

    return /*#__PURE__*/React.createElement(View, {
      key: index,
      style: [wrapperStyle, cellStyle, isFocused ? focusCellStyle || cellFocusStyle : undefined]
    }, /*#__PURE__*/React.createElement(Text, {
      style: [styles.cellText, cellTextStyle, isFocused && focusCellTextStyle]
    }, renderSymbol(symbol, isFocused)));
  }, [otpInputType, focusCellStyle, cellTextStyle, cellStyle]);
  return /*#__PURE__*/React.createElement(View, {
    ref: ref,
    style: [styles.wrapperStyle, style]
  }, /*#__PURE__*/React.createElement(CodeField, {
    editable: !isPreview,
    autoFocus: autoFocus,
    value: value,
    onBlur: onBlur,
    onChangeText: onChange,
    cellCount: pinCount,
    keyboardType: keyboardType,
    renderCell: _ref2 => {
      let {
        index,
        symbol,
        isFocused
      } = _ref2;
      return renderOtpCell(index, symbol, isFocused);
    }
  }), !!errorMessage && /*#__PURE__*/React.createElement(Text, _extends({}, errorProps, {
    style: StyleSheet.flatten([errorStyle && errorStyle])
  }), errorMessage));
});
const styles = StyleSheet.create({
  wrapperStyle: {
    minWidth: 250
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  boxCellRoot: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4
  },
  cellText: {
    color: "#000",
    fontSize: 36,
    textAlign: "center"
  },
  focusCell: {
    borderBottomColor: "#007AFF",
    borderBottomWidth: 2
  },
  boxCellFocus: {
    borderColor: "#007AFF",
    borderWidth: 2
  }
});
export default OTPInput;
//# sourceMappingURL=Component.js.map