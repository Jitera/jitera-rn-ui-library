import { Input } from '@jitera/jitera-rn-ui-library';
import React, { useState } from 'react';
import BaseLayout from '~/layouts/Base';

const InputViews: React.FC = () => {
  const [value, setValue] = useState<string>('Address')

  return (
    <BaseLayout>
      <Input
        label="Address"
        isPreview={false}
        value={value}
        errorMessage={!(value?.length > 0) ? 'Lorem ipsum dolor sit amet amet.': undefined}
        maxLength={100}
        onChange={setValue}
        onBlur={() => {
          console.log('blur')
        }}
        onClear={() => setValue('')}
      />
    </BaseLayout>
  );
}

export default InputViews;
