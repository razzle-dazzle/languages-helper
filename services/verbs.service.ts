import { tenses } from '@/data/tenses';
import { catalanVerbs } from '@/data/verbs-catalan';
import { VerbForm, Verbs } from '@/data/verbs.model';


class VerbsService {
  getVerbs(): Verbs[] {
    return catalanVerbs;
  }
  getVerbById(id: Verbs['id']): Verbs | undefined {
    return catalanVerbs.find(v => v.id === id)
  }

  getTenses(): Verbs {
    return tenses;
  }

  /**
   * More: https://www.verbs.cat/en/categories/2-second-conjugation.html
   * @returns The verb form
   */
  getVerbForm(verb: string): VerbForm | null {
    
    if (verb.includes("'")) {
      // must be second form
      return 'second';
    }
    if (verb.includes("-")) {
      // check if verb contains a guillon (-)
      const parts = verb.split('-', 2);
      const first = parts[0];
      const ending = first.substring(first.length - 2);
      return this.verbFormFromBasicEnding(ending)
    } else {
      // treat as normal verb
      const ending = verb.substring(verb.length - 2);
      return this.verbFormFromBasicEnding(ending)
    }
  }

  private verbFormFromBasicEnding(basicVerb: string): VerbForm | null {
    switch(basicVerb.toUpperCase()) {
      case 'AR': return 'first';
      case 'ER': case 'RE': return 'second';
      case 'IR': case 'LIR': return 'third';
      default: return null;
    }
  };
}

const myVerbsService = new VerbsService();
export default myVerbsService;
