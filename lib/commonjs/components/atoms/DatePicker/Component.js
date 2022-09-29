"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _datetimepicker = _interopRequireDefault(require("@react-native-community/datetimepicker"));

var _theme = require("../../../theme");

var _index = require("../../../index");

var _defaultTheme$colors3, _defaultTheme$colors4, _defaultTheme$colors5, _defaultTheme$colors6;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const formatDateTime = (date, mode) => {
  const hour = date.getHours();
  const HH = hour < 10 ? `0${hour}` : hour;
  const minute = date.getMinutes();
  const MM = minute < 10 ? `0${minute}` : minute;
  const day = date.getDate();
  const DD = day < 10 ? `0${day}` : day;
  const month = date.getMonth() + 1;
  const MO = month < 10 ? `0${month}` : month;

  if (mode === "date") {
    return `${DD}/${MO}/${date.getFullYear()}`;
  }

  if (mode === "time") {
    return `${HH}:${MM}`;
  }

  return `${DD}/${MO}/${date.getFullYear()} ${HH}:${MM}`;
};

const DatePicker = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  var _defaultTheme$colors, _defaultTheme$spacing, _defaultTheme$fontSiz, _defaultTheme$colors2;

  let {
    value,
    style,
    display = "spinner",
    dateMode = "datetime",
    confirmText = "Confirm",
    cancelText = "Cancel",
    onBlur,
    onChange,
    disabled,
    cancelButtonStyle,
    confirmButtonStyle,
    errorStyle,
    errorMessage,
    isPreview = false,
    ...props
  } = _ref;
  const [show, setShow] = (0, _react.useState)(false);
  const [date, setDate] = (0, _react.useState)(value ? value : new Date());
  const [step, setStep] = (0, _react.useState)(1);
  const selectedMode = dateMode === "datetime" ? step === 1 ? "date" : "time" : dateMode;

  const handleConfirm = () => {
    if (!onChange) {
      return;
    }

    if (dateMode !== "datetime") {
      onChange(date);
      setShow(false);
      setDate(date);
    } else if (step === 1) {
      setStep(2);
      handleOpenPicker();
      return;
    } else {
      onChange(date);
      setStep(1);
      setShow(false);
    }

    if (typeof onBlur === "function") {
      onBlur();
    }
  };

  const handleCancel = () => {
    setShow(false);
    setStep(1);

    if (typeof onBlur === "function") {
      onBlur();
    }
  };

  const handleChange = (e, newDate) => {
    if (dateMode !== "datetime" || step === 1) {
      setDate(newDate);
    } else {
      const lastDate = date;
      lastDate === null || lastDate === void 0 ? void 0 : lastDate.setHours((newDate === null || newDate === void 0 ? void 0 : newDate.getHours()) || 0);
      lastDate === null || lastDate === void 0 ? void 0 : lastDate.setMinutes((newDate === null || newDate === void 0 ? void 0 : newDate.getMinutes()) || 0);
      lastDate === null || lastDate === void 0 ? void 0 : lastDate.setSeconds((newDate === null || newDate === void 0 ? void 0 : newDate.getSeconds()) || 0);
      setDate(lastDate);
    }
  };

  const handleOpenPicker = () => {
    if (isPreview) {
      return;
    }

    setShow(true);
  };

  const hideErrorMessage = !errorMessage;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    disabled: disabled,
    onPress: handleOpenPicker,
    style: [styles.dateInput, style],
    ref: ref
  }, /*#__PURE__*/_react.default.createElement(_index.Text, {
    style: [styles.placeholderText]
  }, value ? formatDateTime(value, dateMode) : "--"), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.iconContainer
  }, /*#__PURE__*/_react.default.createElement(_index.Icon, {
    color: _theme.defaultTheme === null || _theme.defaultTheme === void 0 ? void 0 : (_defaultTheme$colors = _theme.defaultTheme.colors) === null || _defaultTheme$colors === void 0 ? void 0 : _defaultTheme$colors.grey3,
    name: "calendar",
    type: _index.IconType.AntDesign
  }))), /*#__PURE__*/_react.default.createElement(_index.Text, {
    style: _reactNative.StyleSheet.flatten([{
      marginTop: _theme.defaultTheme === null || _theme.defaultTheme === void 0 ? void 0 : (_defaultTheme$spacing = _theme.defaultTheme.spacing) === null || _defaultTheme$spacing === void 0 ? void 0 : _defaultTheme$spacing.SPACING_5,
      fontSize: _theme.defaultTheme === null || _theme.defaultTheme === void 0 ? void 0 : (_defaultTheme$fontSiz = _theme.defaultTheme.fontSizes) === null || _defaultTheme$fontSiz === void 0 ? void 0 : _defaultTheme$fontSiz.FONT_12,
      color: _theme.defaultTheme === null || _theme.defaultTheme === void 0 ? void 0 : (_defaultTheme$colors2 = _theme.defaultTheme.colors) === null || _defaultTheme$colors2 === void 0 ? void 0 : _defaultTheme$colors2.error
    }, errorStyle && errorStyle, hideErrorMessage && {
      height: 0,
      margin: 0,
      marginTop: 0,
      padding: 0
    }])
  }, errorMessage), /*#__PURE__*/_react.default.createElement(_reactNative.Modal, {
    animationType: "slide",
    transparent: true,
    visible: show,
    onRequestClose: () => {
      setShow(!show);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.modalContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.modalActionContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: handleCancel
  }, /*#__PURE__*/_react.default.createElement(_index.Text, {
    style: [styles.cancelButton, cancelButtonStyle]
  }, cancelText)), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: handleConfirm
  }, /*#__PURE__*/_react.default.createElement(_index.Text, {
    style: [styles.confirmButton, confirmButtonStyle]
  }, confirmText))), /*#__PURE__*/_react.default.createElement(_datetimepicker.default, _extends({
    value: date ? date : new Date(),
    timeZoneOffsetInSeconds: 0,
    mode: selectedMode,
    display: display,
    onChange: handleChange
  }, props)))));
});

