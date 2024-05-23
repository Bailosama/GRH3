import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Teacher extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare lastname: string

  @column()
  declare firstanme: string

  @column()
  declare email: string

  @column()
  declare phone: string

  @column()
  declare gender: string

  @column()
  declare date: Date

  @column()
  declare adress: string

  @column()
  declare departemnt: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
