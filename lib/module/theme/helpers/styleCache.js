import { StyleSheet } from 'react-native';
const cache = {};
export default ((key, values, allStyle) => {
  if (!cache[key]) {
    const styles = StyleSheet.create({
      [key]: values
    });
    cache[key] = styles;
  }

  return allStyle ? cache : cache[key][key];
});
//# sourceMappingURL=styleCache.js.map