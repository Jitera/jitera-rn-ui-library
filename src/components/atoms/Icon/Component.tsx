import React, { FunctionComponent, forwardRef } from 'react';
import { StyleSheet, View } from 'react-native';
import type { IconProps as VectorIconProps } from 'react-native-vector-icons';
import getIconType from './getIconType';
import getIconStyle from './getIconStyle';
import type { PropsWithRef } from 'src/type';

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

export type IconProps = PropsWithRef<
  VectorIconProps & {
    /** Type of icon set. [Supported sets here](#available-icon-sets). */
    type?: IconType;
  }
>;

/** Icons are visual indicators usually used to describe action or intent.
 * They are also used for displaying information. */
const Icon: FunctionComponent<IconProps> = forwardRef<any, IconProps>(
  (
    { type = IconType.MaterialIcons, name, size = 24, color, style, ...props },
    ref
  ) => {
    const IconComponent = getIconType(type);
    const iconSpecificStyle = getIconStyle(type, {});

    return (
      <View ref={ref} style={StyleSheet.flatten([style])}>
        <IconComponent
          testID="iconIcon"
          style={styles.icon}
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
  icon: { backgroundColor: 'transparent' },
});

Icon.displayName = 'Icon';

export default Icon;
