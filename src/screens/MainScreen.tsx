import { StyleSheet, StatusBar, View, Text } from "react-native";
import useAuthController from "../view-controllers/useAuthController";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import Colors from "../constants/Colors";
import { useEffect, useState } from "react";

const MainScreen = () => {
  const { data } = useAuthController();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (data.access_Token) {
      setIsLoggedIn(true);
    }
  }, [data]);

  return (
    <View style={styles.container}>
      {!isLoggedIn && <LoginScreen />}
      {isLoggedIn && <HomeScreen />}
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
