import React, { useMemo } from "react";
import { Image as RnImage, ImageProps as RnImageProps } from "react-native";
import type { PropsWithRef } from "../../../type";

export type ImageProps = PropsWithRef<
  Omit<RnImageProps, 'source'> & {
      ImageComponent?: React.ElementType<RnImageProps | any>;
      uri?: string;
      source: RnImageProps["source"] | string;
    }
>;

const Image = React.forwardRef<RnImage, ImageProps>(
  ({ resizeMode = "cover", source, ImageComponent = RnImage, uri, ...props }, ref) => {
    const newSource = useMemo(() => {
      if (uri) {
        return { uri }
      }
      if (typeof source === "string") {
        return {
          uri: source,
        };
      }
      return source;
    }, [uri, source]);

    return (
      <ImageComponent ref={ref} source={newSource} resizeMode={resizeMode} {...props} />
    );
  }
);

Image.displayName = "Image";

export default Image;
