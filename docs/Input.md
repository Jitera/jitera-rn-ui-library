# Input

> Component for inputting text into the app via a keyboard.

## Props

### `value`

Type: `string`

Set input value.

### `onChange`

Type: `(value: string) => void`

Callback that is called when text input's text changes.

### `onBlur`

Type: `(event: NativeSyntheticEvent<TextInputEndEditingEventData>) => void`

Callback that is called when text input is blurred.

### `errorMessage`

Type: `string`

Set error message.
