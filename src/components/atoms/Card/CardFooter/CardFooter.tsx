import React from 'react';
import type { RneFunctionComponent } from '../../../../theme/helpers';
import { Text, View } from '../../../..';
import type { CardFooterProps } from './CardFooter.Props';
import useStyles from './styles';

export const CardFooter: RneFunctionComponent<CardFooterProps> = ({
  footer,
  containerStyles,
}) => {
  const styles = useStyles();

  return (
    <View style={[styles.container, containerStyles]}>
      {typeof footer === 'string' ? (
        <Text style={styles.footerText}> {footer} </Text>
      ) : (
        footer()
      )}
    </View>
  );
};
