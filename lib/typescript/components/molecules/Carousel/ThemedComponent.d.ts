import React from 'react';
import type { View } from 'react-native';
import { CarouselProps } from './Component';
import type { ThemeProps } from '../../../theme';
/** Text displays words and characters at various sizes. */
declare const ThemedCarousel: React.ForwardRefExoticComponent<CarouselProps & Partial<ThemeProps<CarouselProps>> & React.RefAttributes<View>>;
export default ThemedCarousel;
