import React from 'react';
import { View, ViewStyle, StyleProp, ImageResizeMode } from 'react-native';
import { SwiperProps } from 'react-native-web-swiper';
export interface CarouselProps extends SwiperProps {
    data: string[];
    resizeMode?: ImageResizeMode;
    style?: StyleProp<ViewStyle>;
}
declare const Carousel: React.ForwardRefExoticComponent<CarouselProps & React.RefAttributes<View>>;
export default Carousel;
