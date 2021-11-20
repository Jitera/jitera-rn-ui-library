import { withTheme } from '../../../theme';
import type { ButtonProps } from './Component';
import Button from './ThemedComponent';

export { Button };
export type { ButtonProps };
export default withTheme(Button, 'Button');
