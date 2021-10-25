import { scale } from 'react-native-size-matters';

export interface Spacing {
  SPACING_1: number;
  SPACING_2: number;
  SPACING_3: number;
  SPACING_4: number;
  SPACING_5: number;
  SPACING_6: number;
  SPACING_7: number;
  SPACING_8: number;
  SPACING_9: number;
  SPACING_10: number;
  SPACING_12: number;
  SPACING_14: number;
  SPACING_15: number;
  SPACING_20: number;
  SPACING_25: number;
  SPACING_30: number;
  SPACING_35: number;
  SPACING_40: number;
  SPACING_45: number;
  SPACING_50: number;
}

const spacing: Spacing = {
  SPACING_1: scale(1),
  SPACING_2: scale(2),
  SPACING_3: scale(3),
  SPACING_4: scale(4),
  SPACING_5: scale(5),
  SPACING_6: scale(6),
  SPACING_7: scale(7),
  SPACING_8: scale(8),
  SPACING_9: scale(9),
  SPACING_10: scale(10),
  SPACING_12: scale(12),
  SPACING_14: scale(14),
  SPACING_15: scale(15),
  SPACING_20: scale(20),
  SPACING_25: scale(25),
  SPACING_30: scale(30),
  SPACING_35: scale(35),
  SPACING_40: scale(40),
  SPACING_45: scale(45),
  SPACING_50: scale(50),
};

export default spacing;
