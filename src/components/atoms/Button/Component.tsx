import React, { forwardRef, FC, ReactNode } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from 'react-native';
import type { PropsWithRef } from '../../../type';
import { isHexColor, hexToRgb } from '../../../theme/helpers';

export type ButtonProps = PropsWithRef<{
  style?: StyleProp<ViewStyle>;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  loading?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  children?: ReactNode;
}>;

const Button: FC<ButtonProps> = forwardRef<any, ButtonProps>(
  (
    {
      style,
      title,
      titleStyle: titleStyleProps,
      disabled,
      loading,
      onPress,
      children,
    },
    ref
  ) => {
    let containerStyle = StyleSheet.flatten([styles.container, style]);
    const titleStyle = StyleSheet.flatten([
      styles.title,
      titleStyleProps,
      (disabled || loading) && { opacity: 0.1 },
    ]);

    let backgroundColor = containerStyle.backgroundColor as string;

    if (backgroundColor && isHexColor(backgroundColor)) {
      const hexToRgbObj = hexToRgb(backgroundColor);

      if (hexToRgbObj) {
        backgroundColor = `rgb(${hexToRgbObj.r}, ${hexToRgbObj.g}, ${hexToRgbObj.b})`;
      }
    }

    if (
      (disabled || loading) &&
      backgroundColor &&
      backgroundColor.includes('rgb')
    ) {
      backgroundColor = backgroundColor.includes('rgb')
        ? backgroundColor.replace('rgb', 'rgba').replace(')', ',0.2)')
        : backgroundColor.replace(')', ',0.2)');
    }

    containerStyle.backgroundColor = backgroundColor;

    const handlePress = (event: GestureResponderEvent) => {
      if (!loading || !disabled) return;

      if (onPress) {
        return onPress(event);
      }
    };

    return (
      <TouchableOpacity ref={ref} style={containerStyle} onPress={handlePress}>
        <>
          {loading && <ActivityIndicator style={styles.loading} size="small" />}
          {title && <Text style={titleStyle}>{title}</Text>}
          {children}
        </>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    backgroundColor: '#40a9ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
  loading: {
    position: 'absolute',
  },
});

Button.displayName = 'Button';

export default Button;
