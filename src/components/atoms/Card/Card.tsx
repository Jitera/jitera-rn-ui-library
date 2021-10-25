import React from 'react';
import { View } from '../../..';
import type { RneFunctionComponent } from '../../../theme/helpers';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import type { CardProps } from './Card.Props';
import useStyles from './styles';

export const Card: RneFunctionComponent<CardProps> = ({
  header,
  footer,
  renderContent,
  containerStyles,
  headerStyles,
  contentStyles,
  footerStyles,
}) => {
  const styles = useStyles();

  return (
    <View style={[styles.container, containerStyles]}>
      <CardHeader header={header} containerStyles={headerStyles} />
      <View style={[styles.content, contentStyles]}>{renderContent()}</View>
      {footer && <CardFooter footer={footer} containerStyles={footerStyles} />}
    </View>
  );
};

export default Card;
