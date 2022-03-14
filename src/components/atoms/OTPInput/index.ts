import OTPInput from './ThemedComponent';
import type { OTPInputProps, OTPInputType } from './Component';
import { withTheme } from '../../../theme';

export { OTPInput };
export type { OTPInputProps, OTPInputType };
export default withTheme(OTPInput, 'OTPInput');
