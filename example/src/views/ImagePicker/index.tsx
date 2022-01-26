import React, {useState} from 'react';
import {ImagePickerResult} from 'expo-image-picker';
import {ImagePicker} from '@jitera/jitera-rn-ui-library';

const ImagePickerViews: React.FC = () => {
  const [image, setImage] = useState<ImagePickerResult>();
  const handleChange = (imagePickerResult: ImagePickerResult) => {
    console.log(imagePickerResult);
    setImage(imagePickerResult);
  };

  return (
    <ImagePicker launcherType="default" value={image} onChange={handleChange} />
  );
};

export default ImagePickerViews;
