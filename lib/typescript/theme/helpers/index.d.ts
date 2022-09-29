/// <reference types="react" />
import Color from '../../shared/color';
import renderNode from './renderNode';
import styleCache from './styleCache';
import normalizeText from './normalizeText';
import type { ThemeProps } from '../index';
declare const ScreenWidth: number;
declare const ScreenHeight: number;
declare const isIOS: boolean;
export declare type RneFunctionComponent<T> = React.FunctionComponent<T & Partial<ThemeProps<T>>>;
export declare const patchWebProps: <T extends Record<any, any>>({ ...rest }: T) => T;
export { renderNode, normalizeText, ScreenWidth, ScreenHeight, styleCache, isIOS, Color, };
