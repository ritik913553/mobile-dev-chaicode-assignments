import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import React, { useState, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useVideoPlayer, VideoView } from "expo-video";
import { useEvent } from "expo";

const ReelComponentHomePage = ({ data }) => {
  // State for interactive features
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [localLikes, setLocalLikes] = useState(data.likes || 0);
  const [lastTap, setLastTap] = useState(0);
  const [overlayIcon, setOverlayIcon] = useState(null); // 'play' | 'pause'

  // Animation values for double tap heart
  const heartFadeAnim = useRef(new Animated.Value(0)).current;
  const heartScaleAnim = useRef(new Animated.Value(0.5)).current;

  // Animation values for play/pause indicator
  const playPauseFade = useRef(new Animated.Value(0)).current;
  const playPauseScale = useRef(new Animated.Value(0.6)).current;

  // Initialize expo-video player
  const player = useVideoPlayer(data.video, (player) => {
    player.loop = true;
    player.play();
    player.muted = true; // Muted by default like Instagram home feed
  });

  // Keep track of the player's reactive events
  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });
  const { muted } = useEvent(player, "mutedChange", {
    muted: player.muted,
  });

  // Handle double-tap to like and single-tap to play/pause
  const handleVideoTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;

    if (now - lastTap < DOUBLE_PRESS_DELAY) {
      // Double tap detected: Like!
      if (!liked) {
        setLiked(true);
        setLocalLikes((prev) => prev + 1);
      }
      triggerHeartAnimation();
    } else {
      // Single tap: Toggle play/pause
      if (player.playing) {
        player.pause();
        setOverlayIcon("pause");
      } else {
        player.play();
        setOverlayIcon("play");
      }
      triggerPlayPauseAnimation();
    }
    setLastTap(now);
  };

  const toggleLike = () => {
    if (liked) {
      setLiked(false);
      setLocalLikes((prev) => prev - 1);
    } else {
      setLiked(true);
      setLocalLikes((prev) => prev + 1);
    }
  };

  const toggleMute = () => {
    player.muted = !player.muted;
  };

  const triggerHeartAnimation = () => {
    heartFadeAnim.setValue(0);
    heartScaleAnim.setValue(0.5);

    Animated.parallel([
      Animated.timing(heartFadeAnim, {
        toValue: 1,
        duration: 180,
        useNativeDriver: true,
      }),
      Animated.spring(heartScaleAnim, {
        toValue: 1.2,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setTimeout(() => {
        Animated.timing(heartFadeAnim, {
          toValue: 0,
          duration: 180,
          useNativeDriver: true,
        }).start();
      }, 500);
    });
  };

  const triggerPlayPauseAnimation = () => {
    playPauseFade.setValue(1);
    playPauseScale.setValue(0.6);

    Animated.parallel([
      Animated.spring(playPauseScale, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setTimeout(() => {
        Animated.timing(playPauseFade, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start();
      }, 350);
    });
  };

  // Helper to format likes count nicely with commas
  const formatLikes = (count) => {
    return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <View style={styles.container}>
      {/* 1. Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={{ uri: data.profileImage }} style={styles.avatar} />
          <Text style={styles.username}>{data.username}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <Ionicons name="ellipsis-horizontal" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* 2. Video Player Body */}
      <TouchableWithoutFeedback onPress={handleVideoTap}>
        <View style={styles.videoContainer}>
          <VideoView
            player={player}
            style={styles.video}
            nativeControls={false}
            contentFit="cover"
            surfaceType="textureView"
            fullscreenOptions={{ enable: false }}
          />

          {/* Double Tap Heart Overlay */}
          <Animated.View
            style={[
              styles.centerOverlay,
              {
                opacity: heartFadeAnim,
                transform: [{ scale: heartScaleAnim }],
              },
            ]}
          >
            <Ionicons name="heart" size={80} color="white" />
          </Animated.View>

          {/* Single Tap Play/Pause Feedback Overlay */}
          <Animated.View
            style={[
              styles.centerOverlay,
              styles.feedbackCircle,
              {
                opacity: playPauseFade,
                transform: [{ scale: playPauseScale }],
              },
            ]}
          >
            <Ionicons
              name={overlayIcon === "play" ? "play" : "pause"}
              size={36}
              color="white"
            />
          </Animated.View>

          {/* Volume Control Button overlay (Bottom Right) */}
          <TouchableOpacity
            style={styles.volumeButton}
            onPress={toggleMute}
            activeOpacity={0.8}
          >
            <Ionicons
              name={muted ? "volume-mute" : "volume-medium"}
              size={18}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>

      {/* 3. Action Bar (Like, Comment, Share, Save) */}
      <View style={styles.actionsRow}>
        <View style={styles.actionsLeft}>
          <TouchableOpacity
            onPress={toggleLike}
            activeOpacity={0.7}
            style={styles.actionButton}
          >
            <Ionicons
              name={liked ? "heart" : "heart-outline"}
              size={26}
              color={liked ? "#ff3b30" : "black"}
            />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} style={styles.actionButton}>
            <Ionicons name="chatbubble-outline" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} style={styles.actionButton}>
            <Ionicons name="paper-plane-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => setSaved(!saved)}
          activeOpacity={0.7}
          style={styles.actionButton}
        >
          <Ionicons
            name={saved ? "bookmark" : "bookmark-outline"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>

      {/* 4. Text/Metadata Section */}
      <View style={styles.metadataContainer}>
        {/* Likes Count */}
        <Text style={styles.likesText}>{formatLikes(localLikes)} likes</Text>

        {/* Caption */}
        <Text style={styles.captionContainer}>
          <Text style={styles.boldText}>{data.username} </Text>
          <Text style={styles.captionText}>{data.caption}</Text>
        </Text>

        {/* Comments Link */}
        {data.comments && (
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={styles.commentsLink}>
              View all {formatLikes(data.comments)} comments
            </Text>
          </TouchableOpacity>
        )}

        {/* Music Tag */}
        {data.music && (
          <View style={styles.musicContainer}>
            <Ionicons name="musical-notes-outline" size={14} color="#737373" />
            <Text style={styles.musicText} numberOfLines={1}>
              {data.music}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default ReelComponentHomePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginBottom: 12,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
    backgroundColor: "#f0f0f0",
  },
  username: {
    fontWeight: "600",
    fontSize: 13,
    color: "#262626",
  },
  videoContainer: {
    width: "100%",
    aspectRatio: 4 / 5,
    backgroundColor: "black",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  centerOverlay: {
    position: "absolute",
    zIndex: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  feedbackCircle: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  volumeButton: {
    position: "absolute",
    bottom: 12,
    right: 12,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5,
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  actionsLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionButton: {
    paddingHorizontal: 6,
  },
  metadataContainer: {
    paddingHorizontal: 14,
  },
  likesText: {
    fontWeight: "700",
    fontSize: 13,
    color: "#262626",
    marginBottom: 4,
  },
  captionContainer: {
    fontSize: 13,
    lineHeight: 18,
    color: "#262626",
    marginBottom: 4,
  },
  boldText: {
    fontWeight: "700",
  },
  captionText: {
    fontWeight: "400",
  },
  commentsLink: {
    color: "#737373",
    fontSize: 13,
    marginBottom: 6,
    marginTop: 2,
  },
  musicContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: "flex-start",
    marginTop: 4,
    maxWidth: "80%",
  },
  musicText: {
    fontSize: 11,
    color: "#737373",
    marginLeft: 4,
    fontWeight: "500",
  },
});
