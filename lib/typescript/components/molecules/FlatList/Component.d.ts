import React from 'react';
import { View, FlatList as RNFlatList, FlatListProps as RNFlatListProps } from 'react-native';
import type { PreviewProps } from '../../../type';
export interface FlatListProps extends PreviewProps, RNFlatListProps<unknown> {
}
declare const FlatList: React.ForwardRefExoticComponent<FlatListProps & React.RefAttributes<View | RNFlatList<unknown>>>;
export default FlatList;
