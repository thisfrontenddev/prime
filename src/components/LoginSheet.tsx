import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import Box from "~/components/Box";
import Button from "~/components/Button";
import Text from "~/components/Text";
import { RootStackParamList } from "~/navigation/AppNavigator";
import { Routes } from "~/navigation/routes";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  Routes.LOGIN_SCREEN
>;

export const LoginSheet: React.FC = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { navigate } = useNavigation<LoginScreenNavigationProp>();

  const handleLoginPress = () => {
    navigate(Routes.PRODUCT_LIST_SCREEN);
  };

  return (
    <Box
      style={styles.root}
      p="l"
      borderTopLeftRadius="xl"
      borderTopRightRadius="xl"
      backgroundColor="mainBackground"
    >
      <Text variant="s1">Hi there!</Text>
      <Text variant="h1">Login</Text>
      <Box pt="l" pb="l">
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="email@example.com"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          value={password}
          placeholder="def!nit3lySecur3"
          onChangeText={setPassword}
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={handleLoginPress}
        >
          Log me in
        </Button>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  root: {
    flexGrow: 0.5,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    padding: 10,
  },
});

export default LoginSheet;
