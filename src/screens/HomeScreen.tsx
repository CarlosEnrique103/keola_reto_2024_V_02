import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/Colors";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Subs</Text>
    </View>
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
});
