import { StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { useTheme } from "./ThemeProvider";

export function ThemeToggler() {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={toggleTheme}
      style={[
        styles.button,
        {
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.border,
        },
      ]}
    >
      <Feather
        name={isDark ? "sun" : "moon"}
        size={20}
        color={theme.colors.text}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
});
