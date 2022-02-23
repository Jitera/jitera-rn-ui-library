import React from 'react';
import {StyleSheet} from 'react-native';
import BaseLayout from '~/layouts/Base';
import {Carousel} from '@jitera/jitera-rn-ui-library';

const CarouselViews = () => (
  <BaseLayout viewStyle={styles.view}>
    <Carousel
      style={styles.carousel}
      data={[
        'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg',
        'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg',
        'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg',
      ]}
    />
  </BaseLayout>
);

const styles = StyleSheet.create({
  view: {padding: 0},
  carousel: {
    width: '100%',
    height: 300,
  },
});

export default CarouselViews;
