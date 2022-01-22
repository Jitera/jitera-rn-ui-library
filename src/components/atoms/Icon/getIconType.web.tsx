import { IconType } from './Component';
import {
  Zocial,
  Entypo,
  EvilIcons,
  Octicons,
  Ionicons,
  Feather,
  Fontisto,
  AntDesign,
  FontAwesome,
  Foundation,
  MaterialIcons,
  FontAwesome5,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const customIcons: any = {};

export const registerCustomIconType = (id: string, customIcon: any) => {
  customIcons[id] = customIcon;
};

export default (type: IconType): any => {
  switch (type) {
    case IconType.Zocial:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return Zocial;
    case IconType.Octicons:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return Octicons;
    case IconType.MaterialIcons:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return MaterialIcons;
    case IconType.MaterialCommunityIcons:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return MaterialCommunityIcons;
    case IconType.Ionicons:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return Ionicons;
    case IconType.Foundation:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return Foundation;
    case IconType.EvilIcons:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return EvilIcons;
    case IconType.Entypo:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return Entypo;
    case IconType.FontAwesome:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return FontAwesome;
    case IconType.FontAwesome5:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return FontAwesome5;
    case IconType.SimpleLineIcons:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return SimpleLineIcons;
    case IconType.Feather:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return Feather;
    case IconType.AntDesign:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return AntDesign;
    case IconType.Fontisto:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return Fontisto;
    default:
      if (Object.prototype.hasOwnProperty.call(customIcons, type)) {
        return customIcons[type];
      }
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return MaterialIcons;
  }
};
