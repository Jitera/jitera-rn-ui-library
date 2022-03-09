import ThirdPartyAuthButton, {
  ThirdPartyAuthProvider,
  GoogleAuthResult,
  FacebookAuthResult,
} from './Component';
import { withTheme } from '../../../theme';

import type { ThirdPartyAuthButtonProps } from './Component';

export { ThirdPartyAuthButton, ThirdPartyAuthProvider };
export type { ThirdPartyAuthButtonProps, GoogleAuthResult, FacebookAuthResult };
export default withTheme(ThirdPartyAuthButton, 'ThirdPartyAuthButton');
