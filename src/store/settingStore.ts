import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsState {
    theme: 'light' | 'dark'; // Current theme
    language: string; // Current language
    setTheme: (theme: 'light' | 'dark') => void; // Action to update theme
    setLanguage: (language: string) => void; // Action to update language
}

export const useSettingsStore = create(
    persist<SettingsState>(
        (set) => ({
            theme: 'light', // Default theme
            language: 'en', // Default language
            setTheme: (theme) => set({ theme }),
            setLanguage: (language) => set({ language }),
        }),
        {
            name: 'settings-storage', // Key for localStorage
        }
    )
);
