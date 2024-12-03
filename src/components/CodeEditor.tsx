import React from 'react';
import Editor from '@monaco-editor/react';
import { EditorSettings } from '../types';

interface CodeEditorProps {
  code: string;
  onChange: (value: string | undefined) => void;
  settings: EditorSettings;
}

export function CodeEditor({ code, onChange, settings }: CodeEditorProps) {
  return (
    <div className="h-[600px] border rounded-lg overflow-hidden">
      <Editor
        height="100%"
        defaultLanguage={settings.language}
        language={settings.language}
        theme={settings.theme}
        value={code}
        onChange={onChange}
        options={{
          minimap: { enabled: false },
          fontSize: settings.fontSize,
          lineNumbers: 'on',
          roundedSelection: false,
          scrollBeyondLastLine: false,
          readOnly: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
}