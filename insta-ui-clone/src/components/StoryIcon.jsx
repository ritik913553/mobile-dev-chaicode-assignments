import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const StoryIcon = ({ data, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.storyWrapper}>
        <View
          style={[styles.storyBorder, data.id === "1" && styles.addStoryBorder]}
        >
          <View style={styles.imageContainer}>
            <Image source={{ uri: data.image }} style={styles.image} />
          </View>
        </View>
        {data.id === "1" && (
          <View style={styles.addButtonContainer}>
            <View style={styles.addButton}>
              <Ionicons name="add" size={20} color="white" />
            </View>
          </View>
        )}
      </View>
      <Text style={styles.username} numberOfLines={1}>
        {data.id === "1" ? "Your Story" : data.userId}
      </Text>
    </TouchableOpacity>
  );
};

export default StoryIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 6,
    width: 80,
  },
  storyWrapper: {
    position: "relative",
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  storyBorder: {
    height: 76,
    width: 76,
    borderRadius: 38,
    borderWidth: 2.5,
    borderColor: "#ff3b30",
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  addStoryBorder: {
    borderColor: "#0095f6", // Different color for add story
  },
  imageContainer: {
    height: 68,
    width: 68,
    borderRadius: 34,
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
  },
  image: {
    height: 68,
    width: 68,
    resizeMode: "cover",
  },
  addButtonContainer: {
    position: "absolute",
    bottom: -2,
    right: -2,
    zIndex: 999,
  },
  addButton: {
    backgroundColor: "#0095f6",
    borderRadius: 14,
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  username: {
    fontSize: 11,
    color: "#262626",
    marginTop: 4,
    maxWidth: 75,
    textAlign: "center",
  },
});
