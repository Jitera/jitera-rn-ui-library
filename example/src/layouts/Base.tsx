import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  ViewStyle,
  StyleProp,
} from 'react-native';

export type BaseLayoutProps = {
  viewStyle?: StyleProp<ViewStyle>;
};

const BaseLayout: React.FC<BaseLayoutProps> = ({children, viewStyle}) => (
  <SafeAreaView>
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={StyleSheet.flatten([style.view, viewStyle && viewStyle])}>
        {children}
      </View>
    </ScrollView>
  </SafeAreaView>
);

const style = StyleSheet.create({
  view: {
    padding: 24,
  },
});

export default BaseLayout;
