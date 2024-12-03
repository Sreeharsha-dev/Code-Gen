export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface CodeResponse {
  code: string;
  explanation: string;
}

export interface EditorSettings {
  theme: string;
  fontSize: number;
  language: string;
  tabSize: number;
  minimap: boolean;
  wordWrap: 'on' | 'off';
}

export interface SavedCode {
  id: string;
  title: string;
  code: string;
  language: string;
  createdAt: number;
}