import { Input } from '@jitera/jitera-rn-ui-library';
import React, { useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import BaseLayout from '~/layouts/Base';

const InputViews: React.FC = () => {
  const [password, setPassword] = useState<string>('Password')
  const inputPasswordRef = useRef<TextInput>(null)
  const [address, setAddress] = useState<string>('Address')
  const inputAddressRef = useRef<TextInput>(null)

  useEffect(() => {
    setTimeout(() => {
      inputPasswordRef.current?.focus()
      setTimeout(() => {
        inputAddressRef.current?.focus()
      }, 1000);
    }, 1000);
  }, [])

  return (
    <BaseLayout>
      <Input
        style={{marginBottom: 30}}
        title="Password"
        inputRef={inputPasswordRef}
        isPreview={false}
        value={password}
        errorMessage={!(password?.length > 0) ? 'Lorem ipsum dolor sit amet amet.': undefined}
        onChange={setPassword}
        secureTextEntry={true}
        onBlur={() => {
          console.log('blur')
        }}
        onClear={() => setPassword('')}
      />
      <Input
        title="Address"
        inputRef={inputAddressRef}
        isPreview={false}
        value={address}
        errorMessage={!(address?.length > 0) ? 'Lorem ipsum dolor sit amet amet.': undefined}
        maxLength={100}
        numberOfLines={3}
        onChange={setAddress}
        onBlur={() => {
          console.log('blur')
        }}
        onClear={() => setAddress('')}
      />
    </BaseLayout>
  );
}

export default InputViews;
