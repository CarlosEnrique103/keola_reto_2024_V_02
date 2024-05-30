import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/Colors";
import useSubsController from "../view-controllers/useSubsController";
import { SafeAreaView } from "react-native-safe-area-context";

const SubsScreen = () => {
  const { data } = useSubsController();

  return (
    <SafeAreaView style={styles.container}>
      <Text>{JSON.stringify(data)}</Text>
    </SafeAreaView>
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
