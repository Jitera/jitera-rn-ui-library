# OTPInput

> React Native OTP Input component for iOS, Android and Windows

## Props

### `value (required)`

Type: `string`

Defines the code used in the component.

### `onChange`

Type: `(value: string) => void`

OTP Code change handler.

This is called when the user changes all the data of cells in the UI. It receives the string as parameters.

### `onBlur`

Type: `(event: NativeSyntheticEvent<TextInputEndEditingEventData>) => void`

Callback that is called when component is blurred.

### `errorMessage`

Type: `string`

Set error message.
