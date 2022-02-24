# ImagePicker

> Component for picking image

## Props

### `value`

Type: `ImagePickerInfo | string`

Set image value. It can be `ImagePickerInfo` type or just plain string. String can be a uri of the image. See also [ImagePickerInfo](#imagepickerinfo) to learn more about the structure.

### `onChange`

Type: `(imagePickerResult: ImagePickerResult) => void`

Callback that is called when user pick the image.

### `onBlur`

Type: `(event: NativeSyntheticEvent<TargetedEvent>) => void`

Callback that is called when image picker is blurred.

### `errorMessage`

Type: `string`

Set error message.

## Type

### `ImagePickerInfo`

```
{
    /**
     * URI to the local image or video file (usable as the source of an `Image` element, in the case of
     * an image) and `width` and `height` specify the dimensions of the media.
     */
    uri: string;
    /**
     * Width of the image or video.
     */
    width: number;
    /**
     * Height of the image or video.
     */
    height: number;
    /**
     * The type of the asset.
     */
    type?: 'image' | 'video';
    /**
     * The `exif` field is included if the `exif` option is truthy, and is an object containing the
     * image's EXIF data. The names of this object's properties are EXIF tags and the values are the
     * respective EXIF values for those tags.
     */
    exif?: Record<string, any>;
    /**
     * Included if the `base64` option is truthy, and is a Base64-encoded string of the selected
     * image's JPEG data. If you prepend this with `'data:image/jpeg;base64,'` to create a data URI,
     * you can use it as the source of an `Image` element; for example:
     * ```ts
     * <Image
     *   source={{ uri: 'data:image/jpeg;base64,' + launchCameraResult.base64 }}
     *   style={{ width: 200, height: 200 }}
     * />
     * ```
     */
    base64?: string;
    /**
     * Length of the video in milliseconds.
     */
    duration?: number;
    /**
     * Boolean flag which shows if request was cancelled. If asset data have been returned this should
     * always be `false`.
     */
    cancelled: boolean;
}
```