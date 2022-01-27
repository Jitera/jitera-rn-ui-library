import React, { forwardRef, FC } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
  View,
} from 'react-native';
import type { PropsWithRef } from '../../../type';
import { Color } from '../../../theme/helpers';

export type ButtonProps = PropsWithRef<{
  style?: StyleProp<ViewStyle>;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  loading?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
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
    const containerStyle = StyleSheet.flatten([styles.container, style]);
    const titleStyle = StyleSheet.flatten([
      styles.title,
      titleStyleProps,
      (disabled || loading) && { opacity: 0.1 },
    ]);

    let backgroundColor = containerStyle.backgroundColor as string;

    if ((disabled || loading) && backgroundColor) {
      backgroundColor = Color(backgroundColor).alpha(0.2).toString();
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
