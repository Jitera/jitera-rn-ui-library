import React from 'react';
import { Animated, ViewStyle, StyleProp } from 'react-native';
import type { ThemeProps } from '../../../theme';
interface ToastType {
    key: string;
    color?: string;
    backgroundColor?: string;
}
export declare type ToastProps = {
    animationDuration?: number;
    duration?: number;
    errorDuration?: number;
    toastTypes?: Array<ToastType>;
};
declare type ToastState = {
    animation: Animated.Value;
    show: boolean;
    component?: React.ReactNode;
    props: any;
    containerStyle?: StyleProp<ViewStyle>;
};
export declare class ToastComponent extends React.PureComponent<ToastProps & Partial<ThemeProps<ToastProps>>, ToastState> {
    static displayName: string;
    timeout?: any;
    queue: Array<any>;
    toastTypes?: Array<ToastType>;
    static defaultProps: {
        animationDuration: number;
        duration: number;
        errorDuration: number;
        toastTypes: any;
    };
    state: {
        animation: Animated.Value;
        show: boolean;
        component: any;
        props: {};
        containerStyle: any;
        barHeight: number;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    show(component: string | React.ReactNode, props?: {}): void;
    clear(): void;
    process(): void;
    hide(callback?: () => void): void;
    getAnimationValue(): {
        transform: {
            translateY: Animated.AnimatedInterpolation;
        }[];
    };
    render(): JSX.Element;
}
declare const _default: {
    show(component: React.ReactNode, modalOptions?: any, overlayOptions?: any): void;
    success(component: React.ReactNode, modalOptions?: any, overlayOptions?: any): void;
    error(component: React.ReactNode, modalOptions?: any, overlayOptions?: any): void;
    hide(callback?: () => void): void;
    isShow(): any;
};
export default _default;
