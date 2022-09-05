import React, { useMemo } from "react";
import { Image as RnImage, ImageProps as RnImageProps } from "react-native";
import type { PropsWithRef } from "../../../type";

export type ImageProps = PropsWithRef<
  Partial<RnImageProps> & {
      ImageComponent?: React.ElementType<RnImageProps | any>;
      uri?: string;
      source: RnImageProps["source"] | string | React.ElementType<RnImageProps | any>;
      isSVGImage?: boolean;
    }
>;

const Image = React.forwardRef<RnImage, ImageProps>(
  ({ resizeMode = "cover", source, isSVGImage= false, ImageComponent = RnImage, uri, style, ...props }, ref) => {
    const newSource = useMemo(() => {
      if (isSVGImage) return;
      if (uri) {
        return { uri }
      }
      if (typeof source === "string") {
        return {
          uri: source,
        };s
      }
      return source;
    }, [uri, source, isSVGImage]);

    if (isSVGImage) {
      const Source = source as React.ElementType<RnImageProps | any> ;

      return <Source {...props} width={style?.width} height={style?.height} style={style} />;
    }

    return (
      <ImageComponent {...props} ref={ref} source={newSource} resizeMode={resizeMode} />
    );
  }
);

Image.displayName = "Image";

export default Image;
