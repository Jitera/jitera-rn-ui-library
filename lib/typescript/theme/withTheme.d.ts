import React from 'react';
import { ThemeProps } from './ThemeProvider';
export interface ThemedComponent {
    displayName: string;
}
declare function withTheme<P = any, T = any>(WrappedComponent: React.ForwardRefExoticComponent<P & Partial<ThemeProps<T>>> | React.FC<P & Partial<ThemeProps<T>>>, themeKey: string): React.FunctionComponent<Omit<P, keyof ThemeProps<T>>> | React.ForwardRefExoticComponent<P>;
export default withTheme;
