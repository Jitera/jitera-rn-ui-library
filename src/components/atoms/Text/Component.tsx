import React from 'react';
import {
  Text as NativeText,
  StyleSheet,
  TextProps as RNTextProps,
  TextStyle,
  StyleProp,
} from 'react-native';
import { patchWebProps } from '../../../theme/helpers';

export interface TextProps extends RNTextProps {
  style?: StyleProp<TextStyle>;
  textColor?: string;
}

/** Text displays words and characters at various sizes. */
const Text = React.forwardRef<NativeText, TextProps>(
  ({ style = {}, children = '', textColor, ...rest }, ref) => {
    return (
      <NativeText
        ref={ref}
        style={StyleSheet.flatten([
          {
            color: textColor,
          },
          style,
        ])}
        {...patchWebProps(rest)}
      >
        {children}
      </NativeText>
    );
  }
);

Text.displayName = 'Text';

export default Text;
