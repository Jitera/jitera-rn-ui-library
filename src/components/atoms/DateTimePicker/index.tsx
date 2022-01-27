import { withTheme } from '../../../theme';
import type { DateTimePickerProps } from './Component';
import DateTimePicker from './ThemedComponent';

export { DateTimePicker };
export type { DateTimePickerProps };
export default withTheme(DateTimePicker, 'DateTimePicker');
