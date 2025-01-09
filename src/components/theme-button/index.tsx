"use client";

import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { Moon, Sun } from "lucide-react";

export function ThemeButton() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      variant="outline"
      size="input-sm"
      aria-label="Change theme"
      onClick={toggleColorScheme}
    >
      {colorScheme == "dark" ? (
        <Moon size={16} color="#38d9a9" strokeWidth={2} />
      ) : (
        <Sun size={16} color="#38d9a9" strokeWidth={2} />
      )}
    </ActionIcon>
  );
}
