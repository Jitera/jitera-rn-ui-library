import React, { useRef, useState, forwardRef, FC } from 'react';
import {
  FlatList,
  View,
  ListRenderItemInfo,
  ViewToken,
  Image,
  LayoutChangeEvent,
  ViewStyle,
  ImageResizeMode,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import type { PropsWithRef } from '../../../type';
import CarouselIndicator, { IndicatorStyle } from './Indicator';

export type CarouselProps = PropsWithRef<{
  separatorWidth?: number;
  data: Array<ImageSourcePropType>;
  imageResizeMode?: ImageResizeMode;
  decelerationRate?: 'fast' | 'normal' | number;
  indicatorStyles?: IndicatorStyle;
  style?: ViewStyle;
}>;

const Carousel: FC<CarouselProps> = forwardRef<any, CarouselProps>(
  (
    {
      style,
      separatorWidth = 0,
      data,
      imageResizeMode = 'stretch',
      decelerationRate = 'fast',
      indicatorStyles,
    },
    ref
  ) => {
    const [index, setIndex] = useState<number>(0);
    const slider = useRef<FlatList>(null);
    const [totalItemWidth, setTotalItemWidth] = useState<number>();

    const onViewableItemsChangedRef = useRef(
      (info: {
        viewableItems: Array<ViewToken>;
        changed: Array<ViewToken>;
      }) => {
        const { viewableItems } = info;

        if (viewableItems.length > 0) {
          setIndex(viewableItems[0].index || 0);
        }
      }
    );

    const viewabilityConfigRef = useRef({
      viewAreaCoveragePercentThreshold: 50,
    });

    const renderSeparator = () => <View style={{ width: separatorWidth }} />;
    const renderItem = (params: ListRenderItemInfo<ImageSourcePropType>) => {
      return (
        <View
          style={StyleSheet.flatten([
            { width: totalItemWidth },
            styles.containerItem,
          ])}
        >
          <Image
            resizeMode={imageResizeMode}
            style={styles.imageItem}
            source={params.item}
          />
        </View>
      );
    };
    const handleLayout = (e: LayoutChangeEvent) => {
      const {
        nativeEvent: {
          layout: { width },
        },
      } = e;

      setTotalItemWidth(width + separatorWidth);
    };

    return (
      <View ref={ref} style={style} onLayout={handleLayout}>
        <FlatList
          ref={slider}
          horizontal
          snapToInterval={totalItemWidth}
          decelerationRate={decelerationRate}
          data={data}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={renderSeparator}
          keyExtractor={(item, i) => `${item}_${i}`}
          onViewableItemsChanged={onViewableItemsChangedRef.current}
          viewabilityConfig={viewabilityConfigRef.current}
        />
        <CarouselIndicator
          totalItems={data.length}
          currentIndex={index}
          {...indicatorStyles}
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
  containerItem: {
    height: '100%',
  },
});

Carousel.displayName = 'Carousel';

export default Carousel;
