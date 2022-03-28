import FlatList from './ThemedComponent';
import { withTheme } from '../../../theme';

import type { FlatListProps } from './Component';

export { FlatList };
export type { FlatListProps };
export default withTheme(FlatList, 'FlatList');
