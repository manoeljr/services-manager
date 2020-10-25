'use strict'

const moment = require('moment')
const crypto = require('crypto')
const User = use('App/Models/User')
const Mail = use('Mail')

class ForgotPasswordController {

  async store({ request, response }) {
   try {
    const email = request.input('email')
    const user = await User.findByOrFail('email', email)

    user.token = crypto.randomBytes(10).toString('hex')
    user.token_created_at = new Date()

    await user.save()

    /**
   * Enviando email
   * POST
   *
   * @param 'template do email
   * @param 'parametros passados para o email como variaveis
   * @param 'mensagem, para, de qual email e mensagem no titulo do email
   */
    await Mail.send(
      ['emails.forgot_password'],
      { email, token: user.token, link: `${request.input('redirect_url')}?token=${user.token}`},
      message => {
        message
          .to(user.email)
          .from('maxautocenter@gmail.com', 'MaxAutoCenter')
          .subject('Recuperação de senha')
      }
    )
   } catch (error) {
      return response.status(error.status).send({ error: { message: 'Algo não deu certo, esse e-email existe ?'}})
   }
  }

  async update({ request, response }) {
    try {
      const { token, password } = request.all()
      const user = await User.findByOrFail('token', token)
      // Verificando o tempo de expiracao do token com a lib moment
      const tokenExpired = moment().subtract('2', 'days').isAfter(user.token_created_at)

      if (tokenExpired) {
        return response.status(401).send({ error: { message: 'O Token de recuperação de senha está expirado'}})
      }

      user.token = null
      user.token_created_at = null
      user.password = password

      await user.save()

    } catch (error) {
      return response.status(error.status).send({ error: { message: 'Algo deu errado a resetar sua senha'}})
   }
  }

}

module.exports = ForgotPasswordController
