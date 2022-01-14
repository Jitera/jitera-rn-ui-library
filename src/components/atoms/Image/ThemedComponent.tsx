import React from 'react';
import { ImageProps, Image } from './Component';
import type { RneFunctionComponent } from '../../../theme/helpers';

const ThemedImage: RneFunctionComponent<Omit<ImageProps, 'ref'>> = (props) => {
  return <Image {...props} />;
};

ThemedImage.displayName = 'Image';

export default ThemedImage;
