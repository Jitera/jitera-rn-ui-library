import React, {
  forwardRef,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { StyleSheet, Pressable, View, ViewProps, Animated, ViewStyle } from 'react-native';
import deepmerge from 'deepmerge';
import { Icon, IconType, Image, Text } from '../../../index';
import {
  ImageInfo,
  ImagePickerOptions,
  ImagePickerResult,
  launchCameraAsync,
  launchImageLibraryAsync,
  MediaTypeOptions,
  requestCameraPermissionsAsync,
  requestMediaLibraryPermissionsAsync,
} from 'expo-image-picker';
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';

type LauncherTypeKind = 'default' | 'camera' | 'image-library';

interface PickerData {
  kind: LauncherTypeKind;
  icon: string;
  label: string;
}

interface ErrorMessageProps {
  errorMessage?: string;
}

interface ImagePickerPlaceholderProps extends ErrorMessageProps, ViewProps {}

interface ImagePickerImageProps extends ErrorMessageProps, ViewProps {
  uri: string;
}

interface SheetRefProps {
  sheetRef: React.RefObject<ScrollBottomSheet<PickerData>>;
}

interface BackdropProps extends SheetRefProps {
  snapPosition: number;
}

interface BottomSheetProps extends SheetRefProps {
  pickerData: PickerData[];
  triggerLaunch: (type: LauncherTypeKind) => void;
  handleSheetChange: (index: number) => void;
}

const ERROR_COLOR = '#dc2626';

const CAMERA_KIND: PickerData = {
  kind: 'camera',
  icon: 'camera',
  label: 'Open Camera',
};
const IMAGE_LIBRARY_KIND: PickerData = {
  kind: 'image-library',
  icon: 'image-search',
  label: 'Select from Gallery',
};

const sharedStyleSheet = StyleSheet.create({
  size: {
    width: '100%',
    height: '100%',
  },
  appearance: {
    backgroundColor: '#e2e8f0',
    borderWidth: 3,
    borderColor: '#94a3b8',
  },
});

const styleSheet = StyleSheet.create({
  placeholder: StyleSheet.flatten([
    sharedStyleSheet.size,
    sharedStyleSheet.appearance,
    { justifyContent: 'center' },
  ]),
  placeholderIcon: {
    alignSelf: 'center',
  },
  imageWrapper: StyleSheet.flatten([sharedStyleSheet.appearance]),
  image: StyleSheet.flatten([sharedStyleSheet.size, { resizeMode: 'contain' }]),
  bottomSheetItem: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomSheetItemText: {
    marginLeft: 24,
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHandle: {
    width: 40,
    height: 2,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 4,
  },
  bottomSheetContent: {
    backgroundColor: '#fff',
  },
  backdrop: {
    backgroundColor: 'black',
  },
  errorMessage: {
    color: ERROR_COLOR,
    marginTop: 5,
  },
});

const ImagePickerPlaceholder = forwardRef<View, ImagePickerPlaceholderProps>(
  ({ errorMessage, ...props }, ref) => (
    <View
      {...props}
      ref={ref}
      style={StyleSheet.flatten([
        styleSheet.placeholder,
        errorMessage ? { borderColor: ERROR_COLOR } : undefined,
      ])}
    >
      <Icon
        style={styleSheet.placeholderIcon}
        type={IconType.AntDesign}
        name="camerao"
        size={36}
        color={errorMessage ? ERROR_COLOR : undefined}
      />
    </View>
  )
);

const ImagePickerImage = forwardRef<View, ImagePickerImageProps>(
  ({ uri, errorMessage, ...props }, ref) => (
    <View
      {...props}
      ref={ref}
      style={StyleSheet.flatten([
        styleSheet.imageWrapper,
        errorMessage ? { borderColor: ERROR_COLOR } : undefined,
      ])}
    >
      <Image source={{ uri }} style={styleSheet.image} />
    </View>
  )
);

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage }) => (
  <Text style={styleSheet.errorMessage}>{errorMessage}</Text>
);

