import React, { FunctionComponent, forwardRef, useState } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  Modal,
} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import type { PropsWithRef } from '../../../type';
import { defaultTheme } from '../../../theme';
import { Text, Icon } from '../../../index';

export type DateTimePickerProps = PropsWithRef<{
  value?: Date;
  dateMode?: 'date' | 'time' | 'datetime';
  confirmText?: string;
  cancelText?: string;
  onChange?: (date: any) => void;
  onBlur?: any;
  style?: ViewStyle;
  placeholder?: string;
  showIcon?: boolean;
  disabled?: boolean;
  iconComponent?: JSX.Element;
  placeholderStyle?: TextStyle;
  cancelButtonStyle?: TextStyle;
  confirmButtonStyle?: TextStyle;
  locale?: string;
  timeZoneOffsetInMinutes?: number;
  textColor?: string;
  themeVariant?: 'dark' | 'light';
  maximumDate?: Date;
  minimumDate?: Date;
  display?: 'default' | 'compact' | 'inline' | 'spinner' | 'clock' | 'calendar';
  errorProps?: any;
  errorStyle?: StyleProp<TextStyle>;
  errorMessage?: string;
  renderErrorMessage?: boolean;
}>;

const DateTimePicker: FunctionComponent<DateTimePickerProps> = forwardRef<
  any,
  DateTimePickerProps
>(
  (
    {
      value,
      style,
      display,
      dateMode,
      placeholder,
      placeholderStyle,
      confirmText,
      cancelText,
      onBlur,
      onChange,
      showIcon = true,
      disabled,
      iconComponent,
      cancelButtonStyle,
      confirmButtonStyle,
      errorStyle,
      errorProps,
      errorMessage,
      renderErrorMessage,
      ...props
    },
    ref
  ) => {
    const [show, setShow] = useState<boolean>(false);
    const [date, setDate] = useState<Date>(value ? value : new Date());
    const [step, setStep] = useState<number>(1);

    const selectedMode: any =
      dateMode === 'datetime' ? (step === 1 ? 'date' : 'time') : dateMode;

    const handleConfirm = () => {
      if (!onChange) {
        return;
      }
      if (dateMode !== 'datetime') {
        onChange(date);
        setShow(false);
      } else if (step === 1) {
        setStep(2);
        handleOpenPicker();
      } else {
        onChange(date);
        setStep(1);
        setShow(false);
      }
      if (typeof onBlur === 'function') {
        onBlur();
      }
    };

    const handleCancel = () => {
      setShow(false);
      setStep(1);
      if (typeof onBlur === 'function') {
        onBlur();
      }
    };

    const handleChange = (e: any, newDate: any) => {
      if (dateMode !== 'datetime' || step === 1) {
        setDate(newDate);
      } else {
        setDate((lastDate) => {
          lastDate?.setHours(newDate?.getHours() || 0);
          lastDate?.setMinutes(newDate?.getMinutes() || 0);
          lastDate?.setSeconds(newDate?.getSeconds() || 0);
          return lastDate;
        });
      }
    };

    const handleOpenPicker = () => {
      setShow(true);
    };

    const hideErrorMessage = !renderErrorMessage && !errorMessage;

    return (
      <>
        <TouchableOpacity
          disabled={disabled}
          onPress={handleOpenPicker}
          style={[styles.dateInput, style]}
        >
          <Text style={[styles.placeholderText, placeholderStyle]}>
            {value ? value.toDateString() : placeholder || '--'}
          </Text>
          {showIcon ? (
            <View style={styles.iconContainer}>
              {iconComponent || (
                <Icon
                  color={defaultTheme?.colors?.grey3}
                  name="calendar"
                  type="antdesign"
                />
              )}
            </View>
          ) : null}
        </TouchableOpacity>
        <Text
          {...errorProps}
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
                <Text style={[styles.cancelButton, cancelButtonStyle]}>
                  {cancelText}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleConfirm}>
                <Text style={[styles.confirmButton, confirmButtonStyle]}>
                  {confirmText}
                </Text>
              </TouchableOpacity>
            </View>
            <RNDateTimePicker
              ref={ref}
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
  container: {
    width: '100%',
  },
  iconStyle: {
    color: defaultTheme?.colors?.grey5,
  },
  iconContainer: {
    position: 'absolute',
    right: defaultTheme?.spacing?.SPACING_10,
  },
  dateInput: {
    borderRadius: defaultTheme?.spacing?.SPACING_5,
    fontSize: defaultTheme?.fontSizes?.FONT_18,
    width: '100%',
    borderWidth: 1,
    justifyContent: 'center',
    borderColor: defaultTheme?.colors?.grey5,
    minHeight: defaultTheme?.spacing?.SPACING_50,
    paddingHorizontal: defaultTheme?.spacing?.SPACING_10,
    paddingRight: defaultTheme?.spacing?.SPACING_30,
  },
  placeholderText: {
    fontSize: defaultTheme?.fontSizes?.FONT_16,
  },
  modalContainer: {
    position: 'absolute',
    width: '100%',
    height: undefined,
    bottom: 0,
    backgroundColor: defaultTheme?.colors?.white,
    borderTopLeftRadius: defaultTheme?.spacing?.SPACING_8,
    borderTopRightRadius: defaultTheme?.spacing?.SPACING_8,
  },
  modalActionContainer: {
    paddingVertical: defaultTheme?.spacing?.SPACING_15,
    paddingHorizontal: defaultTheme?.spacing?.SPACING_15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    fontSize: defaultTheme?.fontSizes?.FONT_15,
  },
  confirmButton: {
    fontSize: defaultTheme?.fontSizes?.FONT_15,
    color: defaultTheme?.colors?.success,
  },
});

DateTimePicker.displayName = 'DateTimePicker';

export default DateTimePicker;
