import React from 'react';
import { Alert } from 'react-native'
import {TouchableOpacity, View} from '@jitera/jitera-rn-ui-library';

import BaseLayout from '~/layouts/Base';

const TouchableOpacityViews: React.FC = () => (
  <BaseLayout>
    <TouchableOpacity onPress={() => {
      Alert.alert('Hello World!')
    }}>
      <View style={{backgroundColor: '#ddd', width: 100, height: 100}} />
    </TouchableOpacity>
  </BaseLayout>
);

export default TouchableOpacityViews;
