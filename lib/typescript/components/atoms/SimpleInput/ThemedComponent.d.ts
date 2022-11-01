import React from 'react';
import type { View } from 'react-native';
import { SimpleInputProps } from './Component';
import type { ThemeProps } from '../../../theme';
declare const ThemedInput: React.ForwardRefExoticComponent<SimpleInputProps & Partial<ThemeProps<SimpleInputProps>> & React.RefAttributes<View>>;
export default ThemedInput;
