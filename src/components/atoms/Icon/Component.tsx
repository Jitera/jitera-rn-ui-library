import React, { FunctionComponent, forwardRef } from 'react';
import { StyleSheet } from 'react-native';
import type { IconProps as VectorIconProps } from 'react-native-vector-icons';
import getIconType from './getIconType';
import getIconStyle from './getIconStyle';
import type { PropsWithRef } from 'src/type';

export type IconType =
  | 'material'
  | 'material-community'
  | 'simple-line-icon'
  | 'zocial'
  | 'font-awesome'
  | 'octicon'
  | 'ionicon'
  | 'foundation'
  | 'evilicon'
  | 'entypo'
  | 'antdesign'
  | 'font-awesome-5'
  | 'Zocial'
  | 'Octicons'
  | 'MaterialIcons'
  | 'MaterialCommunityIcons'
  | 'Ionicons'
  | 'Foundation'
  | 'EvilIcons'
  | 'Entypo'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'SimpleLineIcons'
  | 'Feather'
  | 'AntDesign'
  | 'Fontisto'
  | string;

export type IconProps = PropsWithRef<
  VectorIconProps & {
    /** Type of icon set. [Supported sets here](#available-icon-sets). */
    type?: IconType;
  }
>;

/** Icons are visual indicators usually used to describe action or intent.
 * They are also used for displaying information. */
const Icon: FunctionComponent<IconProps> = forwardRef<any, IconProps>(
  ({ type = 'material', name, size = 24, color, style, ...props }, ref) => {
    const IconComponent = getIconType(type);
    const iconSpecificStyle = getIconStyle(type, {});

    return (
      <IconComponent
        ref={ref}
        testID="iconIcon"
        style={StyleSheet.flatten([styles.icon, style && style])}
        size={size}
        name={name}
        color={color}
        {...iconSpecificStyle}
        {...props}
      />
    );
  }
);

const styles = StyleSheet.create({
  icon: { backgroundColor: 'transparent' },
});

Icon.displayName = 'Icon';

export default Icon;
