import { gql } from "apollo-boost"

export const TODOS = gql`
  query todos {
    todos {
      id
      title
      completed
    }
  }
`
