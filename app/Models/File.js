'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Env = use('Env')

class File extends Model {
  static get computed () {
    return ['url']
  }

  getUrl({ id }) {
    return `${Env.get('APP_URL')}/files/${id}`
  }

  vehicle() {
    return this.belongsTo('App/Models/Vehicle')
  }
}

module.exports = File
