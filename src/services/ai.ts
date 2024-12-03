import { CodeResponse } from '../types';
import { generateCodeWithTogether } from './together';

export async function generateCodeWithAI(prompt: string): Promise<CodeResponse> {
  return generateCodeWithTogether(prompt);
}