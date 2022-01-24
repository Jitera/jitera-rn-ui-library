import { withTheme } from '../../../theme';
import Icon, { IconProps, IconType } from './Component';

export { Icon };
export type { IconProps, IconType };

const IconWithTheme: any = withTheme(Icon, 'Icon');
export default IconWithTheme;
