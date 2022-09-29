var _defaultTheme$colors3, _defaultTheme$colors4, _defaultTheme$colors5, _defaultTheme$colors6;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View, Modal } from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { defaultTheme } from "../../../theme";
import { Text, Icon, IconType } from "../../../index";
/**
 * DatePicker support date/time select on iOS and Android and built on top of react-native-datetimepicker
 * Reference: https://github.com/react-native-datetimepicker/datetimepicker
 **/

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

const DatePicker = /*#__PURE__*/React.forwardRef((_ref, ref) => {
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
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(value ? value : new Date());
  const [step, setStep] = useState(1);
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TouchableOpacity, {
    disabled: disabled,
    onPress: handleOpenPicker,
    style: [styles.dateInput, style],
    ref: ref
  }, /*#__PURE__*/React.createElement(Text, {
    style: [styles.placeholderText]
  }, value ? formatDateTime(value, dateMode) : "--"), /*#__PURE__*/React.createElement(View, {
    style: styles.iconContainer
  }, /*#__PURE__*/React.createElement(Icon, {
    color: defaultTheme === null || defaultTheme === void 0 ? void 0 : (_defaultTheme$colors = defaultTheme.colors) === null || _defaultTheme$colors === void 0 ? void 0 : _defaultTheme$colors.grey3,
    name: "calendar",
    type: IconType.AntDesign
  }))), /*#__PURE__*/React.createElement(Text, {
    style: StyleSheet.flatten([{
      marginTop: defaultTheme === null || defaultTheme === void 0 ? void 0 : (_defaultTheme$spacing = defaultTheme.spacing) === null || _defaultTheme$spacing === void 0 ? void 0 : _defaultTheme$spacing.SPACING_5,
      fontSize: defaultTheme === null || defaultTheme === void 0 ? void 0 : (_defaultTheme$fontSiz = defaultTheme.fontSizes) === null || _defaultTheme$fontSiz === void 0 ? void 0 : _defaultTheme$fontSiz.FONT_12,
      color: defaultTheme === null || defaultTheme === void 0 ? void 0 : (_defaultTheme$colors2 = defaultTheme.colors) === null || _defaultTheme$colors2 === void 0 ? void 0 : _defaultTheme$colors2.error
    }, errorStyle && errorStyle, hideErrorMessage && {
      height: 0,
      margin: 0,
      marginTop: 0,
      padding: 0
    }])
  }, errorMessage), /*#__PURE__*/React.createElement(Modal, {
    animationType: "slide",
    transparent: true,
    visible: show,
    onRequestClose: () => {
      setShow(!show);
    }
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.modalContainer
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.modalActionContainer
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: handleCancel
  }, /*#__PURE__*/React.createElement(Text, {
    style: [styles.cancelButton, cancelButtonStyle]
  }, cancelText)), /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: handleConfirm
  }, /*#__PURE__*/React.createElement(Text, {
    style: [styles.confirmButton, confirmButtonStyle]
  }, confirmText))), /*#__PURE__*/React.createElement(RNDateTimePicker, _extends({
    value: date ? date : new Date(),
    timeZoneOffsetInSeconds: 0,
    mode: selectedMode,
    display: display,
    onChange: handleChange
  }, props)))));
});
const styles = StyleSheet.create({
  iconStyle: {
    color: defaultTheme === null || defaultTheme === void 0 ? void 0 : (_defaultTheme$colors3 = defaultTheme.colors) === null || _defaultTheme$colors3 === void 0 ? void 0 : _defaultTheme$colors3.grey5
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
    borderColor: defaultTheme === null || defaultTheme === void 0 ? void 0 : (_defaultTheme$colors4 = defaultTheme.colors) === null || _defaultTheme$colors4 === void 0 ? void 0 : _defaultTheme$colors4.grey5,
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
    backgroundColor: defaultTheme === null || defaultTheme === void 0 ? void 0 : (_defaultTheme$colors5 = defaultTheme.colors) === null || _defaultTheme$colors5 === void 0 ? void 0 : _defaultTheme$colors5.white,
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
    color: defaultTheme === null || defaultTheme === void 0 ? void 0 : (_defaultTheme$colors6 = defaultTheme.colors) === null || _defaultTheme$colors6 === void 0 ? void 0 : _defaultTheme$colors6.success
  }
});
DatePicker.displayName = "DatePicker";
export default DatePicker;
//# sourceMappingURL=Component.js.map