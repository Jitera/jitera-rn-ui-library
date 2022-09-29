import React from 'react';
import { Animated } from 'react-native';
import type { ThemeProps } from '../../../theme';
export declare type ModalProps = {
    local?: boolean;
};
declare type ModalState = {
    animation: Animated.Value;
    component: React.ReactNode;
    show: boolean;
    callback?: () => void;
    overlayOptions: any;
    touchOutSideToHide: boolean;
    disableAnimation: boolean;
    backButtonClose: boolean;
    animationName: string;
};
export declare class ModalComponent extends React.PureComponent<ModalProps & Partial<ThemeProps<ModalProps>>, ModalState> {
    static displayName: string;
    static defaultProps: {};
    state: {
        show: boolean;
        overlayOptions: {};
        component: any;
        touchOutSideToHide: boolean;
        disableAnimation: boolean;
        backButtonClose: boolean;
        animationName: string;
        animation: Animated.Value;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    isShow: () => boolean;
    canBack: () => boolean;
    hide: (callback?: () => void) => void;
    onBack: () => boolean;
    show: (component: React.ReactNode, modalOptions: any, overlayOptions: any) => void;
    handleTouchOutSide: () => void;
    renderBackground: () => JSX.Element;
    getAnimationStyles: () => {
        transform?: undefined;
    } | {
        transform: {
            translateY: Animated.AnimatedInterpolation;
        }[];
    } | {
        transform: {
            scale: Animated.Value;
        }[];
    };
    render(): JSX.Element;
}
declare const _default: {
    show(component: React.ReactNode, modalOptions?: any, overlayOptions?: any): void;
    hide(callback?: () => void): void;
    isShow(): any;
    canBack(): any;
};
export default _default;
