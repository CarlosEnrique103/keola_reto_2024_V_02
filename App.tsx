import { StyleSheet } from "react-native";
import Colors from "./src/constants/Colors";
import { Provider } from "react-redux";
import { store } from "./src/store";
import MainScreen from "./src/screens/MainScreen";

export default function App() {
  return (
    <Provider store={store}>
      <MainScreen />
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
