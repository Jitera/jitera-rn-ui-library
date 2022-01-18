import React from 'react';
import {Header} from '@jitera/jitera-rn-ui-library';

import BaseLayout from '~/layouts/Base';

const HeaderViews: React.FC = () => (
  <BaseLayout>
    <Header titleStyle={{color: 'red'}} />
  </BaseLayout>
);

export default HeaderViews;
