import type { IconType } from './Component';

export default (type: IconType, extraProps: any) => {
  switch (type) {
    case 'Zocial':
    case 'zocial':
      return {};
    case 'Octicons':
    case 'octicon':
      return {};
    case 'MaterialIcons':
    case 'material':
      return {};
    case 'MaterialCommunityIcons':
    case 'material-community':
      return {};
    case 'Ionicons':
    case 'ionicon':
      return {};
    case 'Foundation':
    case 'foundation':
      return {};
    case 'EvilIcons':
    case 'evilicon':
      return {};
    case 'Entypo':
    case 'entypo':
      return {};
    case 'FontAwesome':
    case 'font-awesome':
      return {};
    case 'FontAwesome5':
    case 'font-awesome-5':
      return {
        solid: extraProps.solid || false,
        brand: extraProps.brand || false,
      };
    case 'SimpleLineIcons':
    case 'simple-line-icon':
      return {};
    case 'Feather':
    case 'feather':
      return {};
    case 'AntDesign':
    case 'antdesign':
    case 'ant-design':
      return {};
    case 'Fontisto':
    case 'fontisto':
      return {};
    default:
      return {};
  }
};
