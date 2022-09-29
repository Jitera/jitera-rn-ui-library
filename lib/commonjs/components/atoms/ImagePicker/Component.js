"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LauncherTypeKind = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _deepmerge = _interopRequireDefault(require("deepmerge"));

var _index = require("../../../index");

var _expoImagePicker = require("expo-image-picker");

var _reactNativeScrollBottomSheet = _interopRequireDefault(require("react-native-scroll-bottom-sheet"));

var _reactNativeGestureHandler = require("react-native-gesture-handler");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// type LauncherTypeKind = 'default' | 'camera' | 'image-library';
let LauncherTypeKind;
exports.LauncherTypeKind = LauncherTypeKind;

(function (LauncherTypeKind) {
  LauncherTypeKind["DEFAULT"] = "default";
  LauncherTypeKind["CAMERA"] = "camera";
  LauncherTypeKind["IMAGE_LIBRARY"] = "image-library";
})(LauncherTypeKind || (exports.LauncherTypeKind = LauncherTypeKind = {}));

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

const sharedStyleSheet = _reactNative.StyleSheet.create({
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

const styleSheet = _reactNative.StyleSheet.create({
  placeholder: _reactNative.StyleSheet.flatten([sharedStyleSheet.size, sharedStyleSheet.appearance, {
    justifyContent: "center"
  }]),
  placeholderIcon: {
    alignSelf: "center"
  },
  imageWrapper: _reactNative.StyleSheet.flatten([sharedStyleSheet.appearance]),
  image: _reactNative.StyleSheet.flatten([sharedStyleSheet.size, {
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

const ImagePickerPlaceholder = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    errorMessage,
    style,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({}, props, {
    ref: ref,
    style: _reactNative.StyleSheet.flatten([styleSheet.placeholder, style, errorMessage ? {
      borderColor: ERROR_COLOR
    } : undefined])
  }), /*#__PURE__*/_react.default.createElement(_index.Icon, {
    style: styleSheet.placeholderIcon,
    type: _index.IconType.AntDesign,
    name: "camerao",
    size: 36,
    color: errorMessage ? ERROR_COLOR : undefined
  }));
});

const ImagePickerImage = /*#__PURE__*/_react.default.forwardRef((_ref2, ref) => {
  let {
    uri,
    errorMessage,
    style,
    ...props
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({}, props, {
    ref: ref,
    style: _reactNative.StyleSheet.flatten([styleSheet.imageWrapper, style, errorMessage ? {
      borderColor: ERROR_COLOR
    } : undefined])
  }), /*#__PURE__*/_react.default.createElement(_index.Image, {
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
  return /*#__PURE__*/_react.default.createElement(_index.Text, {
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

  const renderHandle = () => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styleSheet.header
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styleSheet.panelHandle
  }));

  const renderItem = _ref5 => {
    let {
      item
    } = _ref5;
    return /*#__PURE__*/_react.default.createElement(_reactNativeGestureHandler.TouchableOpacity, {
      onPress: () => triggerLaunch(item.kind)
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: styleSheet.bottomSheetItem
    }, /*#__PURE__*/_react.default.createElement(_index.Icon, {
      type: _index.IconType.MaterialIcons,
      name: item.icon,
      size: 24
    }), /*#__PURE__*/_react.default.createElement(_index.Text, {
      style: styleSheet.bottomSheetItemText
    }, item.label)));
  };

  return /*#__PURE__*/_react.default.createElement(_reactNativeScrollBottomSheet.default, {
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

const ImagePicker = /*#__PURE__*/_react.default.forwardRef((_ref6, ref) => {
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
  const [snapPosition, setSnapPosition] = (0, _react.useState)(1);
  const sheetRef = (0, _react.useRef)(null);

  const handleSheetChange = index => {
    setSnapPosition(index);
  };

  const mergedOptions = (0, _react.useMemo)(() => (0, _deepmerge.default)(options || {}, {
    mediaTypes: _expoImagePicker.MediaTypeOptions.Images,
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
      const mediaLibraryPermissionsResult = await (0, _expoImagePicker.requestMediaLibraryPermissionsAsync)();

      if (mediaLibraryPermissionsResult.granted) {
        const imagePickerResult = await (0, _expoImagePicker.launchImageLibraryAsync)(mergedOptions);

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
      const cameraPermissionsResult = await (0, _expoImagePicker.requestCameraPermissionsAsync)();

      if (cameraPermissionsResult.granted) {
        const imagePickerResult = await (0, _expoImagePicker.launchCameraAsync)(mergedOptions);

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

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styleSheet.content
  }, /*#__PURE__*/_react.default.createElement(_reactNativeGestureHandler.TouchableOpacity, {
    onPress: () => triggerLaunch(launcherType),
    onBlur: handleBlur
  }, value ? /*#__PURE__*/_react.default.createElement(ImagePickerImage, _extends({}, props, {
    ref: ref,
    style: style,
    uri: typeof value === "string" ? value : value.uri,
    errorMessage: errorMessage
  })) : /*#__PURE__*/_react.default.createElement(ImagePickerPlaceholder, _extends({}, props, {
    ref: ref,
    style: style,
    errorMessage: errorMessage
  }))), errorMessage ? /*#__PURE__*/_react.default.createElement(ErrorMessage, {
    errorMessage: errorMessage
  }) : undefined, /*#__PURE__*/_react.default.createElement(BottomSheet, {
    sheetRef: sheetRef,
    pickerData: getPickerData(),
    triggerLaunch: triggerLaunch,
    handleSheetChange: handleSheetChange
  }));
});

var _default = ImagePicker;
exports.default = _default;
//# sourceMappingURL=Component.js.map