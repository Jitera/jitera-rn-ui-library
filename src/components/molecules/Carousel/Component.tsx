import React, { forwardRef, FC } from 'react';
import {
  View,
  Image,
  ViewStyle,
  StyleSheet,
  ImageSourcePropType,
  StyleProp,
} from 'react-native';
import type { PropsWithRef } from '../../../type';

import Swiper, { SwiperProps } from 'react-native-web-swiper';

export type CarouselProps = PropsWithRef<
  SwiperProps & {
    data: ImageSourcePropType[];
    style?: StyleProp<ViewStyle>;
  }
>;

const Carousel: FC<CarouselProps> = forwardRef<any, CarouselProps>(
  ({ data, style = {}, ...props }, ref) => {
    return (
      <View ref={ref} style={StyleSheet.flatten([styles.container, style])}>
        <Swiper
          loop
          controlsProps={{
            dotsTouchable: true,
            prevPos: false,
            nextPos: false,
            ...props?.controlsProps,
          }}
          {...props}
        >
          {data.map((source, i) => (
            <View style={styles.slideContainer} key={i}>
              <Image                
                source={source}
                style={styles.imageItem}
                resizeMode="stretch"
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
    alignItems:"center",
    justifyContent:"center"
  },
  imageItem: {
    width: '100%',
    height: '100%',
  },
});

Carousel.displayName = 'Carousel';

export default Carousel;
