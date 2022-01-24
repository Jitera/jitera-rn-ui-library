import type { IconType } from './Component';

const customIcons: any = {};

export const registerCustomIconType = (id: string, customIcon: any) => {
  customIcons[id] = customIcon;
};

export default (type: IconType): any => {
  switch (type) {
    case 'Zocial':
    case 'zocial':
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('react-native-vector-icons/Zocial').default;
    case 'Octicons':
    case 'octicon':
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('react-native-vector-icons/Octicons').default;
    case 'MaterialIcons':
    case 'material':
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('react-native-vector-icons/MaterialIcons').default;
    case 'MaterialCommunityIcons':
    case 'materialcommunity':
    case 'material-community':
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('react-native-vector-icons/MaterialCommunityIcons')
        .default;
    case 'Ionicons':
    case 'ionicon':
      console.log('Ionicons');
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('react-native-vector-icons/Ionicons').default;
    case 'Foundation':
    case 'foundation':
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('react-native-vector-icons/Foundation').default;
    case 'EvilIcons':
    case 'evilicon':
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('react-native-vector-icons/EvilIcons').default;
    case 'Entypo':
    case 'entypo':
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('react-native-vector-icons/Entypo').default;
    case 'FontAwesome':
    case 'fontawesome':
    case 'font-awesome':
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('react-native-vector-icons/FontAwesome').default;
    case 'FontAwesome5':
    case 'fontawesome-5':
    case 'font-awesome-5':
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('react-native-vector-icons/FontAwesome5').default;
    case 'SimpleLineIcons':
    case 'simplelineicon':
    case 'simpleline-icon':
    case 'simple-line-icon':
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('react-native-vector-icons/SimpleLineIcons').default;
    case 'Feather':
    case 'feather':
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('react-native-vector-icons/Feather').default;
    case 'AntDesign':
    case 'antDesign':
    case 'antdesign':
    case 'ant-design':
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('react-native-vector-icons/AntDesign').default;
    case 'Fontisto':
    case 'fontisto':
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
