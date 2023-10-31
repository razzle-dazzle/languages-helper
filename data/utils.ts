import { PronounsPersonalShortCAT } from "./pronouns";

export function getPronoun(index: number): string {
  switch (index) {
    case 0:
      return PronounsPersonalShortCAT.S1;
    case 1:
      return PronounsPersonalShortCAT.S2;
    case 2:
      return PronounsPersonalShortCAT.S3;
    case 3:
      return PronounsPersonalShortCAT.P1;
    case 4:
      return PronounsPersonalShortCAT.P2;
    case 5:
      return PronounsPersonalShortCAT.P3;
    default:
      return "";
  }
}
