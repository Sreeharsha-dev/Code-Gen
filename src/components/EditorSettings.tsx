import React from 'react';
import { Settings } from 'lucide-react';
import { Button } from './Button';
import { useEditorStore } from '../store/editorStore';

export function EditorSettings() {
  const { settings, updateSettings } = useEditorStore();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Settings className="h-4 w-4 mr-2" />
        Settings
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-10">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Theme</label>
              <select
                value={settings.theme}
                onChange={(e) => updateSettings({ theme: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="vs-dark">Dark</option>
                <option value="light">Light</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Font Size</label>
              <input
                type="number"
                value={settings.fontSize}
                onChange={(e) => updateSettings({ fontSize: Number(e.target.value) })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Tab Size</label>
              <input
                type="number"
                value={settings.tabSize}
                onChange={(e) => updateSettings({ tabSize: Number(e.target.value) })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">Minimap</label>
              <input
                type="checkbox"
                checked={settings.minimap}
                onChange={(e) => updateSettings({ minimap: e.target.checked })}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}