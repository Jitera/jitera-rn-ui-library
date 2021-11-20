import React from 'react';
import type { RneFunctionComponent } from '../../../theme/helpers';
import Text, { TextProps } from './Component';

/** Text displays words and characters at various sizes. */
const ThemedText: RneFunctionComponent<TextProps> = (props) => {
  const { theme, children } = props;
  return (
    <Text {...props} textColor={theme?.colors?.text}>
      {children}
    </Text>
  );
};

Text.displayName = 'Text';

export default ThemedText;
