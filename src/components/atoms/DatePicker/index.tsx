import DatePicker from "./ThemedComponent";
import { withTheme } from "../../../theme";

import type { DatePickerProps, DateMode } from "./Component";

export { DatePicker };
export type { DatePickerProps, DateMode };
export default withTheme(DatePicker, "DatePicker");
