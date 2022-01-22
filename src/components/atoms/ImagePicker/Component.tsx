import React, { forwardRef } from 'react';
import { Pressable } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import type { GestureResponderEvent, View } from 'react-native';
import type {
  ImageLibraryOptions,
  ImagePickerResponse,
} from 'react-native-image-picker';

type ImagePickerLaunchType = 'camera' | 'image-library';

export type OpenPicker = (event: GestureResponderEvent) => void;

export interface ImagePickerProps {
  launchType: ImagePickerLaunchType;
  preview: (ImagePickerResponse: ImagePickerResponse) => void;
  options?: ImageLibraryOptions;
  children:
    | React.ReactNode
    | ((childrenParam: { openPicker: OpenPicker }) => void);
}

const ImagePicker = forwardRef<View, ImagePickerProps>(
  ({ children, preview, launchType, options, ...props }, ref) => {
    const [imagePickerResponse, setImagePickerResponse] =
      React.useState<ImagePickerResponse>();

    const openPicker = React.useCallback<OpenPicker>(async () => {
      if (launchType === 'camera') {
        setImagePickerResponse(await launchCamera(options));
      } else if (launchType === 'image-library') {
        setImagePickerResponse(await launchImageLibrary(options));
      }
    }, [launchType, options]);

    return (
      <>
        {typeof children === 'function' ? (
          children({ openPicker })
        ) : (
          <Pressable ref={ref} onPress={openPicker} {...props}>
            {children}
          </Pressable>
        )}
        {preview(imagePickerResponse)}
      </>
    );
  }
);

ImagePicker.displayName = 'ImagePicker';

export default ImagePicker;
