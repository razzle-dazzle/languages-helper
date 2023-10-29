import { PronounsMap } from './pronouns.model'

export const PronounsPersonalCAT = {
  S1: 'Jo',
  S2: 'Tu',
  S3: 'Ell/Ella',
  SF: 'Vostè',
  P1: 'Nosaltres',
  P2: 'Vosaltres',
  P3: 'Ells/Elles',
  PF: 'Vostès',// ?
} as const satisfies PronounsMap
export const PronounsPersonalShortCAT = {
  S1: 'Jo',
  S2: 'Tu',
  S3: 'Ell/Ella',
  SF: 'V.',
  P1: 'Ns.',
  P2: 'Vs.',
  P3: 'Ells/Elles',
  PF: 'Vostès',// ?
} as const satisfies PronounsMap

export const PronounsPersonalESP = {
  S1: 'Yo',
  S2: 'Tú',
  S3: 'Él/Ella',
  SF: 'Usted',
  P1: 'Nosotros/as',
  P2: 'Vosotros/as',
  P3: 'Ellos/Ellas',
  PF: 'Ustedes',
} as const satisfies PronounsMap

export const PronounsPersonalENG = {
  S1: 'I',
  S2: 'You',
  S3: 'He/She/It',
  SF: 'You (f.)',
  P1: 'We',
  P2: 'You Guys',
  P3: 'They',
  PF: 'You (p.f.)',
} as const satisfies PronounsMap
