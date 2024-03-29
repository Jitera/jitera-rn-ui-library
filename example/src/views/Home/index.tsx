import React from 'react';
import { StyleSheet, Button, ButtonProps, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import BaseLayout from '~/layouts/Base';

const ButtonView: React.FC<ButtonProps> = props => (
  <View style={style.button}>
    <Button {...props} />
  </View>
);

const HomeView: React.FC = () => {
  const navigation = useNavigation();

  return (
    <BaseLayout scrollable>
      <ButtonView
        title="Button"
        onPress={() => navigation.navigate('Button')}
      />
      <ButtonView
        title="Divider"
        onPress={() => navigation.navigate('Divider')}
      />
      <ButtonView
        title="Header"
        onPress={() => navigation.navigate('Header')}
      />
      <ButtonView title="Icon" onPress={() => navigation.navigate('Icon')} />
      <ButtonView title="Image" onPress={() => navigation.navigate('Image')} />
      <ButtonView title="Input" onPress={() => navigation.navigate('Input')} />
      <ButtonView
        title="SimpleInput"
        onPress={() => navigation.navigate('SimpleInput')}
      />
      <ButtonView
        title="OTPInput"
        onPress={() => navigation.navigate('OTPInput')}
      />
      <ButtonView title="Page" onPress={() => navigation.navigate('Page')} />
      <ButtonView title="Text" onPress={() => navigation.navigate('Text')} />
      <ButtonView title="View" onPress={() => navigation.navigate('View')} />
      <ButtonView
        title="ScrollView"
        onPress={() => navigation.navigate('ScrollView')}
      />
      <ButtonView
        title="WebView"
        onPress={() => navigation.navigate('WebView')}
      />
      <ButtonView
        title="ImagePicker"
        onPress={() => navigation.navigate('ImagePicker')}
      />
      <ButtonView
        title="Carousel"
        onPress={() => navigation.navigate('Carousel')}
      />
      <ButtonView
        title="DateTimePicker"
        onPress={() => navigation.navigate('DateTimePicker')}
      />
      <ButtonView
        title="FlatList"
        onPress={() => navigation.navigate('FlatList')}
      />
      <ButtonView
        title="Third Party Auth Button"
        onPress={() => navigation.navigate('ThirdPartyAuthButton')}
      />
      <ButtonView
        title="Touchable Opacity"
        onPress={() => navigation.navigate('TouchableOpacity')}
      />
    </BaseLayout>
  );
};

const style = StyleSheet.create({
  button: {
    marginBottom: 12
  }
});

export default HomeView;
