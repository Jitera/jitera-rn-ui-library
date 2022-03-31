import Button from './ThemedComponent';
import { withTheme } from '../../../theme';

import type { ButtonProps } from './Component';

export { Button };
export type { ButtonProps };
export default withTheme(Button, 'Button');
