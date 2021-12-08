import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ProductListScreen from "~/screens/ProductListScreen";
import LoginScreen from "../screens/LoginScreen";
import { Routes } from "./routes";

export type RootStackParamList = {
  [Routes.LOGIN_SCREEN]: undefined;
  [Routes.PRODUCT_LIST_SCREEN]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={Routes.LOGIN_SCREEN}
    >
      <Stack.Group>
        <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name={Routes.PRODUCT_LIST_SCREEN}
          component={ProductListScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AppNavigator;
