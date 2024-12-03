import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Download, Share2, Settings as SettingsIcon } from 'lucide-react';
import { CodeEditor } from '../components/CodeEditor';
import { PromptInput } from '../components/PromptInput';
import { ChatMessages } from '../components/ChatMessages';
import { Button } from '../components/Button';
import { EditorSettings } from '../components/EditorSettings';
import { ShareButton } from '../components/ShareButton';
import { SavedCodesList } from '../components/SavedCodesList';
import { useCodeGeneration } from '../hooks/useCodeGeneration';
import { useEditorStore } from '../store/editorStore';
import { nanoid } from 'nanoid';

export function EditorPage() {
  const { generateCode, messages, isLoading, error } = useCodeGeneration();
  const [code, setCode] = useState('// Start coding here...');
  const { settings, saveCode } = useEditorStore();
  const [showSavedCodes, setShowSavedCodes] = useState(false);

  const handlePromptSubmit = async (prompt: string) => {
    try {
      const response = await generateCode(prompt);
      setCode(response.code);
    } catch (err) {
      toast.error('Failed to generate code');
    }
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'generated-code.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSaveCode = () => {
    const savedCode = {
      id: nanoid(),
      title: 'Generated Code',
      code,
      language: settings.language,
      createdAt: Date.now(),
    };
    saveCode(savedCode);
    toast.success('Code saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">AI Code Generator</h2>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSavedCodes(!showSavedCodes)}
              >
                Saved Codes
              </Button>
              <EditorSettings />
              <ShareButton code={code} />
              <Button variant="outline" size="sm" onClick={handleDownload}>
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              <Button variant="outline" size="sm" onClick={handleSaveCode}>
                Save
              </Button>
            </div>
          </div>

          <div className="flex flex-col h-[calc(100vh-12rem)]">
            <div className="p-4">
              <PromptInput onSubmit={handlePromptSubmit} isLoading={isLoading} />
            </div>
            <div className="flex-1 flex">
              <div className="w-1/2 border-r border-gray-200 p-4 overflow-y-auto">
                {showSavedCodes ? (
                  <SavedCodesList />
                ) : (
                  <ChatMessages messages={messages} />
                )}
              </div>
              <div className="w-1/2 p-4 flex flex-col">
                <CodeEditor
                  code={code}
                  onChange={(value) => setCode(value || '')}
                  settings={settings}
                />
                <div className="mt-4 bg-gray-50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Preview</h3>
                  <iframe
                    title="Code Preview"
                    srcDoc={`
                      <!DOCTYPE html>
                      <html>
                        <head>
                          <style>body { margin: 0; }</style>
                        </head>
                        <body>
                          <script>${code}</script>
                        </body>
                      </html>
                    `}
                    className="w-full h-[200px] border rounded"
                    sandbox="allow-scripts"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}