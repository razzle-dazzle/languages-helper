export type LanguageDefinition = {
  ca: string;
  es: string;
  en: string;
}
export type Verbs = {
  id: string;
  forms: {
    infinitive: LanguageDefinition;
    gerund: LanguageDefinition;
    participle: LanguageDefinition;
  };
  indicative: {
    present: string[];
    imperfect: string[];
    indefinite: string[];
    periphrastic: string[];
    perfect: string[];
    plucuam: string[];
    future: string[];
    conditional: string[];
  },
  imperative: {
    present: string[];
  },
  subjunctive: {
    present: string[];
    imperfect: string[];
    perfect: string[];
    plucuam: string[];
  }
};

/**
 * First: ends in 'ar' or 'ar-se'
 * Second: ends in 'er' or 're' or "re's" or "ur" (fer, caure, distreure's, dur)
 * Third: ends in 'ir' or 'ir-se' or 'lir' (existir, excel·lir, divertir-se)
 */
export type VerbForm = 'first' | 'second' | 'third'
/**
 * More types here: https://www.verbs.cat/en/categories/2-second-conjugation.html
 */
export type VerbType = 'pure' | 'inchoative' | 'pronominal' | 'regular' | 'irregular';
