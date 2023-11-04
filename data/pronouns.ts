import { PronounTypes, PronounsMap } from "./pronouns.model";

export const pronounsCA: Record<PronounTypes, PronounsMap> = {
  personal: {
    S1: "Jo",
    S2: "Tu",
    S3: "Ell/Ella",
    SF: "Vostè",
    P1: "Nosaltres",
    P2: "Vosaltres",
    P3: "Ells/Elles",
    PF: "Vostès", // ?"
  },
  personalShort: {
    S1: "Jo",
    S2: "Tu",
    S3: "Ell/Ella",
    SF: "V.",
    P1: "Ns.",
    P2: "Vs.",
    P3: "Ells/Elles",
    PF: "Vostès", // ?
  },
  direct: {
    S1: "em, me, m', 'm",
    S2: "et, te, t', 't",
    S3: "el, lo, l', la, li",
    SF: "",
    P1: "ens, nos",
    P2: "us, vos",
    P3: "es, se, s'",
    PF: "",
  },
  indirect: {
    S1: "em, me, m', 'm",
    S2: "et, te, t', 't",
    S3: "li",
    SF: "",
    P1: "ens, nos",
    P2: "us, vos",
    P3: "els, los, 'ls, les",
    PF: "",
  },
  reflexive: {
    S1: "Em",
    S2: "Et",
    S3: "Es",
    SF: "",
    P1: "Ens",
    P2: "Us",
    P3: "Es",
    PF: "",
  },
  prepositional: {
    S1: "A mi",
    S2: "A tu",
    S3: "A ell, A ella",
    SF: "",
    P1: "A nosaltres",
    P2: "A vosaltres",
    P3: "A ells, A elles",
    PF: "",
  },
  possessive: {
    S1: "",
    S2: "",
    S3: "",
    SF: "",
    P1: "",
    P2: "",
    P3: "",
    PF: "",
  },
  possessiveAdjective: {
    S1: "Meu/Meva",
    S2: "Teu/Teva",
    S3: "Seu/Seva",
    SF: "",
    P1: "Nostre/Nostra",
    P2: "Vostre/Vostre",
    P3: "Seu/Seva",
    PF: "",
  },
};

export const pronounsES: Record<PronounTypes, PronounsMap> = {
  personal: {
    S1: "Yo",
    S2: "Tú",
    S3: "Él/Ella",
    SF: "Usted",
    P1: "Nosotros/as",
    P2: "Vosotros/as",
    P3: "Ellos/as",
    PF: "Ustedes",
  },
  personalShort: {
    S1: "Yo",
    S2: "Tú",
    S3: "Él/Ella",
    SF: "Ud.",
    P1: "Nos.",
    P2: "Vos.",
    P3: "Ellos/as",
    PF: "Uds.",
  },
  direct: {
    S1: "Me",
    S2: "Te",
    S3: "Lo/La",
    SF: "Se", // ?
    P1: "Nos",
    P2: "Os",
    P3: "Se",
    PF: "Se",
  },
  indirect: {
    S1: "Me",
    S2: "Te",
    S3: "Se",
    SF: "Se", // ?
    P1: "Nos",
    P2: "Os",
    P3: "Les",
    PF: "Se",
  },
  reflexive: {
    S1: "Me",
    S2: "Te",
    S3: "Se",
    SF: "Se", // ?
    P1: "Nos",
    P2: "Os",
    P3: "Se",
    PF: "Se",
  },
  prepositional: {
    S1: "Mí",
    S2: "Ti",
    S3: "Él/Ella",
    SF: "Usted/Sí",
    P1: "Nosotros/as",
    P2: "Vosotros/as",
    P3: "Ellos/as",
    PF: "Ustedes",
  },
  possessive: {
    S1: "El/Los Mío/s, La/Las Mía/s",
    S2: "El/Los Tuyo/s, La/s Tuya/s",
    S3: "El/Los Tuyo/s, La/s Tuya/s",
    SF: "",
    P1: "El/Los Nuestro/s, La/s Nuestra/s",
    P2: "El/Los Vuestro/s, La/s Vuestra/s",
    P3: "El/Los Suyo/s, La/s Suya/s",
    PF: "",
  },
  possessiveAdjective: {
    S1: "Mi, Mis",
    S2: "Tu, Tus",
    S3: "Su, Sus",
    SF: "",
    P1: "Nuestro/s, Nuestra/s",
    P2: "Vuestro/s, Vuestra/s",
    P3: "???",
    PF: "",
  },
};

export const pronounsEN: Record<PronounTypes, PronounsMap> = {
  personal: {
    S1: "I",
    S2: "You",
    S3: "He/She/It",
    SF: "One",
    P1: "We",
    P2: "You guys",
    P3: "They",
    PF: "???",
  },
  personalShort: {
    S1: "I",
    S2: "You",
    S3: "He/She/It",
    SF: "One",
    P1: "We",
    P2: "You guys",
    P3: "They",
    PF: "???",
  },
  direct: {
    S1: "",
    S2: "",
    S3: "",
    SF: "",
    P1: "",
    P2: "",
    P3: "",
    PF: "",
  },
  indirect: {
    S1: "",
    S2: "",
    S3: "",
    SF: "",
    P1: "",
    P2: "",
    P3: "",
    PF: "",
  },
  reflexive: {
    S1: "Myself",
    S2: "Yourself",
    S3: "Himself/Herself/Itself/Yourself", // ???
    SF: "One's self", // ???
    P1: "Ourselves",
    P2: "Yourselves",
    P3: "Themselves,Yourselves",
    PF: "Se",
  },
  prepositional: {
    S1: "Me",
    S2: "You",
    S3: "Him, Her, You (for.)",
    SF: "",
    P1: "Us",
    P2: "You (pl.)",
    P3: "Them",
    PF: "",
  },
  possessive: {
    S1: "My",
    S2: "Your",
    S3: "His, Hers, Its",
    SF: "One's",
    P1: "Our",
    P2: "Your (pl.)",
    P3: "Their",
    PF: "You guys'", // ???
  },
  possessiveAdjective: {
    S1: "",
    S2: "",
    S3: "",
    SF: "",
    P1: "",
    P2: "",
    P3: "",
    PF: "",
  },
};
