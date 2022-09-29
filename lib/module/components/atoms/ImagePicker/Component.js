function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useRef, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import deepmerge from "deepmerge";
import { Icon, IconType, Image, Text } from "../../../index";
import { launchCameraAsync, launchImageLibraryAsync, MediaTypeOptions, requestCameraPermissionsAsync, requestMediaLibraryPermissionsAsync } from "expo-image-picker";
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";
import { TouchableOpacity } from "react-native-gesture-handler"; // type LauncherTypeKind = 'default' | 'camera' | 'image-library';

export let LauncherTypeKind;

(function (LauncherTypeKind) {
  LauncherTypeKind["DEFAULT"] = "default";
  LauncherTypeKind["CAMERA"] = "camera";
  LauncherTypeKind["IMAGE_LIBRARY"] = "image-library";
})(LauncherTypeKind || (LauncherTypeKind = {}));

const ERROR_COLOR = "#dc2626";
const CAMERA_KIND = {
  kind: LauncherTypeKind.CAMERA,
  icon: "camera",
  label: "Open Camera"
};
const IMAGE_LIBRARY_KIND = {
  kind: LauncherTypeKind.IMAGE_LIBRARY,
  icon: "image-search",
  label: "Select from Gallery"
};
const sharedStyleSheet = StyleSheet.create({
  size: {
    width: "100%",
    height: "100%"
  },
  appearance: {
    backgroundColor: "#e2e8f0",
    borderWidth: 3,
    borderColor: "#94a3b8"
  }
});
const styleSheet = StyleSheet.create({
  placeholder: StyleSheet.flatten([sharedStyleSheet.size, sharedStyleSheet.appearance, {
    justifyContent: "center"
  }]),
  placeholderIcon: {
    alignSelf: "center"
  },
  imageWrapper: StyleSheet.flatten([sharedStyleSheet.appearance]),
  image: StyleSheet.flatten([sharedStyleSheet.size, {
    resizeMode: "contain"
  }]),
  bottomSheetItem: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  bottomSheetItemText: {
    marginLeft: 24
  },
  header: {
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  panelHandle: {
    width: 40,
    height: 2,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 4
  },
  content: {
    backgroundColor: "#fff"
  },
  errorMessage: {
    color: ERROR_COLOR,
    marginTop: 5
  }
});
const ImagePickerPlaceholder = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    errorMessage,
    style,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(View, _extends({}, props, {
    ref: ref,
    style: StyleSheet.flatten([styleSheet.placeholder, style, errorMessage ? {
      borderColor: ERROR_COLOR
    } : undefined])
  }), /*#__PURE__*/React.createElement(Icon, {
    style: styleSheet.placeholderIcon,
    type: IconType.AntDesign,
    name: "camerao",
    size: 36,
    color: errorMessage ? ERROR_COLOR : undefined
  }));
});
const ImagePickerImage = /*#__PURE__*/React.forwardRef((_ref2, ref) => {
  let {
    uri,
    errorMessage,
    style,
    ...props
  } = _ref2;
  return /*#__PURE__*/React.createElement(View, _extends({}, props, {
    ref: ref,
    style: StyleSheet.flatten([styleSheet.imageWrapper, style, errorMessage ? {
      borderColor: ERROR_COLOR
    } : undefined])
  }), /*#__PURE__*/React.createElement(Image, {
    source: {
      uri
    },
    style: styleSheet.image
  }));
});

const ErrorMessage = _ref3 => {
  let {
    errorMessage
  } = _ref3;
  return /*#__PURE__*/React.createElement(Text, {
    style: styleSheet.errorMessage
  }, errorMessage);
};

