import React from 'react';

import type { FlatList as RNFlatList } from 'react-native';

import FlatList, { FlatListProps } from './Component';
import type { ThemeProps } from '../../../theme';

/** Text displays words and characters at various sizes. */
const ThemedFlatList = React.forwardRef<
  RNFlatList,
  FlatListProps & Partial<ThemeProps<FlatListProps>>
>((props) => {
  return <FlatList {...props} />;
});

FlatList.displayName = 'FlatList';

export default ThemedFlatList;
