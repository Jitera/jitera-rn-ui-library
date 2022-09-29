import React from "react";
import DatePicker, { DatePickerProps } from "./Component";

import type { TouchableOpacity } from "react-native";
import type { ThemeProps } from "../../../theme";

const ThemedDatePicker = React.forwardRef<
  TouchableOpacity,
  DatePickerProps & Partial<ThemeProps<DatePickerProps>>
>((props, ref) => {
  return <DatePicker ref={ref} {...props} />;
});

export default ThemedDatePicker;
