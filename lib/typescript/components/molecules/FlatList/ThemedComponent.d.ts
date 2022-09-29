import React from 'react';
import type { FlatList as RNFlatList } from 'react-native';
import { FlatListProps } from './Component';
import type { ThemeProps } from '../../../theme';
/** Text displays words and characters at various sizes. */
declare const ThemedFlatList: React.ForwardRefExoticComponent<FlatListProps & Partial<ThemeProps<FlatListProps>> & React.RefAttributes<RNFlatList<any>>>;
export default ThemedFlatList;
