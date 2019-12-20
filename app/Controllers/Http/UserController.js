'use strict'
const User = use('App/Models/User')


class UserController {
   async index ({ request, response }) {
        let users = User.query().with('job').fetch()
         return await users
   }
}

module.exports = UserController
