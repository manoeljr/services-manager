'use strict'

const Antl = use('Antl')

class Vehicle {

  get validateAll() {
    return true
  }

  get rules () {
    return {
      type: 'required',
      brand: 'required',
      model: 'required',
      slab: 'required',
      color: 'required',
      kms: 'required'
    }
  }

  get messages() {
    return Antl.list('validation')
  }

}

module.exports = Vehicle
