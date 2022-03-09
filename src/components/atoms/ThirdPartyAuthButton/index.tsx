import ThirdPartyAuthButton, { ThirdPartyAuthProvider } from "./Component";
import { withTheme } from '../../../theme';

import type { ThirdPartyAuthButtonProps } from './Component'

export { ThirdPartyAuthButton, ThirdPartyAuthProvider }
export type { ThirdPartyAuthButtonProps }
export default withTheme(ThirdPartyAuthButton, 'ThirdPartyAuthButton')