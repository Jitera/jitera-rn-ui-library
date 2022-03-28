import View from './ThemedComponent';
import { withTheme } from '../../../theme';

import type { ViewProps } from './Component';

export { View };
export type { ViewProps };
export default withTheme(View, 'View');
