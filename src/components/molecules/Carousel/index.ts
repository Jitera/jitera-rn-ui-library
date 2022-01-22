import Carousel from './ThemedComponent';
import { withTheme } from '../../../theme';
import type { CarouselProps } from './Component';

export { Carousel };
export type { CarouselProps };
export default withTheme(Carousel, 'Carousel');
