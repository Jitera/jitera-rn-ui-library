import React, { FC, forwardRef } from 'react';
import {
  Image as RnImage,
  ImageProps as RnImageProps,
  Platform,
} from 'react-native';
import FastImage, { FastImageProps } from 'react-native-fast-image';
import type { PropsWithRef } from '../../../type';

export type ImageProps = PropsWithRef<
  RnImageProps &
    Omit<FastImageProps, 'children'> & {
      fastImage?: boolean;
      uri?: string;
    }
>;

const Image: FC<ImageProps> = forwardRef<any, ImageProps>(
  ({ style, resizeMode, fastImage, uri, ...props }, ref) => {
    let Component = fastImage ? FastImage : RnImage;
    const isWeb = Platform.OS === 'web';

    if (isWeb) {
      return (
        <RnImage
          ref={ref}
          style={style}
          source={{ uri }}
          resizeMode={resizeMode}
          {...props}
        />
      );
    }

    return (
      <Component
        style={style}
        source={{ uri }}
        resizeMode={resizeMode}
        {...props}
      />
    );
  }
);

Image.displayName = 'Image';

export default Image;
