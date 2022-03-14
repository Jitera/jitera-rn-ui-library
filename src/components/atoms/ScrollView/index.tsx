import type { ScrollViewProps } from './Component';
import { withTheme } from '../../../theme';
import ScrollView from './ThemedComponent';

export { ScrollView };
export type { ScrollViewProps };
export default withTheme(ScrollView, 'ScrollView');
