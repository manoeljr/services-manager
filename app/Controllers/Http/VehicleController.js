'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Vehicle = use('App/Models/Vehicle')

/**
 * Resourceful controller for interacting with vehicles
 */
class VehicleController {
  /**
   * Show a list of all vehicles.
   * GET vehicles
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ params }) {
    const vehicles = Vehicle.query().where('client_id', params.clients_id).fetch()
    return vehicles
  }

  /**
   * Create/save a new vehicle.
   * POST vehicles
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ params, request }) {
    const data = request.only([
      'type',
      'brand',
      'model',
      'slab',
      'color',
      'kms'
    ])
    const vehicle = await Vehicle.create({ ...data, client_id: params.clients_id })
    return vehicle
  }

  /**
   * Display a single vehicle.
   * GET vehicles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const vehicle = Vehicle.findOrFail(params.id)
    return vehicle
  }

  /**
   * Update vehicle details.
   * PUT or PATCH vehicles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const vehicle = await Vehicle.findOrFail(params.id)
    const data = request.only([
      'type',
      'brand',
      'model',
      'slab',
      'color',
      'kms'
    ])
    vehicle.merge(data)
    await vehicle.save()
    return vehicle
  }

  /**
   * Delete a vehicle with id.
   * DELETE vehicles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const vehicle = await Vehicle.findOrFail(params.id)
    await vehicle.delete()
  }
}

module.exports = VehicleController
