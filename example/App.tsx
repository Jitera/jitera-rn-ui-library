import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { enableFreeze } from 'react-native-screens';

import HomeView from '~/views/Home';
import ButtonViews from '~/views/Button';
import DividerViews from '~/views/Divider';
import HeaderViews from '~/views/Header';
import IconViews from '~/views/Icon';
import ImageViews from '~/views/Image';
import InputViews from '~/views/Input';
import SimpleInputViews from '~/views/SimpleInput';
import OTPInputViews from '~/views/OTPInput';
import PageViews from '~/views/Page';
import TextViews from '~/views/Text';
import ViewViews from '~/views/View';
import ScrollViews from '~/views/ScrollView';
import WebViewViews from '~/views/WebView';
import ImagePickerViews from '~/views/ImagePicker';
import CarouselViews from '~/views/Carousel';
import DateTimePickerViews from '~/views/DateTimePicker';
import FlatListViews from '~/views/FlatList';
import ThirdPartyAuthenticationViews from '~/views/ThirdPartyAuthButton';
import TouchableOpacityViews from '~/views/TouchableOpacity';

const Stack = createStackNavigator();
enableFreeze(true);

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeView} />
          <Stack.Screen name="Button" component={ButtonViews} />
          <Stack.Screen name="Divider" component={DividerViews} />
          <Stack.Screen name="Header" component={HeaderViews} />
          <Stack.Screen name="Icon" component={IconViews} />
          <Stack.Screen name="Image" component={ImageViews} />
          <Stack.Screen name="Input" component={InputViews} />
          <Stack.Screen name="SimpleInput" component={SimpleInputViews} />
          <Stack.Screen name="OTPInput" component={OTPInputViews} />
          <Stack.Screen name="Page" component={PageViews} />
          <Stack.Screen name="Text" component={TextViews} />
          <Stack.Screen name="View" component={ViewViews} />
          <Stack.Screen name="ScrollView" component={ScrollViews} />
          <Stack.Screen name="WebView" component={WebViewViews} />
          <Stack.Screen name="ImagePicker" component={ImagePickerViews} />
          <Stack.Screen name="Carousel" component={CarouselViews} />
          <Stack.Screen name="DateTimePicker" component={DateTimePickerViews} />
          <Stack.Screen name="FlatList" component={FlatListViews} />
          <Stack.Screen
            name="ThirdPartyAuthButton"
            component={ThirdPartyAuthenticationViews}
          />
          <Stack.Screen
            name="TouchableOpacity"
            component={TouchableOpacityViews}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
