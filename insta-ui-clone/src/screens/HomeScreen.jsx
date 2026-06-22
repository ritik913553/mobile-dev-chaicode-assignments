import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import StoryIcon from "../components/StoryIcon";
import ReelComponentHomePage from "../components/ReelComponentHomePage";
import { SafeAreaView } from "react-native-safe-area-context";

const storyData = [
  {
    id: "1",
    image: "https://picsum.photos/400/700?random=1",
    userId: "Your Story",
  },
  {
    id: "2",
    image: "https://picsum.photos/400/700?random=2",
    userId: "mike_adventures",
  },
  {
    id: "3",
    image: "https://picsum.photos/400/700?random=3",
    userId: "emily_wild",
  },
  {
    id: "4",
    image: "https://picsum.photos/400/700?random=4",
    userId: "alex_travels",
  },
  {
    id: "5",
    image: "https://picsum.photos/400/700?random=5",
    userId: "luna_creative",
  },
  {
    id: "6",
    image: "https://picsum.photos/400/700?random=6",
    userId: "max_fitness",
  },
  {
    id: "7",
    image: "https://picsum.photos/400/700?random=7",
    userId: "max_fitness",
  },
  {
    id: "8",
    image: "https://picsum.photos/400/700?random=8",
    userId: "max_fitness",
  },
];
const reelData = [
  {
    id: "1",
    username: "@sofia_martinez",
    profileImage: "https://i.pravatar.cc/150?img=10",
    video: "https://cdn.pixabay.com/video/2025/07/20/292430_large.mp4",
    likes: 15234,
    formattedLikes: "15.2K",
    comments: 1234,
    formattedComments: "1.2K",
    reposts: 456,
    caption:
      "Morning routine that changed my life ✨🧘‍♀️ #wellness #morningroutine #selfcare",
    music: "Golden Hour - JVKE 🎵",
  },
  {
    id: "2",
    username: "@jordan_explores",
    profileImage: "https://i.pravatar.cc/150?img=20",
    video: "https://cdn.pixabay.com/video/2024/06/02/215050_large.mp4",
    likes: 28431,
    formattedLikes: "28.4K",
    comments: 2134,
    formattedComments: "2.1K",
    reposts: 789,
    caption:
      "Hidden waterfall in Costa Rica 🇨🇷💧 #nature #waterfall #costarica",
    music: "Watermelon Sugar - Harry Styles 🎵",
  },
  {
    id: "3",
    username: "@avery_designs",
    profileImage: "https://i.pravatar.cc/150?img=30",
    video:
      "https://cdn.pixabay.com/video/2022/07/10/123664-728698002_large.mp4",
    likes: 9456,
    formattedLikes: "9.5K",
    comments: 876,
    formattedComments: "876",
    reposts: 345,
    caption:
      "Art process: creating magic from chaos 🎨✨ #art #painting #artist",
    music: "Lovely - Billie Eilish 🎵",
  },
  {
    id: "4",
    username: "@riley_adventures",
    profileImage: "https://i.pravatar.cc/150?img=40",
    video: "https://cdn.pixabay.com/video/2024/08/15/226609_large.mp4",
    likes: 12678,
    formattedLikes: "12.7K",
    comments: 1567,
    formattedComments: "1.6K",
    reposts: 567,
    caption: "Skiing in the Swiss Alps 🏔️⛷️ #skiing #switzerland #winter",
    music: "Wake Me Up - Avicii 🎵",
  },
];

const HomeScreen = () => {
  const handleStoryPress = (userId) => {
    console.log(`Story tapped: ${userId}`);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <ScrollView>
        <View
          style={{
            height: "auto",
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "flex-center",
            justifyContent: "space-between",
            paddingHorizontal: 15,
            paddingBottom: 5,
            paddingVertical: 10,
          }}
        >
          <Ionicons name="add" size={30} color="black" />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              fontStyle: "italic",
              paddingBottom: 10,
              fontFamily: "serif",
            }}
          >
            Instagram
          </Text>
          <Ionicons name="heart-outline" size={30} color="black" />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flexGrow: 0 }}
          contentContainerStyle={{ paddingHorizontal: 10 }}
        >
          {storyData.map((item) => (
            <StoryIcon
              key={item.id}
              data={item}
              onPress={() => handleStoryPress(item.userId)}
            />
          ))}
        </ScrollView>
        <View
          style={{
            flex: 1,
            gap: 5,
            marginTop: 15,
          }}
        >
          {reelData.map((item, index) => (
            <ReelComponentHomePage key={index} data={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
