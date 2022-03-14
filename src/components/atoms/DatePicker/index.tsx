import { withTheme } from '../../../theme';
import type { DatePickerProps, DateMode } from './Component';
import DatePicker from './ThemedComponent';

export { DatePicker };
export type { DatePickerProps, DateMode };
export default withTheme(DatePicker, 'DatePicker');
