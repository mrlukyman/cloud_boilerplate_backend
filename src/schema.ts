import { gql } from 'apollo-server'
import { DateTimeResolver } from 'graphql-scalars'
import { Context } from './context'

export const typeDefs = gql`
  scalar DateTime
  type Query {

  }
  type Mutation {

  }
`

export const resolvers = {
  DateTime: DateTimeResolver,
  Query: {
 
  },
  Mutation: {
   
  },
}
