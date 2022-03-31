import React from 'react';
import ImagePicker, { ImagePickerProps } from './Component';

import type { TouchableOpacity } from 'react-native';
import type { ThemeProps } from '../../../theme';

const ThemedImagePicker = React.forwardRef<
  TouchableOpacity,
  ImagePickerProps & Partial<ThemeProps<ImagePickerProps>>
>((props, ref) => {
  return <ImagePicker ref={ref} {...props} />;
});

export default ThemedImagePicker;
