import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { EditorSettings, SavedCode } from '../types';

interface EditorStore {
  settings: EditorSettings;
  savedCodes: SavedCode[];
  updateSettings: (settings: Partial<EditorSettings>) => void;
  saveCode: (code: SavedCode) => void;
  deleteCode: (id: string) => void;
}

export const useEditorStore = create<EditorStore>()(
  persist(
    (set) => ({
      settings: {
        theme: 'vs-dark',
        fontSize: 14,
        language: 'javascript',
        tabSize: 2,
        minimap: false,
        wordWrap: 'on',
      },
      savedCodes: [],
      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),
      saveCode: (code) =>
        set((state) => ({
          savedCodes: [...state.savedCodes, code],
        })),
      deleteCode: (id) =>
        set((state) => ({
          savedCodes: state.savedCodes.filter((code) => code.id !== id),
        })),
    }),
    {
      name: 'editor-storage',
    }
  )
);