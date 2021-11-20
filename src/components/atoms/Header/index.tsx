import { withTheme } from '../../../theme';
import type { HeaderProps } from './Component';
import Header from './ThemedComponent';

export { Header };
export type { HeaderProps };
export default withTheme(Header, 'Header');
