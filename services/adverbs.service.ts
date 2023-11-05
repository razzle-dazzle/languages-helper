import { Adverb, adverbs } from '@/data/adverbs';


class AdverbsService {
  getList(): Adverb[] {
    return adverbs;
  }
}

const myAdverbsService = new AdverbsService();
export default myAdverbsService;
