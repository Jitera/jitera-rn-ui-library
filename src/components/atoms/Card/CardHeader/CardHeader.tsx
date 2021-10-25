import React from 'react';
import { Text, View } from '../../../..';
import type { RneFunctionComponent } from '../../../../theme/helpers';
import type { CardHeaderProps } from './CardHeader.Props';
import useStyles from './styles';

export const CardHeader: RneFunctionComponent<CardHeaderProps> = ({
  header,
  containerStyles,
}) => {
  const styles = useStyles();

  return (
    <View style={[styles.container, containerStyles]}>
      {typeof header === 'string' ? (
        <Text style={styles.headerText}> {header} </Text>
      ) : (
        header()
      )}
    </View>
  );
};
