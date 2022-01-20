import React from 'react';
import { View, StyleProp, ViewStyle, StyleSheet, Platform } from 'react-native';
import { defaultTheme, colors } from '../../../theme';

export type IndicatorStyle = {
  containerStyles?: StyleProp<ViewStyle>;
  indicatorStyles?: StyleProp<ViewStyle>;
  activeStyles?: StyleProp<ViewStyle>;
  inactiveStyles?: StyleProp<ViewStyle>;
};

export type IndicatorProps = IndicatorStyle & {
  totalItems: number;
  currentIndex: number;
};

const CarouselIndicator = ({
  totalItems,
  currentIndex,
  containerStyles,
  indicatorStyles,
  activeStyles,
  inactiveStyles,
}: IndicatorProps) => {
  const indicatorActiveStyles = activeStyles ? activeStyles : styles.active;
  const indicatorInactiveStyles = inactiveStyles
    ? inactiveStyles
    : styles.inactive;

  return (
    <View style={[styles.container, containerStyles]}>
      {Array(totalItems)
        .fill(0)
        .map((_, i) => (
          <View
            key={`${i}`}
            style={[
              styles.indicator,
              indicatorStyles,
              i === currentIndex
                ? indicatorActiveStyles
                : indicatorInactiveStyles,
            ]}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'web' ? 10 : defaultTheme.spacing?.SPACING_10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  indicator: {
    width: Platform.OS === 'web' ? 10 : defaultTheme.spacing?.SPACING_10,
    height: Platform.OS === 'web' ? 10 : defaultTheme.spacing?.SPACING_10,
    borderRadius: Platform.OS === 'web' ? 5 : defaultTheme.spacing?.SPACING_5,
    marginHorizontal:
      Platform.OS === 'web' ? 5 : defaultTheme.spacing?.SPACING_5,
  },
  active: {
    backgroundColor:
      Platform.OS === 'web' ? colors.grey2 : defaultTheme?.colors?.grey2,
  },
  inactive: {
    backgroundColor:
      Platform.OS === 'web' ? colors.grey4 : defaultTheme?.colors?.grey4,
  },
});

export default CarouselIndicator;
