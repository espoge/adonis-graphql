'use strict'

const User = use('App/Models/User')

// Define resolvers
const resolvers = {
  Query: {
    // Fetch all users
    async allUsers() {
      const users = await User
      .query()
      .with('job')
      .fetch()
      return users.toJSON()
    },
    // Get a user by its ID
    async fetchUser(_, { id }) {
      const user = await User.query().with('job').where('id', id).first()
      return user.toJSON()
    },
  },
  Mutation:{
    async createUser(_, { firstname, lastname }) {
      return await User.create({ firstname, lastname })
    },
  }
}

module.exports = resolvers
