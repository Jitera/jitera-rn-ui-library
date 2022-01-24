import React, { forwardRef, FunctionComponent } from 'react';
import {
  Text as NativeText,
  StyleSheet,
  TextProps as TextProperties,
  TextStyle,
  StyleProp,
} from 'react-native';
import { patchWebProps } from '../../../theme/helpers';

export type TextProps = TextProperties & {
  style?: StyleProp<TextStyle>;
  textColor?: string;
};

/** Text displays words and characters at various sizes. */
const Text: FunctionComponent<TextProps> = forwardRef<any, TextProps>(
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
