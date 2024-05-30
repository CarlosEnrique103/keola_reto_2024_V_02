import { Pressable, StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

type ButtonProps = {
  title: string;
  onPress: () => void;
};

const Button = ({ title, onPress }: ButtonProps) => {
  let typeBgStyles = styles.primaryBg;
  let typeTextStyles = styles.primaryText;

  return (
    <Pressable style={[styles.root, typeBgStyles]} onPress={onPress}>
      <Text style={typeTextStyles}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    padding: 20,
    borderRadius: 15,
  },
  primaryBg: {
    backgroundColor: Colors.light.primaryColor,
  },
  secondaryBg: {
    borderWidth: 2,
    borderColor: Colors.light.primaryColor,
  },
  primaryText: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  secondaryText: {
    color: Colors.light.primaryColor,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});
