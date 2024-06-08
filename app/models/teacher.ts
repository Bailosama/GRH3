import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { MultipartFile } from '@adonisjs/core/bodyparser'

export default class Teacher extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare lastname: string

  @column()
  declare firstname: string

  @column()
  declare email: string

  @column()
  declare phone: string

  @column()
  declare gender: string

  @column()
  declare birthdate: Date

  @column()
  declare address: string

  @column()
  declare department: string

  @column()
  declare fichier: MultipartFile

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
