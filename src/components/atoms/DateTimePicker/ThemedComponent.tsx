import React from 'react';
import Image, { DateTimePickerProps } from './Component';
import type { RneFunctionComponent } from '../../../theme/helpers';

const ThemedDateTimePicker: RneFunctionComponent<
  Omit<DateTimePickerProps, 'ref'>
> = (props) => {
  return <Image {...props} />;
};

ThemedDateTimePicker.displayName = 'DateTimePicker';

export default ThemedDateTimePicker;
