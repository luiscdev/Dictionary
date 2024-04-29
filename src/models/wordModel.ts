export interface WordResultState {
  status: string,
  error: null | string,
  wordResult: WordResult,
}

export interface WordResult {
  word?: string
  phonetic?: string
  phonetics?: Phonetic[]
  origin?: string
  meanings?: Meaning[]
}

export interface Meaning {
  partOfSpeech?: string
  definitions?: Definition[]
}

export interface Definition {
  definition?: string
  example?: string
  synonyms?: []
  antonyms?: []
}

export interface Phonetic {
  text?: string
  audio?: string
}