const BottomSheet = _ref4 => {
  let {
    sheetRef,
    pickerData,
    triggerLaunch,
    handleSheetChange
  } = _ref4;

  const renderHandle = () => /*#__PURE__*/React.createElement(View, {
    style: styleSheet.header
  }, /*#__PURE__*/React.createElement(View, {
    style: styleSheet.panelHandle
  }));

  const renderItem = _ref5 => {
    let {
      item
    } = _ref5;
    return /*#__PURE__*/React.createElement(TouchableOpacity, {
      onPress: () => triggerLaunch(item.kind)
    }, /*#__PURE__*/React.createElement(View, {
      style: styleSheet.bottomSheetItem
    }, /*#__PURE__*/React.createElement(Icon, {
      type: IconType.MaterialIcons,
      name: item.icon,
      size: 24
    }), /*#__PURE__*/React.createElement(Text, {
      style: styleSheet.bottomSheetItemText
    }, item.label)));
  };

  return /*#__PURE__*/React.createElement(ScrollBottomSheet, {
    ref: sheetRef,
    componentType: "FlatList",
    snapPoints: ["70%", "100%"],
    data: pickerData,
    scrollEnabled: false,
    initialSnapIndex: 1,
    keyExtractor: item => item.kind,
    renderHandle: renderHandle,
    onSettle: handleSheetChange,
    contentContainerStyle: styleSheet.content,
    renderItem: renderItem
  });
};

const ImagePicker = /*#__PURE__*/React.forwardRef((_ref6, ref) => {
  let {
    launcherType = LauncherTypeKind.DEFAULT,
    value,
    onChange,
    onBlur,
    errorMessage,
    options,
    style,
    isPreview,
    ...props
  } = _ref6;
  const [snapPosition, setSnapPosition] = useState(1);
  const sheetRef = useRef(null);

  const handleSheetChange = index => {
    setSnapPosition(index);
  };

  const mergedOptions = useMemo(() => deepmerge(options || {}, {
    mediaTypes: MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
    base64: true
  }), [options]);

  const getPickerData = () => {
    switch (launcherType) {
      case "camera":
        return [CAMERA_KIND];

      case "image-library":
        return [IMAGE_LIBRARY_KIND];

      default:
        return [CAMERA_KIND, IMAGE_LIBRARY_KIND];
    }
  };

  const pickImage = async () => {
    try {
      const mediaLibraryPermissionsResult = await requestMediaLibraryPermissionsAsync();

      if (mediaLibraryPermissionsResult.granted) {
        const imagePickerResult = await launchImageLibraryAsync(mergedOptions);

        if (!imagePickerResult.cancelled) {
          var _sheetRef$current;

          onChange && onChange(imagePickerResult);
          (_sheetRef$current = sheetRef.current) === null || _sheetRef$current === void 0 ? void 0 : _sheetRef$current.snapTo(1);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const takeImage = async () => {
    try {
      const cameraPermissionsResult = await requestCameraPermissionsAsync();

      if (cameraPermissionsResult.granted) {
        const imagePickerResult = await launchCameraAsync(mergedOptions);

        if (!imagePickerResult.cancelled) {
          var _sheetRef$current2;

          onChange(imagePickerResult);
          (_sheetRef$current2 = sheetRef.current) === null || _sheetRef$current2 === void 0 ? void 0 : _sheetRef$current2.snapTo(1);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const triggerLaunch = async type => {
    var _sheetRef$current3;

    if (isPreview) return;

    switch (type) {
      case LauncherTypeKind.CAMERA:
        await takeImage();
        break;

      case LauncherTypeKind.IMAGE_LIBRARY:
        await pickImage();
        break;

      default:
        (_sheetRef$current3 = sheetRef.current) === null || _sheetRef$current3 === void 0 ? void 0 : _sheetRef$current3.snapTo(0);
        break;
    }
  };

  const handleBlur = event => {
    onBlur && onBlur(event);
  };

  return /*#__PURE__*/React.createElement(View, {
    style: styleSheet.content
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: () => triggerLaunch(launcherType),
    onBlur: handleBlur
  }, value ? /*#__PURE__*/React.createElement(ImagePickerImage, _extends({}, props, {
    ref: ref,
    style: style,
    uri: typeof value === "string" ? value : value.uri,
    errorMessage: errorMessage
  })) : /*#__PURE__*/React.createElement(ImagePickerPlaceholder, _extends({}, props, {
    ref: ref,
    style: style,
    errorMessage: errorMessage
  }))), errorMessage ? /*#__PURE__*/React.createElement(ErrorMessage, {
    errorMessage: errorMessage
  }) : undefined, /*#__PURE__*/React.createElement(BottomSheet, {
    sheetRef: sheetRef,
    pickerData: getPickerData(),
    triggerLaunch: triggerLaunch,
    handleSheetChange: handleSheetChange
  }));
});
export default ImagePicker;
//# sourceMappingURL=Component.js.map