import { Verbs } from './verbs.model';

export const tenses: Verbs = {
  id: 'tenses-CA',
  forms: {
    infinitive: {
      ca: '(Jo) toco la guitarra',
      es: '(Yo) toco la guitarra',
      en: 'I play the guitar'
    },
    gerund: {
      ca: 'Estic tocant la guitarra',
      es: 'Estoy tocando la guitarra',
      en: 'I am playing the guitar'
    },
    participle: {
      ca: 'He tocat la guitarra',
      es: 'He tocado la guitarra',
      en: 'I have played the guitar'
    }
  },
  indicative: {
    present: ['(Jo) vull tocar la guitarra'],
    imperfect: ['(Jo) volia tocar la guitarra'],
    indefinite: ['-'], // catalan uses the perifràstic past
    periphrastic: ['Cuan era nen, (jo) vaig voler tocar la guitarra'],
    perfect: ['He Volgut tocar la guitarra'],
    plucuam: ['Havia Volgut tocar la guitarra'],
    future: ['Voldré tocar la guitarra'],
    conditional: ['Voldria tocar la guitarra']
  },
  imperative: {
    present: ['Toca la guitarra']
  },
  subjunctive: {
    present: [],
    imperfect: [],
    perfect: [],
    plucuam: ['Si jo hagués hagut una poma, jo hauria estat bé']
  }
}