import Header from './ThemedComponent';
import { ThemeProps, withTheme } from '../../../theme';

import type { HeaderProps } from './Component';
import type { View } from 'react-native';

export { Header };
export type { HeaderProps };
export default withTheme<View>(Header, 'Header');
