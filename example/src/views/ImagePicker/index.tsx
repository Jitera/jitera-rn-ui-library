import React, {useState} from 'react';
import {Dimensions, NativeSyntheticEvent, TargetedEvent} from 'react-native';
import {ImagePickerResult} from 'expo-image-picker';
import {ImagePicker} from '@jitera/jitera-rn-ui-library';

const ImagePickerViews: React.FC = () => {
  const [image, setImage] = useState<ImagePickerResult>();
  const handleChange = (imagePickerResult: ImagePickerResult) => {
    console.log(imagePickerResult);
    setImage(imagePickerResult);
  };
  const handleBlur: (
    event: NativeSyntheticEvent<TargetedEvent>,
  ) => void = event => {
    console.log(event);
  };

  return (
    <ImagePicker
      launcherType="default"
      value={image}
      onChange={handleChange}
      onBlur={handleBlur}
      style={{margin: 24, width: Dimensions.get('window').width - 48}}
    />
  );
};

export default ImagePickerViews;
