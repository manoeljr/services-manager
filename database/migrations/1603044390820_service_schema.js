'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ServiceSchema extends Schema {
  up () {
    this.create('services', (table) => {
      table.increments()
      table.integer('vehicle_id').unsigned().references('id').inTable('vehicles').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('client_id').unsigned().references('id').inTable('clients').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('value').notNullable()
      table.string('description').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('services')
  }
}

module.exports = ServiceSchema
