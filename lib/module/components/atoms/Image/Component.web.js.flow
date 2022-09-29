import React from "react";
import { Image as RnImage, ImageProps as RnImageProps } from "react-native";
import type { PropsWithRef } from "../../../type";

export type ImageProps = PropsWithRef<
  Omit<RnImageProps, "source"> & {
    ImageComponent?: React.ElementType<RnImageProps>;
    uri?: string;
  }
>;

const Image = React.forwardRef<RnImage, ImageProps>(({ style, resizeMode, uri, ...props }, ref) => {
  return <RnImage ref={ref} style={style} source={{ uri }} resizeMode={resizeMode} {...props} />;
});

Image.displayName = "Image";

export default Image;
