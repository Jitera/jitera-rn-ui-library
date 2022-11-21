import { withTheme } from '../../../theme';
import SimpleInput from './ThemedComponent';

import type { SimpleInputProps } from './Component';

export { SimpleInput };
export type { SimpleInputProps };
export default withTheme(SimpleInput, 'Input');
