'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Service extends Model {

  vehicle() {
    return this.belongsTo('App/Models/Vehicle')
  }

  client() {
    return this.belongsTo('App/Models/Client')
  }
}

module.exports = Service
