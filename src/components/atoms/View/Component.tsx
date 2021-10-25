import React from 'react';
import {
  View as NativeView,
  StyleSheet,
  ViewProps as NativeViewProps,
  ViewStyle,
  StyleProp,
} from 'react-native';
import { RneFunctionComponent, styleCache } from '../../../theme/helpers';

export type ViewProps = NativeViewProps & {
  nodeId?: string;
  nodeStyle?: StyleProp<ViewStyle>;
};

export const View: RneFunctionComponent<ViewProps> = ({
  style,
  nodeId,
  nodeStyle,
  children = null,
  ...rest
}) => {
  const cachedStyle =
    nodeId && nodeStyle ? styleCache(nodeId, nodeStyle) : null;
  return (
    <NativeView style={StyleSheet.flatten([cachedStyle, style])} {...rest}>
      {children}
    </NativeView>
  );
};

View.displayName = 'View';
