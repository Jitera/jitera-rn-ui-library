"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.OTPInputType = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeConfirmationCodeField = require("react-native-confirmation-code-field");

var _ThemedComponent = _interopRequireDefault(require("../Text/ThemedComponent"));

var _Component = _interopRequireDefault(require("../View/Component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

let OTPInputType;
exports.OTPInputType = OTPInputType;

(function (OTPInputType) {
  OTPInputType["Box"] = "box";
  OTPInputType["Underline"] = "underline";
})(OTPInputType || (exports.OTPInputType = OTPInputType = {}));

const OTPInput = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
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
  const renderSymbol = (0, _react.useCallback)((symbol, isFocused) => {
    let textChild = null;

    if (symbol) {
      textChild = isSecure ? "•" : symbol;
    } else if (isFocused) {
      textChild = /*#__PURE__*/_react.default.createElement(_reactNativeConfirmationCodeField.Cursor, null);
    }

    return textChild;
  }, [isSecure]);
  const renderOtpCell = (0, _react.useCallback)((index, symbol, isFocused) => {
    let wrapperStyle = styles.cellRoot;
    let cellFocusStyle = styles.focusCell;

    if (otpInputType === OTPInputType.Box) {
      wrapperStyle = styles.boxCellRoot;
      cellFocusStyle = styles.boxCellFocus;
    }

    return /*#__PURE__*/_react.default.createElement(_Component.default, {
      key: index,
      style: [wrapperStyle, cellStyle, isFocused ? focusCellStyle || cellFocusStyle : undefined]
    }, /*#__PURE__*/_react.default.createElement(_ThemedComponent.default, {
      style: [styles.cellText, cellTextStyle, isFocused && focusCellTextStyle]
    }, renderSymbol(symbol, isFocused)));
  }, [otpInputType, focusCellStyle, cellTextStyle, cellStyle]);
  return /*#__PURE__*/_react.default.createElement(_Component.default, {
    ref: ref,
    style: [styles.wrapperStyle, style]
  }, /*#__PURE__*/_react.default.createElement(_reactNativeConfirmationCodeField.CodeField, {
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
  }), !!errorMessage && /*#__PURE__*/_react.default.createElement(_ThemedComponent.default, _extends({}, errorProps, {
    style: _reactNative.StyleSheet.flatten([errorStyle && errorStyle])
  }), errorMessage));
});

const styles = _reactNative.StyleSheet.create({
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

var _default = OTPInput;
exports.default = _default;
//# sourceMappingURL=Component.js.map