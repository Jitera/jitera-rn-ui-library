import React, { useCallback } from 'react';
import { View as RNView, ViewStyle, StyleProp, TextStyle, StyleSheet } from 'react-native';
import {
  CodeField,
  Cursor,
  CodeFieldProps,
} from 'react-native-confirmation-code-field';
import type { PreviewProps, PropsWithRef } from '../../../type';
import Text from '../Text/ThemedComponent';
import View from '../View/Component';

export enum OTPInputType {
  Box = 'box',
  Underline = 'underline'
}

export interface OTPInputProps extends PreviewProps, Omit<CodeFieldProps, 'renderCell' | 'onChange'> {
  style?: StyleProp<ViewStyle>;
  value?: string;
  pinCount?: number;
  autoFocus?: boolean;
  cellStyle?: ViewStyle;
  focusCellStyle?: ViewStyle;
  cellTextStyle?: TextStyle;
  focusCellTextStyle?: TextStyle;
  otpInputType?: OTPInputType;
  isSecure?: boolean;
  onChange?: (code?: string) => void;
  onCodeChanged?: (code?: string) => void;
  onBlur?: (e: any) => void;
  renderCell?: any;
  errorMessage?: string;
  errorProps?: any;
  renderErrorMessage?: boolean;
  errorStyle?: StyleProp<TextStyle>;
}

const OTPInput = React.forwardRef<
  RNView,
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
      onChange,
      keyboardType = "number-pad",
      errorMessage,
      cellTextStyle,
      focusCellStyle,
      focusCellTextStyle,
      autoFocus,
      otpInputType = 'box',
      isSecure = false,
      isPreview
    },
    ref
  ) => {

    const renderSymbol = useCallback((symbol, isFocused) => {
      let textChild = null
      if (symbol) {
        textChild = isSecure ? '•' : symbol;
      } else if (isFocused) {
        textChild = <Cursor />;
      }
      return textChild
    }, [isSecure])

    const renderOtpCell = useCallback((index, symbol, isFocused) => {
      let wrapperStyle : ViewStyle = styles.cellRoot
      let cellFocusStyle: ViewStyle = styles.focusCell

      if (otpInputType === OTPInputType.Box) {
        wrapperStyle = styles.boxCellRoot
        cellFocusStyle = styles.boxCellFocus
      }
  
      return (
        <View
          key={index}
          style={[
            wrapperStyle,
            cellStyle,
            isFocused ? focusCellStyle || cellFocusStyle : undefined,
          ]}
        >
          <Text
            style={[
              styles.cellText,
              cellTextStyle,
              isFocused && focusCellTextStyle,
            ]}
          >
            {renderSymbol(symbol, isFocused)}
          </Text>
        </View>
      )
    }, [otpInputType, focusCellStyle, cellTextStyle, cellStyle])

    return (
      <View ref={ref} style={[styles.wrapperStyle, style]}>
        <CodeField
          editable={!isPreview}
          autoFocus={autoFocus}
          value={value}
          onBlur={onBlur}
          onChangeText={onChange}
          cellCount={pinCount}
          keyboardType={keyboardType}
          renderCell={({ index, symbol, isFocused }) => renderOtpCell(index, symbol, isFocused)}
        />
        {!!errorMessage && <Text
          {...errorProps}
          style={StyleSheet.flatten([
            errorStyle && errorStyle,
          ])}
        >
          {errorMessage}
        </Text>}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  wrapperStyle: {
    minWidth: 250,
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  boxCellRoot: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
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
  boxCellFocus: {
    borderColor: '#007AFF',
    borderWidth: 2,
  }
});

export default OTPInput;
