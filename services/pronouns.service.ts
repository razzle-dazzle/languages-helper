import { pronounsCA, pronounsES, pronounsEN } from "@/data/pronouns";
import { PronounTypes, PronounsMap } from "@/data/pronouns.model";
import { Language } from "@/data/types";

class PronounsService {
  getList(lang: Language): Record<PronounTypes, PronounsMap> {
    switch (lang) {
      case "CA":
        return pronounsCA;
      case "ES":
        return pronounsES;
      case "EN":
        return pronounsEN;
      default:
        throw new Error("Language not supported");
    }
  }
}

const myPronounsService = new PronounsService();
export default myPronounsService;