const BottomSheet: React.FC<BottomSheetProps> = ({
  sheetRef,
  pickerData,
  triggerLaunch,
  handleSheetChange,
}) => {
  const renderHandle = useCallback<() => JSX.Element>(
    () => (
      <View style={styleSheet.header}>
        <View style={styleSheet.panelHandle} />
      </View>
    ),
    []
  );

  const renderItem = useCallback<
    ({ item }: { item: PickerData }) => JSX.Element
  >(
    ({ item }: { item: PickerData }) => (
      <Pressable onPress={() => triggerLaunch(item.kind)}>
        <View style={styleSheet.bottomSheetItem}>
          <Icon type={IconType.MaterialIcons} name={item.icon} size={24} />
          <Text style={styleSheet.bottomSheetItemText}>{item.label}</Text>
        </View>
      </Pressable>
    ),
    [triggerLaunch]
  );

  return (
    <ScrollBottomSheet
      ref={sheetRef}
      componentType="FlatList"
      snapPoints={['70%', '100%']}
      data={pickerData}
      scrollEnabled={false}
      initialSnapIndex={1}
      keyExtractor={(item) => item.kind}
      renderHandle={renderHandle}
      onSettle={handleSheetChange}
      contentContainerStyle={styleSheet.bottomSheetContent}
      renderItem={renderItem}
    />
  );
};

export interface ImagePickerProps extends ViewProps {
  launcherType?: LauncherTypeKind;
  options?: ImagePickerOptions;
  errorMessage?: string;
  value: ImagePickerResult | string | undefined;
  onChange: (imagePickerResult: ImagePickerResult) => void;
  isPreview?: boolean;
}

const ImagePicker = forwardRef<View, ImagePickerProps>(
  (
    {
      launcherType = 'default',
      value,
      onChange,
      errorMessage,
      options,
      style,
      isPreview,
      ...props
    },
    ref
  ) => {
    const [snapPosition, setSnapPosition] = useState<number>(1);
    const sheetRef = useRef<ScrollBottomSheet<PickerData>>(null);
    const handleSheetChange = useCallback((index: number) => {
      setSnapPosition(index);
    }, []);
    const getPickerData = useCallback<() => PickerData[]>(() => {
      switch (launcherType) {
        case 'camera':
          return [CAMERA_KIND];
        case 'image-library':
          return [IMAGE_LIBRARY_KIND];
        default:
          return [CAMERA_KIND, IMAGE_LIBRARY_KIND];
      }
    }, [launcherType]);
    const mergedOptions = useMemo<ImagePickerOptions>(
      () =>
        deepmerge<ImagePickerOptions, ImagePickerOptions>(
          options || ({} as ImagePickerOptions),
          {
            mediaTypes: MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true,
          } as ImagePickerOptions
        ),
      [options]
    );

    const pickImage = useCallback(async () => {
      try {
        const mediaLibraryPermissionsResult =
          await requestMediaLibraryPermissionsAsync();

        if (mediaLibraryPermissionsResult.granted) {
          const imagePickerResult = await launchImageLibraryAsync(
            mergedOptions
          );

          if (!imagePickerResult.cancelled) {
            onChange(imagePickerResult);
            sheetRef.current?.snapTo(1);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }, [mergedOptions, onChange]);

    const takeImage = useCallback(async () => {
      try {
        const cameraPermissionsResult = await requestCameraPermissionsAsync();

        if (cameraPermissionsResult.granted) {
          const imagePickerResult = await launchCameraAsync(mergedOptions);

          if (!imagePickerResult.cancelled) {
            onChange(imagePickerResult);
            sheetRef.current?.snapTo(1);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }, [mergedOptions, onChange]);

    const triggerLaunch = useCallback<(type: LauncherTypeKind) => void>(
      (type) => {
        if (isPreview) return

        switch (type) {
          case 'camera':
            takeImage();
            break;
          case 'image-library':
            pickImage();
            break;
          default:
            sheetRef.current?.snapTo(0);
            break;
        }
      },
      [pickImage, takeImage, isPreview]
    );

    return (
      <>
        <Pressable onPress={() => triggerLaunch(launcherType)} style={style}>
          {value ? (
            <ImagePickerImage
              {...props}
              ref={ref}
              uri={typeof value === 'string' ? value : (value as ImageInfo).uri}
              errorMessage={errorMessage}
            />
          ) : (
            <ImagePickerPlaceholder
              {...props}
              ref={ref}
              errorMessage={errorMessage}
            />
          )}
        </Pressable>
        {errorMessage ? (
          <ErrorMessage errorMessage={errorMessage} />
        ) : undefined}
        <BottomSheet
          sheetRef={sheetRef}
          pickerData={getPickerData()}
          triggerLaunch={triggerLaunch}
          handleSheetChange={handleSheetChange}
        />
      </>
    );
  }
);

export default ImagePicker;
