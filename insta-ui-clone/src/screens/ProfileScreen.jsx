import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 12,
          paddingVertical: 10,
        }}
      >
        <Ionicons name="add" size={32} color={"black"} />
        <View
          style={{
            flexDirection: "row",
            gap: 25,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Text style={{ fontWeight: "500", fontSize: 20 }}>
              ritikgupta0990
            </Text>
            <Entypo name="chevron-down" size={24} color="black" />
            <View
              style={{
                width: 5,
                height: 5,
                borderRadius: 40,
                backgroundColor: "red",
              }}
            ></View>
          </View>
          <FontAwesome6 name="threads" size={24} color="black" />
          <Pressable
            onPress={() => navigation.navigate("Settings and activity")}
          >
            <Ionicons name="menu" size={32} color={"black"} />
          </Pressable>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          // justifyContent: "space-between",
          gap: 30,
          paddingHorizontal: 12,
          paddingVertical: 20,
        }}
      >
        <Image
          source={require("../../assets/profile.jpeg")}
          style={{
            width: 80,
            height: 80,
            borderRadius: 50,
          }}
        />
        <View>
          <Text style={{ fontWeight: "400", fontSize: 18 }}>Ritik Gupta</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 40,
              marginTop: 5,
            }}
          >
            <View
              style={{
                alignItems: "start",
              }}
            >
              <Text style={{ fontWeight: "600" }}>27</Text>
              <Text style={{ color: "#444" }}>posts</Text>
            </View>
            <View
              style={{
                alignItems: "start",
              }}
            >
              <Text style={{ fontWeight: "600" }}>1.6k</Text>
              <Text style={{ color: "#444" }}>followers</Text>
            </View>
            <View
              style={{
                alignItems: "start",
              }}
            >
              <Text style={{ fontWeight: "600" }}>126</Text>
              <Text style={{ color: "#444" }}>following</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ paddingHorizontal: 12 }}>
        <Text>Software Developer</Text>
        <Text>Introvert</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",

            gap: 4,
          }}
        >
          <Feather name="link" size={12} color="blue" />
          <Text
            style={{
              color: "blue",
            }}
          >
            ritikg.space
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
