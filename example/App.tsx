import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeView from '~/views/Home';
import ButtonViews from '~/views/Button';
import DividerViews from '~/views/Divider';
import HeaderViews from '~/views/Header';
import IconViews from '~/views/Icon';
import ImageViews from '~/views/Image';
import InputViews from '~/views/Input';
import OTPInputViews from '~/views/OTPInput';
import PageViews from '~/views/Page';
import TextViews from '~/views/Text';
import ViewViews from '~/views/View';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="Button" component={ButtonViews} />
        <Stack.Screen name="Divider" component={DividerViews} />
        <Stack.Screen name="Header" component={HeaderViews} />
        <Stack.Screen name="Icon" component={IconViews} />
        <Stack.Screen name="Image" component={ImageViews} />
        <Stack.Screen name="Input" component={InputViews} />
        <Stack.Screen name="OTPInput" component={OTPInputViews} />
        <Stack.Screen name="Page" component={PageViews} />
        <Stack.Screen name="Text" component={TextViews} />
        <Stack.Screen name="View" component={ViewViews} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
