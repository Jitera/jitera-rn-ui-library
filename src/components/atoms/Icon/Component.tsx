import React from 'react';
import { StyleSheet, View as RNView } from 'react-native';

import type { IconProps as RNVIIconProps } from 'react-native-vector-icons/Icon';

import View from '../View/Component';

import getIconType from './getIconType';
import getIconStyle from './getIconStyle';

export enum IconType {
  Zocial = 'Zocial',
  Octicons = 'Octicons',
  MaterialIcons = 'MaterialIcons',
  MaterialCommunityIcons = 'MaterialCommunityIcons',
  Ionicons = 'Ionicons',
  Foundation = 'Foundation',
  EvilIcons = 'EvilIcons',
  Entypo = 'Entypo',
  FontAwesome = 'FontAwesome',
  FontAwesome5 = 'FontAwesome5',
  SimpleLineIcons = 'SimpleLineIcons',
  Feather = 'Feather',
  AntDesign = 'AntDesign',
  Fontisto = 'Fontisto',
}

export interface IconProps extends RNVIIconProps {
  /** Type of icon set. [Supported sets here](#available-icon-sets). */
  type?: `${IconType}`;
}

/** Icons are visual indicators usually used to describe action or intent.
 * They are also used for displaying information. */
const Icon = React.forwardRef<RNView, IconProps>(
  (
    { type = IconType.MaterialIcons, name, size = 24, color, style, ...props },
    ref
  ) => {
    const IconComponent = getIconType(type);
    const iconSpecificStyle = getIconStyle(type, {});

    return (
      <View
        ref={ref}
        style={StyleSheet.flatten([
          style,
          styles.container,
          {
            width: size,
            height: size,
          },
        ])}
      >
        <IconComponent
          testID="iconIcon"
          style={StyleSheet.flatten([styles.icon])}
          size={size}
          name={name}
          color={color}
          {...iconSpecificStyle}
          {...props}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: { backgroundColor: 'transparent' },
});

Icon.displayName = 'Icon';

export default Icon;
