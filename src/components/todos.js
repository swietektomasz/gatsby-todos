import React from "react"
import { useQuery } from "@apollo/react-hooks"
import styled from "@emotion/styled"

import { Todo } from "./todo"
import { AddTodo } from "./addtodo"
import { TODOS } from "../graphql"

const List = styled.div`
  display: flex;
  flex-direction: column;
`

export const Todos = () => {
  const { data } = useQuery(TODOS)

  return (
    <List>
      {data && data.todos.map(todo => <Todo key={todo.id} todo={todo}></Todo>)}
      <AddTodo></AddTodo>
    </List>
  )
}
