import { useTheme } from "@shopify/restyle";
import React from "react";
import { Button as PaperButton } from "react-native-paper";
import { Theme } from "~/theme";

export const Button: React.FC<React.ComponentProps<typeof PaperButton>> = (
  props
) => {
  const { colors } = useTheme<Theme>();
  return <PaperButton color={colors.blackBackground} {...props} />;
};

export default Button;
