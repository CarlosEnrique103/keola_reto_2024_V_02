import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Colors from "../constants/Colors";
import { AntDesign, Octicons } from "@expo/vector-icons";
import SubsScreen from "../screens/SubsScreen";

const Tab = createBottomTabNavigator();

const HomeNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBarStyle,
          tabBarShowLabel: false,
        }}
        initialRouteName="Home"
      >
        <Tab.Screen
          name="home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabBarIcon}>
                <Octicons
                  name="home"
                  size={24}
                  color={
                    focused
                      ? Colors.light.iconBtNvFocusColor
                      : Colors.light.iconBtNvUnfocusColor
                  }
                />
                <Octicons
                  name="dot-fill"
                  size={10}
                  color={
                    focused
                      ? Colors.light.iconBtNvFocusColor
                      : Colors.light.iconBtNvUnfocusColor
                  }
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="subs"
          component={SubsScreen}
          options={{
            title: "Subscripciones",
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabBarIcon}>
                <AntDesign
                  name="wallet"
                  size={24}
                  color={
                    focused
                      ? Colors.light.iconBtNvFocusColor
                      : Colors.light.iconBtNvUnfocusColor
                  }
                />
                <Octicons
                  name="dot-fill"
                  size={10}
                  color={
                    focused
                      ? Colors.light.iconBtNvFocusColor
                      : Colors.light.iconBtNvUnfocusColor
                  }
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    paddingTop: 5,
    borderTopWidth: 0,
    elevation: 0,
  },
  tabBarIcon: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
  },
});

export default HomeNavigation;
