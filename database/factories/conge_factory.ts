import factory from '@adonisjs/lucid/factories'
import Conge from '#models/conge'

export const CongeFactory = factory
  .define(Conge, async ({ faker }) => {
    return {}
  })
  .build()