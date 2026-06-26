import { useTheme } from "@/theme/ThemeProvider";
import { Note } from "@/types";
import { Feather } from "@expo/vector-icons";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface NoteDetailsProps {
  note: Note;
  onClose: () => void;
}

export default function NoteDetails({ note, onClose }: NoteDetailsProps) {
  const { theme, isDark } = useTheme();
  const insets = useSafeAreaInsets();

  const lightHeader = require("../../assets/light-header.png");
  const darkHeader = require("../../assets/dark-header.png");
  const headerImage = isDark ? darkHeader : lightHeader;

  // Let's format the date and update display
  const dateText = note.date;

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
        backgroundColor="transparent"
        translucent
      />

      {/* Wavy Header Image Background (Fixed) */}
      <ImageBackground
        source={headerImage}
        style={[styles.headerBackground, { height: 210 + insets.top }]}
        resizeMode="cover"
      >
        {/* Navigation Action Buttons Row */}
        <View style={[styles.actionRow, { paddingTop: insets.top + 10 }]}>
          {/* Back Button */}
          <Pressable
            onPress={onClose}
            style={({ pressed }) => [
              styles.iconButton,
              {
                backgroundColor: isDark
                  ? "rgba(16, 23, 32, 0.6)"
                  : "rgba(255, 255, 255, 0.75)",
                borderColor: theme.colors.border,
                opacity: pressed ? 0.8 : 1,
              },
            ]}
          >
            <Feather name="arrow-left" size={20} color={theme.colors.text} />
          </Pressable>

          {/* Edit Button */}
          <Pressable
            style={({ pressed }) => [
              styles.editButton,
              {
                backgroundColor: isDark
                  ? "rgba(16, 23, 32, 0.6)"
                  : "rgba(255, 255, 255, 0.75)",
                borderColor: theme.colors.border,
                opacity: pressed ? 0.8 : 1,
              },
            ]}
          >
            <Feather name="edit-3" size={15} color={theme.colors.primary} />
            <Text style={[styles.editButtonText, { color: theme.colors.text }]}>
              Edit
            </Text>
          </Pressable>
        </View>

        {/* Title and Metadata Fixed Container */}
        <View style={styles.headerTitleContainer}>
          {/* Title */}
          <Text style={[styles.title, { color: theme.colors.text }]}>
            {note.title}
          </Text>

          {/* Metadata info */}
          <View style={styles.metadataRow}>
            <Feather
              name="calendar"
              size={15}
              color={theme.colors.textSecondary}
              style={styles.metaIcon}
            />
            <Text
              style={[styles.metadataText, { color: theme.colors.textSecondary }]}
            >
              {dateText} • Updated 2 hours ago
            </Text>
          </View>
        </View>
      </ImageBackground>

      {/* Note Content (Scrollable) */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 40 },
        ]}
      >
        {/* Divider */}
        <View
          style={[styles.divider, { backgroundColor: theme.colors.border }]}
        />

        {/* Note Body Text */}
        <Text style={[styles.bodyText, { color: theme.colors.text }]}>
          {note.content}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBackground: {
    width: "100%",
    justifyContent: "space-between",
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  editButton: {
    height: 36,
    paddingHorizontal: 16,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  editButtonText: {
    fontSize: 15,
    fontWeight: "600",
    marginLeft: 6,
  },
  headerTitleContainer: {
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: -0.5,
    lineHeight: 36,
    marginBottom: 8,
  },
  metadataRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  metaIcon: {
    marginRight: 6,
  },
  metadataText: {
    fontSize: 14,
    fontWeight: "500",
  },
  divider: {
    height: 1,
    width: "100%",
    marginBottom: 20,
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "400",
    letterSpacing: 0.2,
  },
});
