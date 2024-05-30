import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  StatusBar,
  Platform,
  Text,
} from "react-native";

const behaviorKeyboard = Platform.OS === "ios" ? "padding" : "height";
import LottieView from "lottie-react-native";
import LoginForm from "../components/LoginForm";
import Colors from "../constants/Colors";

const LoginScreen = ({ showAnimation = true }) => {
  return (
    <SafeAreaView style={styles.root}>
      <KeyboardAvoidingView style={styles.root} behavior={behaviorKeyboard}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.containerForm}>
            {showAnimation && (
              <View style={styles.header}>
                <LottieView
                  autoPlay
                  style={styles.animation}
                  source={require("../assets/animations/login.json")}
                />
              </View>
            )}
            <LoginForm />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.light.background,
  },
  header: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  containerForm: {
    flex: 1,
    paddingTop: 20,
  },
  animation: {
    width: 250,
    height: 250,
  },
});

export default LoginScreen;
