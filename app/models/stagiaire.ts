import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Stagiaire extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column({ isPrimary: true })
  declare nom: string

  @column({ isPrimary: true })
  declare Prenom: string

  @column({ isPrimary: true })
  declare Age: string

  @column({ isPrimary: true })
  declare Sexe: number

  @column({ isPrimary: true })
  declare Ville: number

  @column({ isPrimary: true })
  declare Date_naissance: DateTime

  @column({ isPrimary: true })
  declare Adresse: string

  @column({ isPrimary: true })
  declare Etablissement: string

  @column({ isPrimary: true })
  declare Formation: string

  @column({ isPrimary: true })
  declare Encadrant: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
