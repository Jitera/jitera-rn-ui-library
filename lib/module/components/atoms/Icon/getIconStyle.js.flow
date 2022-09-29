import { IconType } from "./Component";

export default (type: `${IconType}`, extraProps: { solid?: boolean; brand?: boolean }) => {
  switch (type) {
    case IconType.FontAwesome5:
      return {
        solid: extraProps.solid || false,
        brand: extraProps.brand || false,
      };
    default:
      return {};
  }
};
