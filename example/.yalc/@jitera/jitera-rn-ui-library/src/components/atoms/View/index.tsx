import type { ViewProps } from './Component';
import { withTheme } from '../../../theme';
import View from './ThemedComponent';

export { View };
export type { ViewProps };
export default withTheme(View, 'View');
