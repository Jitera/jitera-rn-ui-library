import React, { useEffect } from 'react';
import {
  ViewStyle,
  TextStyle,
  StyleProp,
  StyleSheet,
  Keyboard,
} from 'react-native';
import { View, Text } from '../../..';
import OTPInputView, {
  KeyboardType,
} from '../../../shared/react-native-otp-input';
import type { RneFunctionComponent } from '../../../theme/helpers';
import useStyles from './styles';

export interface OTPInputProps {
  value?: string;
  pinCount?: number;
  style?: ViewStyle;
  autoFocusOnLoad?: boolean;
  underlineStyleBase?: TextStyle;
  underlineStyleHighLighted?: TextStyle;
  onChangeText?: (code?: string) => void;
  onCodeChanged?: (code?: string) => void;
  secureTextEntry?: boolean;
  disabled?: boolean;
  editable?: boolean;
  keyboardAppearance?: 'default' | 'dark' | 'light';
  keyboardType?: KeyboardType;
  clearInputs?: boolean;
  placeholderCharacter?: string;
  placeholderTextColor?: string;
  onBlur?: (code?: string) => void;
  onCodeFilled?: (code?: string) => void;
  errorMessage?: string;
  errorProps?: any;
  renderErrorMessage?: boolean;
  errorStyle?: StyleProp<TextStyle>;
}

export const OTPInput: RneFunctionComponent<OTPInputProps> = ({
  theme,
  value,
  style,
  disabled,
  onBlur,
  errorStyle,
  errorProps,
  clearInputs,
  keyboardType,
  errorMessage,
  editable = true,
  pinCount = 4,
  onCodeFilled,
  secureTextEntry,
  onChangeText,
  onCodeChanged,
  autoFocusOnLoad,
  underlineStyleBase,
  keyboardAppearance,
  placeholderCharacter,
  placeholderTextColor,
  renderErrorMessage = true,
  underlineStyleHighLighted,
}) => {
  const styles = useStyles();

  const hideErrorMessage = !renderErrorMessage && !errorMessage;

  useEffect(() => {
    const keyboardListener = Keyboard.addListener('keyboardDidHide', () => {
      onBlur && onBlur(value);
    });

    return () => {
      if (keyboardListener && keyboardListener.remove) {
        keyboardListener.remove();
      }
    };
  }, [onBlur, value]);

  return (
    <View style={styles.wrapper}>
      <OTPInputView
        code={value}
        pinCount={pinCount}
        clearInputs={clearInputs}
        keyboardType={keyboardType}
        autoFocusOnLoad={autoFocusOnLoad}
        style={style || styles.container}
        secureTextEntry={secureTextEntry}
        keyboardAppearance={keyboardAppearance}
        onCodeFilled={onCodeFilled}
        placeholderCharacter={placeholderCharacter}
        placeholderTextColor={placeholderTextColor}
        onCodeChanged={onCodeChanged || onChangeText}
        editable={disabled !== undefined ? !disabled : editable}
        codeInputFieldStyle={underlineStyleBase || styles.underlineStyleBase}
        codeInputHighlightStyle={
          underlineStyleHighLighted || styles.underlineStyleHighLighted
        }
      />
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
    </View>
  );
};
