import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"

export const client = new ApolloClient({
  uri:
    "https://cors-anywhere.herokuapp.com/https://todo-mongo-graphql-server.herokuapp.com/",
  fetch,
})
