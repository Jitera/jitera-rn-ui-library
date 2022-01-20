import React from 'react';
import type { RneFunctionComponent } from '../../../theme/helpers';
import Carousel, { CarouselProps } from './Component';

/** Text displays words and characters at various sizes. */
const ThemedCarousel: RneFunctionComponent<Omit<CarouselProps, 'ref'>> = (
  props
) => {
  return <Carousel {...props} />;
};

Carousel.displayName = 'Carousel';

export default ThemedCarousel;
