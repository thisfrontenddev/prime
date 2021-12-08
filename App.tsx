import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";
import React from "react";
import { StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import GuestNavigator from "~/navigation/GuestNavigator";
import theme from "~/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <PaperProvider>
        <NavigationContainer>
          <GuestNavigator />
        </NavigationContainer>
      </PaperProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
