import React from 'react';
import { Trash2 } from 'lucide-react';
import { useEditorStore } from '../store/editorStore';
import { Button } from './Button';

export function SavedCodesList() {
  const { savedCodes, deleteCode } = useEditorStore();

  if (savedCodes.length === 0) {
    return (
      <div className="text-center text-gray-500 py-4">
        No saved code snippets yet
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {savedCodes.map((code) => (
        <div
          key={code.id}
          className="flex items-center justify-between p-3 bg-white rounded-lg shadow"
        >
          <div>
            <h3 className="font-medium text-gray-900">{code.title}</h3>
            <p className="text-sm text-gray-500">
              {new Date(code.createdAt).toLocaleDateString()}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => deleteCode(code.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}