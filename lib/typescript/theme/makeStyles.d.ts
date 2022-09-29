import { StyleSheet } from 'react-native';
import type { FullTheme } from './theme';
export declare const useTheme: () => import("./ThemeProvider").ThemeProps<any>;
export declare const makeStyles: <T extends StyleSheet.NamedStyles<any> | StyleSheet.NamedStyles<T>, V>(styles: T | ((theme: Partial<FullTheme>, props: V) => T)) => (props?: V) => T;
