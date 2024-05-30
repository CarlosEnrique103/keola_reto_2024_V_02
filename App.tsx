import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import Colors from "./src/constants/Colors";

export default function App() {
  const isLoggedIn = false;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {!isLoggedIn && <LoginScreen />}
      {isLoggedIn && <HomeScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
