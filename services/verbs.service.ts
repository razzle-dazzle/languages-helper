import { catalanVerbs } from '@/data/verbs-catalan';
import { Verbs } from '@/data/verbs.model';


class VerbsService {
  getProjects(): Verbs[] {
    return catalanVerbs;
  }
  
}

const myVerbsService = new VerbsService();
export default myVerbsService;
