import ScrollView from './ThemedComponent';
import { withTheme } from '../../../theme';

import type { ScrollViewProps } from './Component';

export { ScrollView };
export type { ScrollViewProps };
export default withTheme(ScrollView, 'ScrollView');
