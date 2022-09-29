import React from 'react';
import {
  View,
  StyleSheet,
  FlatList as RNFlatList,
  Text,
  FlatListProps as RNFlatListProps,
  ViewStyle
} from 'react-native';
import type { PreviewProps, PropsWithRef } from '../../../type';

// TODO: find a solution to add molecule component instead of mock component
const Item = ({ title }: { title: string }) => (
  <View
    style={{
      backgroundColor: '#c0d7ff',
      height: 60,
      justifyContent: 'center',
      marginBottom: 10,
      width: '100%'
    }}
  >
    <Text style={{ color: '#1890ff', textAlign: 'center' }}>{title}</Text>
  </View>
)

export interface FlatListProps extends PreviewProps, RNFlatListProps<unknown> {}

const FlatList = React.forwardRef<RNFlatList<unknown> | View, FlatListProps>(
  (
    { style, isPreview, ...props },
    ref
  ) => {
    if (isPreview) {
      return (
        <View {...props} ref={ref as React.ForwardedRef<View>}>
          <Item title="List 1" />
          <Item title="List 2" />
          <Item title="List 3" />
        </View>
      )
    }
  
    return (
      <RNFlatList
        style={[styles.container, style]}
        ref={ref as React.ForwardedRef<RNFlatList<unknown>>}
        {...props}
      />
    )
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

FlatList.displayName = 'FlatList';

export default FlatList;
