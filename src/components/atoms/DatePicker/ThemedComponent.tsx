import React from 'react';
import type { RneFunctionComponent } from '../../../theme/helpers';
import DatePicker, { DatePickerProps } from './Component';

const ThemedDatePicker: RneFunctionComponent<
  Omit<DatePickerProps, 'ref'>
> = (props) => {
  return <DatePicker {...props} />;
};

export default ThemedDatePicker;
