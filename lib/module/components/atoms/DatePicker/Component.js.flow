import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  Modal,
} from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import type { PropsWithRef, PreviewProps } from "../../../type";
import { defaultTheme } from "../../../theme";
import { Text, Icon, IconType } from "../../../index";

/**
 * DatePicker support date/time select on iOS and Android and built on top of react-native-datetimepicker
 * Reference: https://github.com/react-native-datetimepicker/datetimepicker
 **/

export type DateMode = "date" | "time" | "datetime";

export interface DatePickerProps extends PreviewProps {
  value?: Date;
  dateMode?: DateMode;
  confirmText?: string;
  cancelText?: string;
  onChange?: (date: any) => void;
  onBlur?: any;
  style?: ViewStyle;
  disabled?: boolean;
  cancelButtonStyle?: TextStyle;
  confirmButtonStyle?: TextStyle;
  display?: "default" | "compact" | "inline" | "spinner" | "clock" | "calendar";
  errorStyle?: StyleProp<TextStyle>;
  errorMessage?: string;
}

const formatDateTime = (date: Date, mode: DateMode) => {
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

const DatePicker = React.forwardRef<TouchableOpacity, DatePickerProps>(
  (
    {
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
    },
    ref
  ) => {
    const [show, setShow] = useState<boolean>(false);
    const [date, setDate] = useState<Date>(value ? value : new Date());
    const [step, setStep] = useState<number>(1);

    const selectedMode: any = dateMode === "datetime" ? (step === 1 ? "date" : "time") : dateMode;

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

    const handleChange = (e: any, newDate: any) => {
      if (dateMode !== "datetime" || step === 1) {
        setDate(newDate);
      } else {
        const lastDate = date;
        lastDate?.setHours(newDate?.getHours() || 0);
        lastDate?.setMinutes(newDate?.getMinutes() || 0);
        lastDate?.setSeconds(newDate?.getSeconds() || 0);
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

    return (
      <>
        <TouchableOpacity
          disabled={disabled}
          onPress={handleOpenPicker}
          style={[styles.dateInput, style]}
          ref={ref}
        >
          <Text style={[styles.placeholderText]}>
            {value ? formatDateTime(value, dateMode) : "--"}
          </Text>
          <View style={styles.iconContainer}>
            <Icon color={defaultTheme?.colors?.grey3} name="calendar" type={IconType.AntDesign} />
          </View>
        </TouchableOpacity>
        <Text
          style={StyleSheet.flatten([
            {
              marginTop: defaultTheme?.spacing?.SPACING_5,
              fontSize: defaultTheme?.fontSizes?.FONT_12,
              color: defaultTheme?.colors?.error,
            },
            errorStyle && errorStyle,
            hideErrorMessage && {
              height: 0,
              margin: 0,
              marginTop: 0,
              padding: 0,
            },
          ])}
        >
          {errorMessage}
        </Text>
        <Modal
          animationType="slide"
          transparent={true}
          visible={show}
          onRequestClose={() => {
            setShow(!show);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalActionContainer}>
              <TouchableOpacity onPress={handleCancel}>
                <Text style={[styles.cancelButton, cancelButtonStyle]}>{cancelText}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleConfirm}>
                <Text style={[styles.confirmButton, confirmButtonStyle]}>{confirmText}</Text>
              </TouchableOpacity>
            </View>
            <RNDateTimePicker
              value={date ? date : new Date()}
              timeZoneOffsetInSeconds={0}
              mode={selectedMode}
              display={display}
              onChange={handleChange}
              {...props}
            />
          </View>
        </Modal>
      </>
    );
  }
);

const styles = StyleSheet.create({
  iconStyle: {
    color: defaultTheme?.colors?.grey5,
  },
  iconContainer: {
    position: "absolute",
    right: 10,
  },
  dateInput: {
    borderRadius: 5,
    fontSize: 18,
    width: "100%",
    borderWidth: 1,
    justifyContent: "center",
    borderColor: defaultTheme?.colors?.grey5,
    minHeight: 50,
    paddingHorizontal: 10,
    paddingRight: 30,
  },
  placeholderText: {
    fontSize: 16,
  },
  modalContainer: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    backgroundColor: defaultTheme?.colors?.white,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  modalActionContainer: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    fontSize: 15,
  },
  confirmButton: {
    fontSize: 15,
    color: defaultTheme?.colors?.success,
  },
});

DatePicker.displayName = "DatePicker";

export default DatePicker;
