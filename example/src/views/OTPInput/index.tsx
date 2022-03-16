import React from 'react';
import {OTPInput} from '@jitera/jitera-rn-ui-library';

import BaseLayout from '~/layouts/Base';

const OTPInputViews: React.FC = () => {
  const [value, setValue] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleChange = (code: string | undefined) => {
    setValue(code || '');
  };

  const handleBlur = (e: any) => {
    // TODO: testing
    console.log('event', e);
    setErrorMessage('This is test error message on blur!');
  };

  return (
    <BaseLayout>
      <OTPInput
        autoFocus
        onChange={handleChange}
        value={value}
        onBlur={handleBlur as any}
        errorMessage={errorMessage}
        enableMask={false}
        otpInputType="box"
        isPreview={true}
      />
    </BaseLayout>
  );
};

export default OTPInputViews;
