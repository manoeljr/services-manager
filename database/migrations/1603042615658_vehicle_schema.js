'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VehicleSchema extends Schema {
  up () {
    this.create('vehicles', (table) => {
      table.increments()
      table.integer('client_id').unsigned().references('id').inTable('clients').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('file_id').unsigned().references('id').inTable('files').onUpdate('CASCADE').onDelete('SET NULL')
      table.string('type').notNullable()
      table.string('brand').notNullable()
      table.string('model').notNullable()
      table.string('slab').notNullable()
      table.string('color').notNullable()
      table.integer('kms')
      table.timestamps()
    })
  }

  down () {
    this.drop('vehicles')
  }
}

module.exports = VehicleSchema
