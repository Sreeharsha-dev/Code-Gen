import { useState } from 'react';
import { Message, CodeResponse } from '../types';
import { generateCodeWithAI } from '../services/ai';

export function useCodeGeneration() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateCode = async (prompt: string): Promise<CodeResponse> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await generateCodeWithAI(prompt);
      
      setMessages(prev => [
        ...prev,
        { role: 'user', content: prompt },
        { role: 'assistant', content: response.explanation }
      ]);

      return response;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate code');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    isLoading,
    error,
    generateCode,
  };
}