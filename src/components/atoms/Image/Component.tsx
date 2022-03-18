import React, { FC, forwardRef, useMemo } from 'react';
import { Image as RnImage, ImageProps as RnImageProps } from 'react-native';
import FastImage, { FastImageProps } from 'react-native-fast-image';
import type { PropsWithRef } from '../../../type';

export type ImageProps = PropsWithRef<
  Partial<RnImageProps> &
    Omit<Partial<FastImageProps>, 'children'> & {
      fastImage?: boolean;
    }
>;

const Image: FC<ImageProps> = forwardRef<any, ImageProps>(
  ({ style, resizeMode = 'cover', fastImage, source, ...props }, ref) => {
    let Component = fastImage ? FastImage : RnImage;
    
    const newSource = useMemo(() => {
      if (typeof source === 'string') {
        return {
          uri: source
        }
      }
      return source
    }, [source])

    return (
      <Component
        ref={ref}
        style={style}
        source={newSource}
        resizeMode={resizeMode}
        {...props}
      />
    );
  }
);

Image.displayName = 'Image';

export default Image;
