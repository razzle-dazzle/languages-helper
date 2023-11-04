import { Adjective, adjectivesES } from '@/data/adjectives';


class AdjectivesService {
  getList(orderedBySpanish: boolean = true): Adjective[] {
    if (orderedBySpanish) {
      return adjectivesES.sort((a, b) => a.es.localeCompare(b.es))
    }
    return adjectivesES.sort((a, b) => a.en.localeCompare(b.en));
  }
}

const myAdjectivesService = new AdjectivesService();
export default myAdjectivesService;
