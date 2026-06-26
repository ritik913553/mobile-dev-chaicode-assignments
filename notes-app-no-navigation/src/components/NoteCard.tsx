import { useTheme } from "@/theme/ThemeProvider";
import { Note } from "@/types";
import { getTagIcon } from "@/utils/icons";
import { Feather } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const NoteCard = ({
  note,
  handleNotePress,
}: {
  note: Note;
  handleNotePress: (id: string) => void;
}) => {
  const { theme } = useTheme();
  const tColor = (theme.colors as any).tag;
  const iconName = getTagIcon(note.tag);

  return (
    <Pressable
      style={[
        styles.noteCard,
        {
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.border,
        },
      ]}
      onPress={() => handleNotePress(note.id)}
    >
      <View style={styles.cardHeader}>
        <View style={[styles.tagBadge, { backgroundColor: tColor + "15" }]}>
          <Feather
            name={iconName}
            size={12}
            color={tColor}
            style={{ marginRight: 4 }}
          />
          <Text style={[styles.tagText, { color: tColor }]}>{note.tag}</Text>
        </View>
        <Text style={[styles.cardDate, { color: theme.colors.textSecondary }]}>
          {note.date}
        </Text>
      </View>
      <Text style={[styles.cardTitle, { color: theme.colors.text }]}>
        {note.title}
      </Text>
      <Text
        style={[styles.cardBody, { color: theme.colors.textSecondary }]}
        numberOfLines={2}
      >
        {note.content}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  noteCard: {
    borderRadius: 8,
    padding: 15,
    borderWidth: 1,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 6,
    elevation: 1,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  tagBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  tagText: {
    fontSize: 12,
    fontWeight: "600",
  },
  cardDate: {
    fontSize: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 6,
  },
  cardBody: {
    fontSize: 14,
    lineHeight: 20,
  },
});
