import { withTheme } from '../../../theme';
import type { DateTimePickerProps, DateMode } from './Component';
import DateTimePicker from './ThemedComponent';

export { DateTimePicker };
export type { DateTimePickerProps, DateMode };
export default withTheme(DateTimePicker, 'DateTimePicker');
