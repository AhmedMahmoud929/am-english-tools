export interface AssessFeedback {
  score: number;
  feedback: string;
  correctedVersion?: string;
}

export interface DetailedWord {
  definition: string;
  examples: string[];
  synonyms: string[];
  antonyms: string[];
}

export type LanguageOptions = "en" | "ar";
