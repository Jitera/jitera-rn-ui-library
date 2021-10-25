import React from 'react';
import type { RneFunctionComponent } from '../../../theme/helpers';
import { View, Text } from 'react-native';
import type { DividerProps } from './Divider.Props';
import useStyles from './styles';

export const Divider: RneFunctionComponent<DividerProps> = ({
  theme,
  styles,
  color = theme?.colors?.greyOutline,
  size = theme?.spacing?.SPACING_1,
  content,
  contentPosition = 'center',
  contentStyles,
  containerStyles,
}) => {
  const defaultStyles = useStyles();

  const renderContent = () => {
    if (!content) return null;

    if (typeof content === 'string')
      return <Text style={[defaultStyles.text, contentStyles]}>{content}</Text>;

    return (
      <View style={[defaultStyles.contentContainer, containerStyles]}>
        {content()}
      </View>
    );
  };

  return (
    <View style={[defaultStyles.container, styles]}>
      <View style={defaultStyles.lineContainer}>
        <View
          style={[
            defaultStyles.line,
            { borderTopColor: color, borderTopWidth: size },
          ]}
        />
      </View>
      <View
        style={[
          defaultStyles.contentWrapper,
          { justifyContent: getContentPositionClass(contentPosition) },
        ]}
      >
        {renderContent()}
      </View>
    </View>
  );
};

const getContentPositionClass: (
  postion: 'left' | 'center' | 'right',
) => 'flex-start' | 'center' | 'flex-end' = position => {
  if (position === 'left') return 'flex-start';
  if (position === 'right') return 'flex-end';

  return 'center';
};
