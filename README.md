## Dependences

### require

```javascript
"color": "^3.1.3"
"react-native-size-matters": "^0.4.0",

// optional

"react-native-fast-image": "^8.3.4",
"react-native-safe-area-context": "^3.1.9",
```

### dev

```javascript
"@types/color": "^3.0.1",
```

## Installing

Wrapped you app with "ThemeProvider"

```javascript
const theme = {
  colors: {
    primary: '#010D36',
  },
  Button: {
    raised: true,
    buttonStyle: {
      height: 56,
    },
  },
};

<ThemeProvider safeArea theme={theme}>
  ...
</ThemeProvider>;
```

the config of theme object will overwrite the the default config.
it also supported to change default props of atoms components. EX:

```
Button: {
  raised: true,
  buttonStyle: {
    height: 56
  }
},
```

By default all button will raised ( have shadow ). and height: 56 . But you can overwrite it whenever you want

```javascript
<Button raised={false} buttonStyle={{ height: 38 }}>
```

## Feature

### Provide default components:

- Button: supportted types: clear, outline, solid, linear-gradiend, loading, suffix, preffix, etc
- Image: placeholder, fast-image, etc
- Input: label, error message, etc
- Text
- Page: Default wrapper for screen, support safe area and default background
- View
- Header: Support default backbutton, title, etc

### Provide default widgets:

- CommonLoading: full page loading, accessable anywhere
- Modal: Full page modal, accessable anywhere
- Toast: Toast, accessable anywhere

## Usage

### Theme variable:

```javascript
import { withTheme } from 'jitera-rn-ui';

withTheme(YourComponent);

const YourComponent = ({
  theme, // provided current theme
  ...props
}) => {
  // By default theme will provide you usefull variable
  // + theme.fonts: for custom font family and font weight { regular, thin, light, black, medium, bold }
  // + theme.colors: all color { rprimary, secondary, background, header, success, error, ... }
  // + theme.spacing: { SPACING_1, SPACING_10, SPACING_12, SPACING_50, ... }
  // + theme.fontSizes: { FONT_10, FONT_12, FONT_24, FONT_40, ... }
  // + theme.safeArea: Usefull when calculator the screen ignore nock, statusbar, etc { top, bottom, left, right }
};
```

### Default components:

```javascript
import { Button, View, Image, View, Text, Page } from 'jitera-rn-ui';
```

### Default widgets:

- CommonLoading

```javascript
import { CommonLoading } from 'jitera-rn-ui';

const action = async () => {
  try {
    CommonLoading.show();
    // Wait some async job
    await fetchData();
    CommonLoading.hide();
  } catch (err) {
    CommonLoading.hide();
  }
};
```

- Modal

```javascript

import { Modal } from 'jitera-rn-ui'

const onPressButton = async () => {
    Modal.show(
        <YourComponent
            onSuccess={() => {
                Modal.hide()
            }}
            onCancel={() => {
                Modal.hide()
            }}
        >
    )
}

```

- Toast

```javascript
import { Toast } from 'jitera-rn-ui';

const onPressButton = async () => {
  Toast.show(' -- Your Message -- ', { type: 'error' });
};
```
