export type StaticProgram = {
  slug: string
  title: string
  route: string
}

export const PROGRAMS: StaticProgram[] = [
  { slug: 'universite-ete-feministe', title: "Université d'Été Féministe (UEF)", route: '/programme/universite-ete-feministe' },
  { slug: 'jeunes-volontaires', title: 'Jeunes Volontaires pour la Santé Sexuelle et Reproductive', route: '/programme/jeunes-volontaires' },
  { slug: 'liggeeyal-eleg', title: 'LIGGEEYAL ËLËG', route: '/programme/liggeeyal-eleg' },
  { slug: 'pas-a-pas', title: 'PAS À PAS', route: '/programme/pas-a-pas' },
  { slug: 'proscides', title: 'PROSCIDES', route: '/programme/proscides' },
  { slug: 'elles-aussi', title: 'ELLES AUSSI', route: '/programme/elles-aussi' },
] 