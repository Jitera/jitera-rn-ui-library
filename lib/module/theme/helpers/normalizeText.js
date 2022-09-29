import { moderateScale } from 'react-native-size-matters';

function normalize(number) {
  let factor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.25;
  return moderateScale(number, factor);
}

export default normalize;
//# sourceMappingURL=normalizeText.js.map