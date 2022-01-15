import React, { FC, forwardRef } from 'react';
import { Image as RnImage, ImageProps as RnImageProps } from 'react-native';
import type { PropsWithRef } from '../../../type';

export type ImageProps = PropsWithRef<
  RnImageProps & {
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
