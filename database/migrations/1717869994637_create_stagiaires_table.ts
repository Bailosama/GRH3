import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'stagiaires'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nom').notNullable()
      table.string('prenom').notNullable()
      table.integer('age').notNullable()
      table.string('sexe').notNullable()
      table.date('date_naissance').notNullable()
      table.string('ville').notNullable()
      table.string('adresse').notNullable()
      table.string('etablissement').notNullable()
      table.string('formation').notNullable()
      table.string('encadrant').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
