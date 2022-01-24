import React, { FunctionComponent, forwardRef } from 'react';
import { ViewStyle, StyleProp, TextStyle, StyleSheet } from 'react-native';
import {
  CodeField,
  Cursor,
  CodeFieldProps,
} from 'react-native-confirmation-code-field';
import type { PropsWithRef } from '../../../type';
import Text from '../Text/ThemedComponent';
import View from '../View/Component';

export type OTPInputProps = PropsWithRef<
  CodeFieldProps & {
    style?: StyleProp<ViewStyle>;
    value?: string;
    pinCount?: number;
    autoFocus?: boolean;
    textContentType?: string;
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
  }
>;

const OTPInput: FunctionComponent<OTPInputProps> = forwardRef<
  any,
  OTPInputProps
>(
  (
    {
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
      autoFocus,
    },
    ref
  ) => {
    return (
      <View ref={ref} style={StyleSheet.flatten([styles.container, style])}>
        <CodeField
          autoFocus={autoFocus}
          value={value}
          onBlur={onBlur}
          onChangeText={onChangeText}
          cellCount={pinCount}
          rootStyle={styles.codeFiledRoot}
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
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  codeFiledRoot: {
    width: '100%',
    height: '100%',
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
