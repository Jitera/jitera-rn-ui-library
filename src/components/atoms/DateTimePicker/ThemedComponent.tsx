import React from 'react';
import type { RneFunctionComponent } from '../../../theme/helpers';
import DateTimePicker, { DateTimePickerProps } from './Component';

const ThemedDateTimePicker: RneFunctionComponent<
  Omit<DateTimePickerProps, 'ref'>
> = (props) => {
  return <DateTimePicker {...props} />;
};

export default ThemedDateTimePicker;
