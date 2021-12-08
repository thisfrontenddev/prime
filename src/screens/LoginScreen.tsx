import { useTheme } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import Box from "~/components/Box";
import LoginSheet from "~/components/LoginSheet";
import Text from "~/components/Text";
import { Theme } from "~/theme";

const cover = require("../../assets/images/cover.jpeg");

export const LoginScreen: React.FC = () => {
  const theme = useTheme<Theme>();
  const colors = theme.colors;
  return (
    <ImageBackground style={styles.root} source={cover} resizeMode="cover">
      <StatusBar style="light" />
      <SafeAreaView>
        <Box p="xl">
          <Text variant="hero" textAlign="center">
            Prime
          </Text>
        </Box>
      </SafeAreaView>
      <LoginSheet />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default LoginScreen;
