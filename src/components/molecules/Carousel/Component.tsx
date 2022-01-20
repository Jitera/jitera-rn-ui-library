import React, { forwardRef, FC, useCallback, useState } from 'react';
import {
  View,
  Image,
  ViewStyle,
  StyleSheet,
  ImageSourcePropType,
  StyleProp,
  LayoutChangeEvent,
} from 'react-native';
import type { PropsWithRef } from '../../../type';

import SCarousel, {
  CarouselProps as SCarouselProps,
  Pagination,
} from 'react-native-snap-carousel';

export type CarouselProps = PropsWithRef<
  Omit<SCarouselProps<ImageSourcePropType>, 'renderItem'> & {
    style?: StyleProp<ViewStyle>;
  }
>;

const Carousel: FC<CarouselProps> = forwardRef<any, CarouselProps>(
  ({ data, style = {}, ...props }, ref) => {
    const [sliderWidth, setSliderWidth] = useState(1);
    const [activeSlide, setActiveSlide] = useState(0);

    const renderItem = useCallback(
      ({ item }) => (
        <Image source={item} style={styles.imageItem} resizeMode="stretch" />
      ),
      []
    );

    const onLayout = useCallback((event: LayoutChangeEvent) => {
      const { width } = event.nativeEvent.layout;
      setSliderWidth(width);
    }, []);

    return (
      <View ref={ref} style={style} onLayout={onLayout}>
        <SCarousel
          {...props}
          itemWidth={sliderWidth}
          sliderWidth={sliderWidth}
          onSnapToItem={(index) => setActiveSlide(index)}
          data={data}
          renderItem={renderItem}
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={activeSlide}
          dotStyle={styles.dotStyle}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  imageItem: {
    width: '100%',
    height: '100%',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: '#000000',
  },
});

Carousel.displayName = 'Carousel';

export default Carousel;
