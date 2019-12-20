'use strict'

const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')


// Define our schema using the GraphQL schema language
const typeDefs = `
type User {
  id: Int!
  firstname: String!
  lastname: String!
  job:Job
},
type Job {
    id:  ID!
    description: String!
    created_at:String!
  }
  type Query {
    allUsers: [User]
    fetchUser(id: Int!): User
    createUser (username: String!, email: String!, password: String!): User
  }
  type Mutation{
    createUser (firstname: String!, lastname: String!): User
  }
  
`  



module.exports = makeExecutableSchema({ typeDefs, resolvers })

