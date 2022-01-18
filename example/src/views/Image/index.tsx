import React from 'react';
import {Image} from '@jitera/jitera-rn-ui-library';

import BaseLayout from '~/layouts/Base';

const ImageViews: React.FC = () => (
  <BaseLayout>
    <Image
      source={{
        uri: 'https://jitera.com/packs/media/styles/img/logo-jitera-white-0cba213098fb44f164173063eaef1f34.svg',
      }}
    />
  </BaseLayout>
);

export default ImageViews;
