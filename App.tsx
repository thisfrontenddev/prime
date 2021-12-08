import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";
import React from "react";
import { StyleSheet } from "react-native";
import { NetworkProvider } from "react-native-offline";
import {
  DefaultTheme as DefaultPaperTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { QueryClient, QueryClientProvider } from "react-query";
import AppNavigator from "~/navigation/AppNavigator";
import theme from "~/theme";

const paperTheme: typeof DefaultPaperTheme = {
  ...DefaultPaperTheme,
  colors: {
    ...DefaultPaperTheme.colors,
    primary: theme.colors.accent,
  },
};

const queryClient = new QueryClient();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <PaperProvider theme={paperTheme}>
        <NetworkProvider>
          <NavigationContainer>
            <QueryClientProvider client={queryClient}>
              <AppNavigator />
            </QueryClientProvider>
          </NavigationContainer>
        </NetworkProvider>
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
