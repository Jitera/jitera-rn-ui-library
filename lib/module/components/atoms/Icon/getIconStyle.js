import { IconType } from "./Component";
export default ((type, extraProps) => {
  switch (type) {
    case IconType.FontAwesome5:
      return {
        solid: extraProps.solid || false,
        brand: extraProps.brand || false
      };

    default:
      return {};
  }
});
//# sourceMappingURL=getIconStyle.js.map