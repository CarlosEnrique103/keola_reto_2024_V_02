import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { TextInput } from "react-native-paper";
import Button from "../Button";
// import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/Colors";

const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChangeText = (key: string, value: string) =>
    setData((prev) => ({ ...prev, [key]: value }));

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    if (Object.values(data).some((value) => !value)) {
      console.log("no hay valores");
      return;
    }
    console.log("Sending data", { data });
  };

  return (
    <View style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.formContainer}>
          <View>
            <Text style={styles.title}>Iniciar sesión</Text>
          </View>
          <TextInput
            mode="outlined"
            label="Email:"
            value={data.email}
            style={styles.input}
            keyboardType="email-address"
            onChangeText={(value) => handleChangeText("email", value)}
            theme={{
              colors: {
                primary: Colors.light.primaryColor,
              },
            }}
          />

          <TextInput
            mode="outlined"
            label="Contraseña:"
            value={data.password}
            style={styles.input}
            onChangeText={(value) => handleChangeText("password", value)}
            right={
              <TextInput.Icon
                icon={!showPassword ? "eye-off" : "eye"}
                onPress={() => setShowPassword((prev) => !prev)}
              />
            }
            secureTextEntry={!showPassword}
            theme={{
              colors: {
                primary: Colors.light.primaryColor,
              },
            }}
          />
          <Button title="Iniciar sesión" onPress={handleSubmit} />
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  scrollContent: {
    flexGrow: 1,
  },
  formContainer: {
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 20,
    gap: 15,
  },
  input: {
    color: Colors.light.primaryColor,
  },
  containerInfo: {
    flexDirection: "row",
    gap: 5,
  },
  title: {
    textAlign: "left",
    fontSize: 30,
    fontWeight: "400",
    color: Colors.light.primaryColor,
  },
  textInfo: {
    fontSize: 16,
    color: Colors.light.primaryColor,
  },
});
