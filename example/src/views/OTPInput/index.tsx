import React from 'react';
import {OTPInput} from '@jitera/jitera-rn-ui-library';

import BaseLayout from '~/layouts/Base';

const OTPInputViews: React.FC = () => (
  <BaseLayout>
    <OTPInput renderCell={() => undefined} />
  </BaseLayout>
);

export default OTPInputViews;
