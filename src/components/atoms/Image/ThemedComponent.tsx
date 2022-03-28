import React from 'react';

import type { Image as RNImage } from 'react-native';

import Image, { ImageProps } from './Component';
import type { ThemeProps } from '../../../theme';

const ThemedImage = React.forwardRef<
  RNImage,
  ImageProps & Partial<ThemeProps<ImageProps>>
>((props, ref) => {
  return <Image {...props} ref={ref} />;
});

ThemedImage.displayName = 'Image';

export default ThemedImage;
