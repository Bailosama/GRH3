import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'teachers'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('lastname').notNullable()
      table.string('firstname').notNullable()
      table.string('email').unique().notNullable()
      table.string('phone').unique().notNullable()
      table.string('gender')
      table.date('birthdate')
      table.string('address').notNullable()
      table.string('department').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
