import React from 'react';
import {Image, View, Button, StyleSheet} from 'react-native';
import {ImagePicker, Text} from '@jitera/jitera-rn-ui-library';

import BaseLayout from '~/layouts/Base';

import type {ImagePickerResponse} from 'react-native-image-picker';

const Preview: React.FC<{imagePickerResponse: ImagePickerResponse}> = ({
  imagePickerResponse,
}) => (
  <>
    {imagePickerResponse.assets?.map(asset => (
      <Image
        key={asset.uri}
        source={{uri: asset.uri}}
        resizeMode="cover"
        resizeMethod="scale"
        style={{width: 200, height: 200}}
      />
    ))}
    <Text>{JSON.stringify(imagePickerResponse, null, 2)}</Text>
  </>
);

const ImagePickerViews: React.FC = () => (
  <BaseLayout>
    <ImagePicker
      launchType="camera"
      preview={imagePickerResponse =>
        imagePickerResponse && (
          <Preview imagePickerResponse={imagePickerResponse} />
        )
      }
      options={{
        mediaType: 'photo',
      }}>
      <Text style={style.text}>Pick as Text</Text>
    </ImagePicker>
    <ImagePicker
      launchType="camera"
      preview={imagePickerResponse =>
        imagePickerResponse && (
          <Preview imagePickerResponse={imagePickerResponse} />
        )
      }
      options={{
        mediaType: 'photo',
      }}>
      {({openPicker}) => (
        <View style={style.button}>
          <Button onPress={openPicker} title="Pick as Button" />
        </View>
      )}
    </ImagePicker>
  </BaseLayout>
);

const style = StyleSheet.create({
  text: {
    marginBottom: 24,
  },
  button: {
    marginBottom: 24,
  },
});

export default ImagePickerViews;
