import { gql } from "apollo-boost"

export const TOGGLE_TODO = gql`
  mutation toggle($id: String!) {
    toggle(id: $id) {
      id
      title
      completed
    }
  }
`

export const REMOVE_TODO = gql`
  mutation destroy($id: String!) {
    destroy(id: $id) {
      id
      title
      completed
    }
  }
`
