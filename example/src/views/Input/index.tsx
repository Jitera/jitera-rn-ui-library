import { Input } from '@jitera/jitera-rn-ui-library';
import React, { useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import BaseLayout from '~/layouts/Base';

const InputViews: React.FC = () => {
  const [value, setValue] = useState<string>('Address')
  const inputRef = useRef<TextInput>(null)

  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus()
    }, 3000);
  }, [])

  return (
    <BaseLayout>
      <Input
        title="Address"
        inputRef={inputRef}
        isPreview={false}
        value={value}
        errorMessage={!(value?.length > 0) ? 'Lorem ipsum dolor sit amet amet.': undefined}
        maxLength={100}
        numberOfLines={3}
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
