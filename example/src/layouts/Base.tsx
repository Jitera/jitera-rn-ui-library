import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, View} from 'react-native';

const BaseLayout: React.FC = ({children}) => (
  <SafeAreaView>
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={style.view}>{children}</View>
    </ScrollView>
  </SafeAreaView>
);

const style = StyleSheet.create({
  view: {
    padding: 24,
  },
});

export default BaseLayout;
