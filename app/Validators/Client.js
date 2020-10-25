'use strict'

const Antl = use('Antl')

class Client {

  get validateAll() {
    return true
  }

  get rules () {
    return {
      name: 'required',
      phone: 'required'
    }
  }

  get messages() {
    return Antl.list('validation')
  }

}

module.exports = Client
