import * as React from 'react';

import { StyleSheet } from 'react-native';
import { View, Text, Input, Button, ThemeProvider } from 'jitera-rn-ui';

const theme = {
  // TODO: default custom theme: colors, font family, button style, etc
  brandingColors: {},
  Button: {
    raised: true,
  },
};
export default function App() {
  return (
    <ThemeProvider safeArea theme={theme}>
      <View style={styles.container}>
        <Input />
        <Text h2>Result</Text>
        <Button title={'Hello'} />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
