export const DepartmentName = {
  GIT: 0,
  GC: 1,
  Economie: 2,
  Droit: 3,
} as const

export type IDepartmentName = (typeof DepartmentName)[keyof typeof DepartmentName]

export const DepartmentNameText = {
  [DepartmentName.GIT]: 'Genie informatique et Telecom',
  [DepartmentName.GC]: 'Genie Civil',
  [DepartmentName.Economie]: 'Economie',
  [DepartmentName.Droit]: 'Droit',
} as const
