import React, { forwardRef, FC } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  FlatListProps,
  ViewStyle
} from 'react-native';
import type { PropsWithRef } from '../../../type';

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

export type JiteraFlatListProps = PropsWithRef<
  FlatListProps<any> & {
    style?: ViewStyle
    isPreview?: false
  }
>;

const JiteraFlatList: FC<JiteraFlatListProps> = forwardRef<any, JiteraFlatListProps>(
  (
    { style, isPreview, ...props },
    ref
  ) => {
    if (isPreview) {
      return (
        <View {...props} ref={ref}>
          <Item title="List 1" />
          <Item title="List 2" />
          <Item title="List 3" />
        </View>
      )
    }
  
    return (
      <FlatList
        style={[styles.container, style]}
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

JiteraFlatList.displayName = 'FlatList';

export default JiteraFlatList;
