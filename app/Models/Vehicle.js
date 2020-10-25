'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Vehicle extends Model {

  client() {
    return this.belongsTo('App/Models/Client')
  }

  services() {
    return this.hasMany('App/Models/Service')
  }

  files() {
    return this.hasMany('App/Models/File')
  }
}

module.exports = Vehicle
