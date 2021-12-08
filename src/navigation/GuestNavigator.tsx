import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "../screens/LoginScreen";
import { Routes } from "./routes";

const Stack = createNativeStackNavigator();
export const GuestNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default GuestNavigator;
