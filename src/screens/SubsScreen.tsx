import { StyleSheet, View, Text, FlatList } from "react-native";
import Colors from "../constants/Colors";
import useSubsController from "../view-controllers/useSubsController";
import { SafeAreaView } from "react-native-safe-area-context";

type SubItemProps = {
  title: string;
};

const SubItem = ({ title }: SubItemProps) => {
  let isActive = false;

  if (title.includes("Activo")) {
    isActive = true;
  }
  return (
    <View style={styles.sub}>
      <View style={(styles.subsHeader, isActive ? styles.active : {})}>
        <Text>{title}</Text>
      </View>
      <View>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsa
          alias repellat tenetur enim deserunt, similique veritatis minima
          molestias magni labore? Eos delectus cupiditate illo suscipit
          praesentium voluptatum nisi beatae!
        </Text>
      </View>
    </View>
  );
};

const SubsScreen = () => {
  const { data } = useSubsController();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <SubItem title={item.statusName} />}
        horizontal={false}
      />
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
  list: {
    flex: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  sub: {
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
    shadowColor: "#000",
    elevation: 5,
    marginBottom: 10,
    gap: 10,
    borderWidth: 1,
    borderColor: "#AEAEAF",
    padding: 5,
  },
  subsHeader: {
    height: 50,
    backgroundColor: "#AEAEAF",
    borderWidth: 2,
    borderColor: "#AEAEAF",
    padding: 5,
  },
  active: {
    backgroundColor: "#8BC34B",
  },
});