const styles = _reactNative.StyleSheet.create({
  iconStyle: {
    color: _theme.defaultTheme === null || _theme.defaultTheme === void 0 ? void 0 : (_defaultTheme$colors3 = _theme.defaultTheme.colors) === null || _defaultTheme$colors3 === void 0 ? void 0 : _defaultTheme$colors3.grey5
  },
  iconContainer: {
    position: "absolute",
    right: 10
  },
  dateInput: {
    borderRadius: 5,
    fontSize: 18,
    width: "100%",
    borderWidth: 1,
    justifyContent: "center",
    borderColor: _theme.defaultTheme === null || _theme.defaultTheme === void 0 ? void 0 : (_defaultTheme$colors4 = _theme.defaultTheme.colors) === null || _defaultTheme$colors4 === void 0 ? void 0 : _defaultTheme$colors4.grey5,
    minHeight: 50,
    paddingHorizontal: 10,
    paddingRight: 30
  },
  placeholderText: {
    fontSize: 16
  },
  modalContainer: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    backgroundColor: _theme.defaultTheme === null || _theme.defaultTheme === void 0 ? void 0 : (_defaultTheme$colors5 = _theme.defaultTheme.colors) === null || _defaultTheme$colors5 === void 0 ? void 0 : _defaultTheme$colors5.white,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  modalActionContainer: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  cancelButton: {
    fontSize: 15
  },
  confirmButton: {
    fontSize: 15,
    color: _theme.defaultTheme === null || _theme.defaultTheme === void 0 ? void 0 : (_defaultTheme$colors6 = _theme.defaultTheme.colors) === null || _defaultTheme$colors6 === void 0 ? void 0 : _defaultTheme$colors6.success
  }
});

DatePicker.displayName = "DatePicker";
var _default = DatePicker;
exports.default = _default;
//# sourceMappingURL=Component.js.map