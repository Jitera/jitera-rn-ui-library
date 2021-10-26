import React from 'react';
import type { FunctionComponent } from 'react';
import { View, ViewProps } from 'react-native';

type KeyboardType = 'default' | 'email-address' | 'number-pad' | 'phone-pad';

// eslint-disable-next-line no-undef
export type { KeyboardType };

const Input: FunctionComponent<any & ViewProps> = () => {
  return <View />;
};

export default Input;
