import { withTheme } from '../../../theme';
import { Icon, IconProps, IconNode, IconObject, IconType } from './Component';

export { Icon };
export type { IconProps, IconNode, IconObject, IconType };

const IconWithTheme: any = withTheme(Icon, 'Icon');
export default IconWithTheme;
