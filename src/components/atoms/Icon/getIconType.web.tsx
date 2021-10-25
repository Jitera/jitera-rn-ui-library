import type { IconType } from './Component';
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
    case 'Zocial':
    case 'zocial':
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return Zocial;
    case 'Octicons':
    case 'octicon':
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return Octicons;
    case 'MaterialIcons':
    case 'material':
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return MaterialIcons;
    case 'MaterialCommunityIcons':
    case 'materialcommunity':
    case 'material-community':
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return MaterialCommunityIcons;
    case 'Ionicons':
    case 'ionicon':
      console.log('Ionicons');
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return Ionicons;
    case 'Foundation':
    case 'foundation':
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return Foundation;
    case 'EvilIcons':
    case 'evilicon':
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return EvilIcons;
    case 'Entypo':
    case 'entypo':
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return Entypo;
    case 'FontAwesome':
    case 'fontawesome':
    case 'font-awesome':
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return FontAwesome;
    case 'FontAwesome5':
    case 'fontawesome-5':
    case 'font-awesome-5':
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return FontAwesome5;
    case 'SimpleLineIcons':
    case 'simplelineicon':
    case 'simpleline-icon':
    case 'simple-line-icon':
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return SimpleLineIcons;
    case 'Feather':
    case 'feather':
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return Feather;
    case 'AntDesign':
    case 'antDesign':
    case 'antdesign':
    case 'ant-design':
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return AntDesign;
    case 'Fontisto':
    case 'fontisto':
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
