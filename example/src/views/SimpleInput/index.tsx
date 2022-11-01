import { SimpleInput } from '@jitera/jitera-rn-ui-library';
import React, { useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import BaseLayout from '~/layouts/Base';

const InputViews: React.FC = () => {
  const [password, setPassword] = useState<string>('Password');
  const inputPasswordRef = useRef<TextInput>(null);
  const [address, setAddress] = useState<string>('Address');
  const inputAddressRef = useRef<TextInput>(null);

  useEffect(() => {
    setTimeout(() => {
      inputPasswordRef.current?.focus();
      setTimeout(() => {
        inputAddressRef.current?.focus();
      }, 1000);
    }, 1000);
  }, []);

  return (
    <BaseLayout>
      <SimpleInput
        style={{ marginBottom: 30 }}
        inputRef={inputPasswordRef}
        isPreview={false}
        value={password}
        onChange={setPassword}
        secureTextEntry={true}
        onBlur={() => {
          console.log('blur');
        }}
        onClear={() => setPassword('')}
      />
      <SimpleInput
        inputRef={inputAddressRef}
        isPreview={false}
        value={address}
        maxLength={100}
        numberOfLines={3}
        onChange={setAddress}
        onBlur={() => {
          console.log('blur');
        }}
        onClear={() => setAddress('')}
      />
    </BaseLayout>
  );
};

export default InputViews;
