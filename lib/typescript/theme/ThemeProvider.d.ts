import React from 'react';
import type { SafeAreaSize } from './safeAreaSize';
import type { FullTheme, Theme } from './theme';
import type { RneFunctionComponent } from './helpers';
declare type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};
export interface ThemeProps<T> {
    theme: Theme<T>;
    updateTheme: (updates: RecursivePartial<FullTheme>) => void;
    replaceTheme: (updates: RecursivePartial<FullTheme>) => void;
}
export declare const ThemeContext: React.Context<ThemeProps<any>>;
export declare type ThemeInnerProps = {
    useDark?: boolean;
    safeArea?: boolean;
    insets?: SafeAreaSize;
};
declare type ThemeProviderProps = {
    useDark?: boolean;
    safeArea?: boolean;
    children?: React.ReactNode;
};
declare const ThemeProvider: RneFunctionComponent<ThemeProviderProps>;
export default ThemeProvider;
export declare const ThemeConsumer: React.Consumer<ThemeProps<any>>;
