import React, { FunctionComponent } from 'react';
import { View, ViewProps } from 'react-native';

type KeyboardType = 'default' | 'email-address' | 'number-pad' | 'phone-pad';

// eslint-disable-next-line no-undef
export type { KeyboardType };

const Input: FunctionComponent<ViewProps> = () => {
  return <View />;
};

export default Input;
