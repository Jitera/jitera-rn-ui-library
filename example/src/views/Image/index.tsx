import React from 'react';
import {Image} from '@jitera/jitera-rn-ui-library';
import {StyleSheet} from 'react-native';

import BaseLayout from '~/layouts/Base';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

const ImageViews: React.FC = () => (
  <BaseLayout>
    <Image
      style={styles.tinyLogo}
      fastImage={false}
      source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png',
      }}
    />
  </BaseLayout>
);

export default ImageViews;
