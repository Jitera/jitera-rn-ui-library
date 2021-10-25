import React, { useCallback, useState } from 'react';
import {
  View,
  Alert,
  TextStyle,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { scale } from 'react-native-size-matters';
import { Text, Icon, Image } from '../../..';
import { Modal } from '../../widgets';
import { makeStyles, Theme } from '../../../theme';
import type { RneFunctionComponent } from '../../../theme/helpers';
import { ActionsModal } from '../ActionsModal';
import * as RNImagePicker from 'expo-image-picker';

export type ImagePickerProps = TouchableOpacityProps & {
  value?: any;
  quality?: number;
  includeBase64?: boolean;
  pickerOnly?: boolean;
  cameraOnly?: boolean;
  renderPreview?: (response: any) => JSX.Element;
  onChange?: (response: any) => void;
  onBlur?: any;
  previewMode?: 'small' | 'big';
  photosPermissionTitle?: string;
  photosPermissionDescription?: string;
  cameraPermissionTitle?: string;
  cameraPermissionDescription?: string;
  errorProps?: any;
  errorStyle?: StyleProp<TextStyle>;
  errorMessage?: string;
  renderErrorMessage?: boolean;
  allowsEditing?: boolean;
};

export const ImagePicker: RneFunctionComponent<ImagePickerProps> = ({
  value,
  quality,
  style,
  onBlur,
  onChange,
  pickerOnly,
  cameraOnly,
  errorProps,
  errorStyle,
  errorMessage,
  allowsEditing,
  includeBase64,
  renderPreview,
  children = null,
  renderErrorMessage,
  previewMode = 'big',
  photosPermissionTitle,
  photosPermissionDescription,
  cameraPermissionTitle,
  cameraPermissionDescription,
  ...rest
}) => {
  const [t] = useTranslation();
  const styles = useStyles();
  const initialValues =
    typeof value === 'string'
      ? { uri: value }
      : typeof value === 'object' && value.uri
      ? value
      : {};
  const [previewImage, setPreviewImage] = useState<any>(initialValues);

  const handleSelect = useCallback(async (action) => {
    Modal.hide();
    if (action === 'camera') {
      const permissionResponse: RNImagePicker.CameraPermissionResponse =
        await RNImagePicker.requestCameraPermissionsAsync();
      if (permissionResponse.status !== 'granted') {
        return Alert.alert(
          cameraPermissionTitle || t('camera_permission_denied'),
          cameraPermissionDescription ||
            t('camera_permission_denied_description'),
          [
            {
              text: t('open_settings'),
              onPress: () => {},
            },
            {
              text: t('close'),
              style: 'cancel',
            },
          ],
          { cancelable: false }
        );
      }
      const response: RNImagePicker.ImagePickerResult =
        await RNImagePicker.launchCameraAsync({
          mediaTypes: RNImagePicker.MediaTypeOptions.Images,
          quality: quality || 1,
          allowsEditing: allowsEditing,
          base64: includeBase64,
        });
      if (!response.cancelled) {
        setPreviewImage(response);
        onChange && onChange(response);
      }
    } else {
      const permissionResponse: RNImagePicker.MediaLibraryPermissionResponse =
        await RNImagePicker.requestMediaLibraryPermissionsAsync();
      if (permissionResponse.status !== 'granted') {
        return Alert.alert(
          photosPermissionTitle || t('photos_permission_denied'),
          photosPermissionDescription ||
            t('photos_permission_denied_description'),
          [
            {
              text: t('open_settings'),
              onPress: () => {},
            },
            {
              text: t('close'),
              style: 'cancel',
            },
          ],
          { cancelable: false }
        );
      }
      const response: RNImagePicker.ImagePickerResult =
        await RNImagePicker.launchImageLibraryAsync({
          mediaTypes: RNImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
      if (!response.cancelled) {
        setPreviewImage(response);
        onChange && onChange(response);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectImageType = useCallback(() => {
    if (pickerOnly) {
      return handleSelect('image');
    } else if (cameraOnly) {
      return handleSelect('camera');
    }
    Modal.show(
      <ActionsModal
        actions={[
          {
            key: 'camera',
            title: 'Camera',
          },
          {
            key: 'image',
            title: 'Image',
          },
        ]}
        onBack={() => {
          Modal.hide();
          if (typeof onBlur === 'function') {
            onBlur();
          }
        }}
        onSelect={handleSelect}
      />,
      { animationName: 'slideUp' }
    );
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderAssetPreview = useCallback(
    (item: any) => {
      switch (previewMode) {
        case 'big':
          return (
            <View key={previewImage.uri} style={styles.bigPreviewContainer}>
              <Image
                resizeMode="cover"
                style={styles.previewImageBig}
                source={{ uri: item.uri }}
              />
            </View>
          );
        default:
          return (
            <View key={item.uri} style={styles.previewContainer}>
              <Image
                resizeMode="cover"
                style={styles.previewImage}
                source={{ uri: item.uri }}
              />
              <Text style={styles.previewText}>
                {item.fileName || item.name || item.title}
              </Text>
            </View>
          );
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [previewMode]
  );

  const hideErrorMessage = !renderErrorMessage && !errorMessage;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const height = style && style.height ? style.height : scale(250);

  return (
    <>
      <TouchableOpacity
        style={StyleSheet.flatten([styles.container, style, { height }])}
        onPress={handleSelectImageType}
        {...rest}
      >
        {previewImage && previewImage.uri
          ? renderPreview
            ? renderPreview(previewImage)
            : renderAssetPreview(previewImage)
          : children || (
              <Icon
                size={40}
                iconStyle={styles.defaultIcon}
                name="images-outline"
                type="ionicon"
              />
            )}
      </TouchableOpacity>
      <Text
        {...errorProps}
        style={StyleSheet.flatten([
          styles.errorText,
          errorStyle && errorStyle,
          hideErrorMessage && {
            height: 0,
            margin: 0,
            padding: 0,
          },
        ])}
      >
        {errorMessage}
      </Text>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginHorizontal: 20,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: theme.spacing?.SPACING_8,
    borderColor: theme.colors?.grey3,
    padding: theme.spacing?.SPACING_12,
    justifyContent: 'center',
  },
  defaultIcon: {
    color: theme.colors?.grey3,
    marginBottom: 10,
  },
  previewContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  bigPreviewContainer: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  previewImage: {
    width: '100%',
    height: '100%',
    borderRadius: theme.spacing?.SPACING_8,
  },
  previewImageBig: {
    width: '100%',
    height: '100%',
    borderRadius: theme.spacing?.SPACING_8,
  },
  previewText: {
    flex: 1,
    paddingLeft: 10,
  },
  previewTextBig: {
    paddingBottom: 0,
    padding: theme.spacing?.SPACING_10,
  },
  errorText: {
    marginTop: theme?.spacing?.SPACING_5,
    fontSize: theme?.fontSizes?.FONT_12,
    color: theme?.colors?.error,
    marginHorizontal: 20,
  },
}));

ImagePicker.displayName = 'ImagePicker';
