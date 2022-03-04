import React from 'react';
import type { RneFunctionComponent } from '../../../theme/helpers';
import JiteraFlatList, { JiteraFlatListProps } from './Component';

/** Text displays words and characters at various sizes. */
const ThemedFlatList: RneFunctionComponent<Omit<JiteraFlatListProps, 'ref'>> = (
  props
) => {
  return <JiteraFlatList {...props} />;
};

JiteraFlatList.displayName = 'FlatList';

export default ThemedFlatList;
