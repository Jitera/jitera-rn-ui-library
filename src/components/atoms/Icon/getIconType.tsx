import { IconType } from './Component';

const customIcons: any = {};

export const registerCustomIconType = (id: string, customIcon: any) => {
  customIcons[id] = customIcon;
};

export default (type: `${IconType}`): any => {
  switch (type) {
    case IconType.Zocial:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('react-native-vector-icons/Zocial').default;
    case IconType.Octicons:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('react-native-vector-icons/Octicons').default;
    case IconType.MaterialIcons:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('react-native-vector-icons/MaterialIcons').default;
    case IconType.MaterialCommunityIcons:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('react-native-vector-icons/MaterialCommunityIcons')
        .default;
    case IconType.Ionicons:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('react-native-vector-icons/Ionicons').default;
    case IconType.Foundation:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('react-native-vector-icons/Foundation').default;
    case IconType.EvilIcons:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('react-native-vector-icons/EvilIcons').default;
    case IconType.Entypo:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('react-native-vector-icons/Entypo').default;
    case IconType.FontAwesome:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('react-native-vector-icons/FontAwesome').default;
    case IconType.FontAwesome5:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('react-native-vector-icons/FontAwesome5').default;
    case IconType.SimpleLineIcons:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('react-native-vector-icons/SimpleLineIcons').default;
    case IconType.Feather:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('react-native-vector-icons/Feather').default;
    case IconType.AntDesign:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('react-native-vector-icons/AntDesign').default;
    case IconType.Fontisto:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('react-native-vector-icons/Fontisto').default;
    default:
      if (Object.prototype.hasOwnProperty.call(customIcons, type)) {
        return customIcons[type];
      }
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('react-native-vector-icons/MaterialIcons').default;
  }
};
