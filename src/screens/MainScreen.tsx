import { StyleSheet, StatusBar, View, Text } from "react-native";
import useAuthController from "../view-controllers/useAuthController";
import LoginScreen from "./LoginScreen";
import Colors from "../constants/Colors";
import React, { useEffect, useState } from "react";
import HomeNavigation from "../navigation/HomeNavigation";
import HomeScreen from "./HomeScreen";

const MainScreen = () => {
  const { data } = useAuthController();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (data.access_Token) {
      setIsLoggedIn(true);
    }
  }, [data]);

  return (
    <React.Fragment>
      {!isLoggedIn && <LoginScreen />}
      {isLoggedIn && <HomeNavigation />}
    </React.Fragment>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
