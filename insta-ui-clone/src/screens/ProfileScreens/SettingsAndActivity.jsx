import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Fontisto from "@expo/vector-icons/Fontisto";
import Octicons from "@expo/vector-icons/Octicons";

const dataOfNavInSettings = [
  {
    id: 1,
    title: "Saved",
    icon: <Feather name="bookmark" size={22} color="black" />,
  },
  {
    id: 2,
    title: "Archive",
    icon: <FontAwesome6 name="clock-rotate-left" size={22} color="black" />,
  },
  {
    id: 3,
    title: "Account Privacy",
    icon: <Feather name="lock" size={24} color="black" />,
  },
  {
    id: 4,
    title: "Notifications",
    icon: <Fontisto name="bell" size={22} color="black" />,
  },
  {
    id: 5,
    title: "Your Activity",
    icon: <Feather name="activity" size={22} color="black" />,
  },
];

const SettingsAndActivity = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 12,
      }}
    >
      <Text>How you use Instagram</Text>
      <View style={{ gap: 30, marginTop: 30 }}>
        {dataOfNavInSettings.map((item) => (
          <Pressable
            onPress={() => navigation.navigate(item.title)}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              // backgroundColor: "red",
              padding: 5,
            }}
            key={item.id}
          >
            <View
              style={{ flexDirection: "row", gap: 20, alignItems: "center" }}
            >
              <Text>{item.icon}</Text>
              <Text>{item.title}</Text>
            </View>
            <Octicons name="chevron-right" size={22} color="black" />
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default SettingsAndActivity;

const styles = StyleSheet.create({});
