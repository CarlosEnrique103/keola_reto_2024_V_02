import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/Colors";

const SubsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SubsScreen</Text>
    </View>
  );
};

export default SubsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
