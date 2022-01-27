import React from 'react';
import {Icon, IconType} from '@jitera/jitera-rn-ui-library';

import BaseLayout from '~/layouts/Base';

const IconViews: React.FC = () => (
  <BaseLayout>
    <Icon type={IconType.AntDesign} name="star" />
  </BaseLayout>
);

export default IconViews;
