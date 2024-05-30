import { StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";
import { useEffect } from "react";
import useSubsController from "../view-controllers/useSubsController";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";

const HomeScreen = () => {
  const { fetchSubs } = useSubsController();

  useEffect(() => {
    fetchSubs();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <LottieView
        autoPlay
        style={styles.animation}
        source={require("../assets/animations/welcome.json")}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  animation: {
    width: 300,
    height: 300,
  },
});
