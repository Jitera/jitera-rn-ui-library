import React from 'react';
import {DateTimePicker} from '@jitera/jitera-rn-ui-library';

import BaseLayout from '~/layouts/Base';

const DateTimePickerViews: React.FC = () => {
  const [value, setValue] = React.useState(new Date());
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleChange = (date: any) => {
    setValue(date);
  };

  const handleBlur = () => {
    // TODO: testing
    setErrorMessage('This is test error message on blur!');
  };

  return (
    <BaseLayout>
      <DateTimePicker
        value={value}
        dateMode="time"
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={errorMessage}
      />
    </BaseLayout>
  );
};

export default DateTimePickerViews;
