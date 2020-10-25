'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { message: 'SGSM - Sistema de Gerenciamento de Serviços Mecânicos' }
})

Route.post('/register', 'UserController.store').validator('User')

Route.post('/authenticate', 'SessionController.store').validator('Session')

Route.post('/passwords', 'ForgotPasswordController.store').validator('ForgotPassword')
Route.put('/passwords', 'ForgotPasswordController.update').validator('ResetPassword')


Route.get('/files/:id', 'FileController.show')

Route.group(() => {
  Route.post('/files', 'FileController.store')

  Route.resource('/clients', 'ClientController').apiOnly().validator(new Map([[['client.store'], ['Client']]]))
  Route.resource('/clients.vehicles', 'VehicleController').apiOnly().validator(new Map([[['vehicle.store'],['Vehicle']]]))
  // Route.resource('/vehicles.services', 'ServiceController').apiOnly().validator(new Map([[['service.store'],[Service]]]))

  Route.resource('/permissions', 'PermissionController').apiOnly()
  Route.resource('/roles', 'RoleController').apiOnly()
})// }).middleware(['auth'])

