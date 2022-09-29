import React from "react";
import { View as RNView } from "react-native";
import type { IconProps as RNVIIconProps } from "react-native-vector-icons/Icon";
export declare enum IconType {
    Zocial = "Zocial",
    Octicons = "Octicons",
    MaterialIcons = "MaterialIcons",
    MaterialCommunityIcons = "MaterialCommunityIcons",
    Ionicons = "Ionicons",
    Foundation = "Foundation",
    EvilIcons = "EvilIcons",
    Entypo = "Entypo",
    FontAwesome = "FontAwesome",
    FontAwesome5 = "FontAwesome5",
    SimpleLineIcons = "SimpleLineIcons",
    Feather = "Feather",
    AntDesign = "AntDesign",
    Fontisto = "Fontisto"
}
export interface IconProps extends RNVIIconProps {
    /** Type of icon set. [Supported sets here](#available-icon-sets). */
    type?: `${IconType}`;
}
/** Icons are visual indicators usually used to describe action or intent.
 * They are also used for displaying information. */
declare const Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<RNView>>;
export default Icon;
