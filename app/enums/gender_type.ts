export const Gender = {
  Male: 0,
  Female: 1,
} as const

export type IGender = (typeof Gender)[keyof typeof Gender]

export const GenderText = {
  [Gender.Male]: 'Homme',
  [Gender.Female]: 'Femme',
} as const
