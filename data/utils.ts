import { pronounsCA } from "./pronouns";

export function getPersonalPronoun(index: number): string {
  switch (index) {
    case 0:
      return pronounsCA.personal.S1;
    case 1:
      return pronounsCA.personal.S2;
    case 2:
      return pronounsCA.personal.S3;
    case 3:
      return pronounsCA.personal.P1;
    case 4:
      return pronounsCA.personal.P2;
    case 5:
      return pronounsCA.personal.P3;
    default:
      return ""; // throw error?
  }
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}