import React, { useMemo } from 'react';
import {
  View,
  Image,
  ViewStyle,
  StyleSheet,
  StyleProp,
  ImageResizeMode,
} from 'react-native';

import Swiper, { SwiperProps } from 'react-native-web-swiper';

export interface CarouselProps extends SwiperProps {
  data: string[];
  resizeMode?: ImageResizeMode;
  style?: StyleProp<ViewStyle>;
}

const Carousel = React.forwardRef<View, CarouselProps>(
  (
    { data, resizeMode = 'stretch', style = {}, loop = true, ...props },
    ref
  ) => {

    const images = useMemo(() => {
      return data
        .map((url) => {
          if (url) return { uri: url }
          return undefined
        })
        .filter((image) => !!image)
    }, [data])

    return (
      <View ref={ref} style={StyleSheet.flatten([styles.container, style])}>
        <Swiper
          loop={loop}
          controlsProps={{
            dotsTouchable: true,
            prevPos: false,
            nextPos: false,
            ...props?.controlsProps,
          }}
          {...props}
        >
          {images.map((source, i) => (
            <View style={styles.slideContainer} key={i}>
              <Image
                source={source}
                style={styles.imageItem}
                resizeMode={resizeMode}
              />
            </View>
          ))}
        </Swiper>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageItem: {
    width: '100%',
    height: '100%',
  },
});

Carousel.displayName = 'Carousel';

export default Carousel;
