import React, { FunctionComponent } from 'react';
import { StyleSheet, ViewStyle, StyleProp, TextStyle } from 'react-native';
import {
  CodeField,
  Cursor,
  CodeFieldProps,
} from 'react-native-confirmation-code-field';
import Text from '../Text/ThemedComponent';
import View from '../View/Component';

export type OTPInputProps = CodeFieldProps & {
  value?: string;
  pinCount?: number;
  textContentType?: string;

  style?: ViewStyle;
  cellStyle?: ViewStyle;
  focusCellStyle?: ViewStyle;
  cellTextStyle?: TextStyle;
  focusCellTextStyle?: TextStyle;

  onChangeText?: (code?: string) => void;
  onCodeChanged?: (code?: string) => void;
  onBlur?: (code: any) => void;

  errorMessage?: string;
  errorProps?: any;
  renderErrorMessage?: boolean;
  errorStyle?: StyleProp<TextStyle>;
};

const OTPInput: FunctionComponent<OTPInputProps> = ({
  style,
  value,
  onBlur,
  pinCount,
  cellStyle,
  errorProps,
  errorStyle,
  onChangeText,
  keyboardType,
  errorMessage,
  cellTextStyle,
  focusCellStyle,
  focusCellTextStyle,
}) => {
  return (
    <>
      <CodeField
        value={value}
        onBlur={onBlur}
        onChangeText={onChangeText}
        cellCount={pinCount}
        rootStyle={[styles.codeFiledRoot, style]}
        keyboardType={keyboardType}
        renderCell={({ index, symbol, isFocused }) => (
          <View
            key={index}
            style={[
              styles.cellRoot,
              cellStyle,
              isFocused ? focusCellStyle || styles.focusCell : undefined,
            ]}
          >
            <Text
              style={[
                styles.cellText,
                cellTextStyle,
                isFocused && focusCellTextStyle,
              ]}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
      <Text
        {...errorProps}
        style={StyleSheet.flatten([
          errorStyle && errorStyle,
          errorMessage && {
            height: 0,
            margin: 0,
            padding: 0,
          },
        ])}
      >
        {errorMessage}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  codeFiledRoot: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  cellText: {
    color: '#000',
    fontSize: 36,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#007AFF',
    borderBottomWidth: 2,
  },
});

export default OTPInput;
