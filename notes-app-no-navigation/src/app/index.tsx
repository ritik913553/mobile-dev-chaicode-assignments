import { NoteCard } from "@/components/NoteCard";
import { notes } from "@/data/notes";
import { useTheme } from "@/theme/ThemeProvider";
import { ThemeToggler } from "@/theme/ThemeToggler";
import { getFilterIcon } from "@/utils/icons";
import { Feather } from "@expo/vector-icons";
import NoteDetails from "@/pages/NoteDetails";
import { useRef, useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const filters = ["All", "Work", "Personal", "Fitness", "Learning"];

export default function Home() {
  const { theme, isDark } = useTheme();
  const [activeFilter, setActiveFIlter] = useState("All");
  const [notesFilteredData, setNotesFilteredData] = useState(notes);
  const [searchText, setSearchText] = useState("");
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);
  const [isNotesOpen, setIsNotesOpen] = useState<string | null>(null);

  const selectedNote = notes.find((note) => note.id === isNotesOpen);

  const applyFilters = (search: string, filter: string) => {
    let filtered = notes;

    if (filter !== "All") {
      filtered = filtered.filter((note) => note.tag === filter);
    }

    if (search.trim() !== "") {
      const lowerSearch = search.toLowerCase();
      filtered = filtered.filter(
        (note) =>
          note.title.toLowerCase().includes(lowerSearch) ||
          note.content.toLowerCase().includes(lowerSearch),
      );
    }

    setNotesFilteredData(filtered);
  };

  const handleFilterNotes = (filter: string) => {
    setActiveFIlter(filter);
    applyFilters(searchText, filter);
  };

  const handleOnchangeSearchText = (text: string) => {
    setSearchText(text);
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    debounceTimer.current = setTimeout(() => {
      applyFilters(text, activeFilter);
    }, 300);
  };

  const handleNotePress = (id: string) => {
    setIsNotesOpen(id);
  };

  const handleCloseNotes = () => {
    setIsNotesOpen(null);
  };

  return (
    <>
      {!isNotesOpen ? (
        <SafeAreaView
          style={[
            styles.container,
            { backgroundColor: theme.colors.background },
          ]}
        >
          <StatusBar
            barStyle={isDark ? "light-content" : "dark-content"}
            backgroundColor="transparent"
            translucent
          />

          {/* Header Container */}
          <View style={styles.header}>
            <View>
              <Text style={[styles.title, { color: theme.colors.text }]}>
                My Notes
              </Text>
              <Text
                style={[styles.subtitle, { color: theme.colors.textSecondary }]}
              >
                {notes.length} notes saved
              </Text>
            </View>

            <ThemeToggler />
          </View>

          {/* Mock Search Bar */}
          <View
            style={[
              styles.searchBar,
              {
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.border,
              },
            ]}
          >
            <Feather name="search" size={20} color={theme.colors.text} />
            <TextInput
              style={[styles.searchText, { color: theme.colors.textSecondary }]}
              placeholder="Search notes..."
              placeholderTextColor={theme.colors.textSecondary}
              value={searchText}
              onChangeText={handleOnchangeSearchText}
            />
          </View>

          <View style={styles.filtersWrapper}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.filtersContainer}
              style={{ flexGrow: 0, flexShrink: 0, marginBottom: 5 }}
            >
              {filters.map((item, index) => {
                const isActive = activeFilter === item;
                const iconName = getFilterIcon(item);
                return (
                  <Pressable
                    key={index}
                    onPress={() => handleFilterNotes(item)}
                    style={[
                      styles.filterChip,
                      {
                        backgroundColor: isActive
                          ? (theme.colors as any).filterActive
                          : theme.colors.surface,
                        borderColor: isActive
                          ? (theme.colors as any).filterActive
                          : theme.colors.border,
                      },
                    ]}
                  >
                    <Feather
                      name={iconName}
                      size={14}
                      color={
                        isActive
                          ? (theme.colors as any).filterActiveText
                          : theme.colors.textSecondary
                      }
                      style={{ marginRight: 6 }}
                    />
                    <Text
                      style={[
                        styles.filterChipText,
                        {
                          color: isActive
                            ? (theme.colors as any).filterActiveText
                            : theme.colors.textSecondary,
                        },
                      ]}
                    >
                      {item}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>

          {/* Notes List */}
          <FlatList
            data={notesFilteredData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <NoteCard note={item} handleNotePress={handleNotePress} />
            )}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          />
        </SafeAreaView>
      ) : (
        selectedNote && (
          <NoteDetails note={selectedNote} onClose={handleCloseNotes} />
        )
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 5,
    paddingBottom: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 14,
    marginTop: 2,
  },
  searchBar: {
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    marginHorizontal: 15,
    marginTop: 8,
    marginBottom: 20,
    paddingLeft: 16,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },

  searchText: {
    fontSize: 15,
    flex: 1,
    height: "100%",
  },
  filtersWrapper: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  filtersContainer: {
    gap: 10,
  },
  filterChip: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  filterChipText: {
    fontSize: 14,
    fontWeight: "600",
  },
  scrollContent: {
    paddingHorizontal: 15,
    paddingBottom: 60,
    paddingVertical: 15,
  },
  fab: {
    position: "absolute",
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  fabText: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "300",
    lineHeight: 34,
  },
});
