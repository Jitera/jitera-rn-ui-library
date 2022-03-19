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
  scrollable?: boolean
  viewStyle?: StyleProp<ViewStyle>;
};

const BaseLayout: React.FC<BaseLayoutProps> = ({children, scrollable = false, viewStyle}) => (
  <SafeAreaView>
    {
      scrollable ? (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={StyleSheet.flatten([style.view, viewStyle && viewStyle])}>
            {children}
          </View>
        </ScrollView>
      ) :
      (
        <View style={StyleSheet.flatten([style.view, viewStyle && viewStyle])}>
          {children}
        </View>
      )
    }
  </SafeAreaView>
);

const style = StyleSheet.create({
  view: {
    padding: 24,
  },
});

export default BaseLayout;
