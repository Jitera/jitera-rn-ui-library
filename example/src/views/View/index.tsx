import React from 'react';
import {View} from '@jitera/jitera-rn-ui-library';

import BaseLayout from '~/layouts/Base';

const ViewViews: React.FC = () => (
  <BaseLayout>
    <View style={{backgroundColor: '#ddd', width: '100%', height: 1000}} />
  </BaseLayout>
);

export default ViewViews;
