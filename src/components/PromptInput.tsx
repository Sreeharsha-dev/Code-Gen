import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from './Button';

interface PromptInputProps {
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
}

export function PromptInput({ onSubmit, isLoading }: PromptInputProps) {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSubmit(prompt.trim());
      setPrompt('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe the code you want to generate..."
        className="flex-1 rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        disabled={isLoading}
      />
      <Button type="submit" disabled={isLoading || !prompt.trim()}>
        <Send className="h-4 w-4 mr-2" />
        {isLoading ? 'Generating...' : 'Generate'}
      </Button>
    </form>
  );
}