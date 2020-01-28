import React from "react"
import styled from "@emotion/styled"
import { useMutation } from "@apollo/react-hooks"

import { TOGGLE_TODO, REMOVE_TODO } from "../graphql"

const Item = styled.div`
  display: flex;
  width: 18rem;
  font-size: 16pt;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
`

const CompleteButton = styled.button`
  font-size: 12pt;
  margin-left: auto;
  border: none;
  background-color: green;
`

const RemoveButton = styled.button`
  font-size: 12pt;
  margin-left: auto;
  border: none;
  background-color: red;
`

export const Todo = ({ todo: { id, title, completed } }) => {
  const [toggleTodo] = useMutation(TOGGLE_TODO)
  const [removeTodo] = useMutation(REMOVE_TODO)

  return (
    <div>
      <Item completed={completed}>{title}</Item>
      <CompleteButton onClick={() => toggleTodo({ variables: { id: id } })}>
        toggle
      </CompleteButton>
      <RemoveButton onClick={() => removeTodo({ variables: { id: id } })}>
        remove
      </RemoveButton>
    </div>
  )
}
