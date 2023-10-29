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

