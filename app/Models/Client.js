'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Client extends Model {

  vehicles() {
    return this.hasMany('App/Models/Vehicle')
  }

  services() {
    return this.hasMany('App/Models/Service')
  }
}

module.exports = Client
