import { Dimensions, StyleSheet } from "react-native";

export function responsiveStyles(styleObj) {
  const { width, height } = Dimensions.get("window");
  const isPortrait = height >= width;

  const finalStyles = {};

  Object.keys(styleObj).forEach((key) => {
    finalStyles[key] = {
      ...(styleObj[key]?.portrait || {}),
      ...(isPortrait ? styleObj[key]?.portrait : styleObj[key]?.landscape),
    };
  });

  return StyleSheet.create(finalStyles);
}