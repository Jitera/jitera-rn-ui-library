import React, { FC, forwardRef } from 'react';
import { Image as RnImage, StyleProp, ImageStyle } from 'react-native';
import FastImage from 'react-native-fast-image';
import type { PropsWithRef } from '../../../type';

export type ImageProps = PropsWithRef<{
  style?: StyleProp<ImageStyle>;
  resizeMode: 'contain' | 'cover' | 'stretch' | 'center';
  fastImage?: boolean;
  uri?: string;
}>;

const Image: FC<ImageProps> = ({ style, resizeMode, fastImage, uri }) => {
  let Component = fastImage ? FastImage : RnImage;

  return <Component style={style} source={{ uri }} resizeMode={resizeMode} />;
};

const MobileEditorImage: FC<ImageProps> = forwardRef<any, ImageProps>(
  ({ style, uri, resizeMode }, ref) => {
    return (
      <RnImage
        ref={ref}
        style={style}
        source={{ uri }}
        resizeMode={resizeMode}
      />
    );
  }
);

MobileEditorImage.displayName = 'Image';

export default MobileEditorImage;
export { Image };
