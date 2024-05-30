import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import Colors from "./src/constants/Colors";

import { Provider } from "react-redux";
import { store } from "./src/store";

export default function App() {
  const isLoggedIn = false;

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {!isLoggedIn && <LoginScreen />}
        {isLoggedIn && <HomeScreen />}
      </View>
    </Provider>
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
