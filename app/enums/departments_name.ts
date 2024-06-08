export const DepartmentName = {
  GIT: 0,
  GC: 1,
  Economie: 2,
  Droit: 3,
  gtl: 3,
  sp: 2,
  sociologie: 2,
  miage: 2,
} as const

export type IDepartmentName = (typeof DepartmentName)[keyof typeof DepartmentName]

export const DepartmentNameText = {
  [DepartmentName.GIT]: 'Genie informatique et Telecom',
  [DepartmentName.GC]: 'Genie Civil',
  [DepartmentName.Economie]: 'Economie',
  [DepartmentName.Droit]: 'Droit',
  [DepartmentName.gtl]: 'genie electrique',
  [DepartmentName.sp]: 'science politique',
  [DepartmentName.sociologie]: 'sociologie',
  [DepartmentName.miage]: 'miage',
} as const
