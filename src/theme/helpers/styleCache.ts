import { StyleSheet } from 'react-native';

const cache: any = {};

export default (key: string, values: any, allStyle?: boolean) => {
  if (!cache[key]) {
    const styles = StyleSheet.create({
      [key]: values,
    });
    cache[key] = styles;
  }
  return allStyle ? cache : cache[key][key];
};
