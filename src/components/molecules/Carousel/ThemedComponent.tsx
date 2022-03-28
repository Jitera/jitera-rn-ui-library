import React from 'react';

import type { View } from 'react-native';

import Carousel, { CarouselProps } from './Component';
import type { ThemeProps } from '../../../theme';

/** Text displays words and characters at various sizes. */
const ThemedCarousel = React.forwardRef<
  View,
  CarouselProps & Partial<ThemeProps<CarouselProps>>
>((props) => {
  return <Carousel {...props} />;
});

Carousel.displayName = 'Carousel';

export default ThemedCarousel;
