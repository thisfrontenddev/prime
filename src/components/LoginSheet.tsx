import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import Box from "~/components/Box";
import Button from "~/components/Button";
import Text from "~/components/Text";

export const LoginSheet: React.FC = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box
      style={styles.root}
      p="l"
      borderTopLeftRadius="xl"
      borderTopRightRadius="xxl"
      backgroundColor="mainBackground"
    >
      <Text variant="s1">Hi there!</Text>
      <Text variant="h1">Login</Text>
      <Box pt="l" pb="l">
        <TextInput
          style={styles.input}
          autoCompleteType="email"
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
        <Button style={styles.button} mode="contained">
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
