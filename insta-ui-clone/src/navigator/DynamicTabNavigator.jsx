import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";
import OnboardScreen from "../screens/OnboardScreen";
import MessagesScreen from "../screens/MessagesScreen";
import ReelsScreen from "../screens/ReelsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsAndActivity from "../screens/ProfileScreens/SettingsAndActivity";
import SavedScreen from "../screens/ProfileScreens/SavedScreen";
import ArchiveScreen from "../screens/ProfileScreens/ArchiveScreen";
import AccountPrivacy from "../screens/ProfileScreens/AccountPrivacy";
import NotificationsScreen from "../screens/ProfileScreens/NotificationsScreen";
import YourActivity from "../screens/ProfileScreens/YourActivity";

const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 90,
          paddingBottom: 8,
        },
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "black",
        tabBarActiveTintColor: "black",
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "ProfilePage") {
            return (
              <View>
                <Image
                  source={require("../../assets/profile.jpeg")}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 50,
                    borderWidth: focused ? 2 : 0,
                    borderColor: "black",
                  }}
                />
              </View>
            );
          }

          const iconMap = {
            Home: focused ? "home" : "home-outline",
            Search: focused ? "search" : "search-outline",
            Reels: focused ? "play-circle" : "play-circle-outline",
            Messages: focused ? "chatbubble" : "chatbubble-outline",
          };

          return (
            <Ionicons name={iconMap[route.name]} size={size} color={"black"} />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Reels" component={ReelsScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen
        name="Messages"
        options={{
          tabBarBadge: 13,
          tabBarBadgeStyle: {
            backgroundColor: "black",
            borderWidth: 1,
            borderColor: "white",
            color: "white",
            fontSize: 11,
            fontWeight: "bold",
            minWidth: 18,
            height: 18,
            borderRadius: 9,
            paddingHorizontal: 4,
            top: -3,
            right: 0,
          },
        }}
        component={MessagesScreen}
      />
      <Tab.Screen
        name="ProfilePage"
        options={{
          headerShown: false,
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

export default function DynamicTabNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="MainTabs"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Settings and activity"
          component={SettingsAndActivity}
        />
        <RootStack.Screen name="Saved" component={SavedScreen} />
        <RootStack.Screen name="Archive" component={ArchiveScreen} />
        <RootStack.Screen name="Account Privacy" component={AccountPrivacy} />
        <RootStack.Screen name="Notifications" component={NotificationsScreen} />
        <RootStack.Screen name="Your Activity" component={YourActivity} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  profileCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
});
