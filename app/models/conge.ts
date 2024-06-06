import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Conge extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ isPrimary: true })
  declare nom: string

  @column()
  declare date_debut: DateTime

  @column()
  declare date_fin: DateTime

  @column()
  declare motif: string

  @column()
  declare duree: number

  @column()
  declare etat: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
