import React, { FC, forwardRef } from 'react';
import { Image as RnImage, ImageProps as RnImageProps } from 'react-native';
import type { FastImageProps } from 'react-native-fast-image';
import type { PropsWithRef } from '../../../type';

export type ImageProps = PropsWithRef<
  RnImageProps &
    Omit<FastImageProps, 'children'> & {
      fastImage?: boolean;
      uri?: string;
    }
>;

const Image: FC<ImageProps> = forwardRef<any, ImageProps>(
  ({ style, resizeMode, uri, ...props }, ref) => {
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
);

Image.displayName = 'Image';

export default Image;
