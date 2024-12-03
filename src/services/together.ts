import { CodeResponse } from '../types';

const API_KEY = import.meta.env.VITE_TOGETHER_API_KEY;
const API_URL = 'https://api.together.xyz/inference';

export async function generateCodeWithTogether(prompt: string): Promise<CodeResponse> {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'codellama/CodeLlama-34b-Instruct-hf',
        prompt: `You are an expert programmer. Generate clean, well-documented code based on this request: ${prompt}. Include explanations of the code.`,
        max_tokens: 2000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate code');
    }

    const data = await response.json();
    const content = data.output.choices[0].text;
    
    const codeMatch = content.match(/```[\s\S]*?\n([\s\S]*?)```/);
    const code = codeMatch ? codeMatch[1] : '';
    const explanation = content.replace(/```[\s\S]*?```/g, '').trim();

    return {
      code,
      explanation
    };
  } catch (error) {
    console.error('Error generating code:', error);
    throw new Error('Failed to generate code');
  }
}