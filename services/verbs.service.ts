import { catalanVerbs } from '@/data/verbs-catalan';
import { Verbs } from '@/data/verbs.model';


class VerbsService {
  getVerbs(): Verbs[] {
    return catalanVerbs;
  }
  getVerbById(id: Verbs['id']): Verbs | undefined {
    return catalanVerbs.find(v => v.id === id)
  }
}

const myVerbsService = new VerbsService();
export default myVerbsService;
