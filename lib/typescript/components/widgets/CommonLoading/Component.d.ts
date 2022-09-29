import React from 'react';
import { Animated } from 'react-native';
import type { ThemeProps } from '../../../theme';
export declare type CommonLoadingProps = {
    loadingSize?: 'small' | 'large';
    loadingColor?: string;
};
declare type CommonLoadingState = {
    animation: Animated.Value;
    title: string;
    isShow: boolean;
    overlayProps: any;
    overlayStyles: any;
    showLoadingIcon: boolean;
    animationIconOnly: boolean;
};
export declare class CommonLoadingComponent extends React.Component<CommonLoadingProps & Partial<ThemeProps<CommonLoadingProps>>, CommonLoadingState> {
    static displayName: string;
    static defaultProps: {
        loadingSize: string;
    };
    state: {
        title: string;
        isShow: boolean;
        overlayProps: {};
        overlayStyles: {};
        showLoadingIcon: boolean;
        animationIconOnly: boolean;
        animation: Animated.Value;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    onProcess(): boolean;
    getAnimationStyle(): {
        opacity: Animated.AnimatedInterpolation;
        transform: {
            scale: Animated.AnimatedInterpolation;
        }[];
    };
    runAnimation(options: any, callback?: Animated.EndCallback): void;
    show({ showLoadingIcon, overlayProps, overlayStyles, animation, animations, animationIconOnly, title, }: {
        showLoadingIcon?: boolean;
        overlayProps?: {};
        overlayStyles?: {};
        animation?: boolean;
        animations?: {};
        animationIconOnly?: boolean;
        title?: string;
    }): void;
    hide(): void;
    renderBackground(): JSX.Element;
    render(): JSX.Element;
}
declare const _default: {
    show(options?: {}): void;
    hide(): void;
    onProcess(): void;
};
export default _default;
