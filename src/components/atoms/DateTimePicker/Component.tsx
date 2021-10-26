import React, { useState } from 'react';
import {
  View,
  Modal,
  ViewStyle,
  TextStyle,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { Icon, Text } from '../../..';
import type { Theme } from '../../../theme';
import useStyles from './styles';
import type { RneFunctionComponent } from '../../../theme/helpers';

export type DateTimePickerProps = {
  theme?: Theme;
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
};

export const DateTimePicker: RneFunctionComponent<DateTimePickerProps> = ({
  value,
  theme,
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
  ...rest
}: DateTimePickerProps) => {
  const styles = useStyles();
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
                color={theme?.colors?.grey3}
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
            marginTop: theme?.spacing?.SPACING_5,
            fontSize: theme?.fontSizes?.FONT_12,
            color: theme?.colors?.error,
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
                {cancelText || ''}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleConfirm}>
              <Text style={[styles.confirmButton, confirmButtonStyle]}>
                {confirmText || ''}
              </Text>
            </TouchableOpacity>
          </View>
          <RNDateTimePicker
            value={date ? date : new Date()}
            timeZoneOffsetInSeconds={0}
            mode={selectedMode}
            display={display}
            onChange={handleChange}
            {...rest}
          />
        </View>
      </Modal>
    </>
  );
};

DateTimePicker.displayName = 'DateTimePicker';
