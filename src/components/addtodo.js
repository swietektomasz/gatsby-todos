import React, { useState } from "react"
import styled from "@emotion/styled"
import { useMutation } from "@apollo/react-hooks"
import { gql } from "apollo-boost"

const ADD_TODO = gql`
  mutation save($id: String!, $title: String!) {
    save(id: $id, title: $title) {
      id
      title
      completed
    }
  }
`

const AddButton = styled.button`
  font-size: 12pt;
  margin-left: auto;
  border: none;
  background-color: blue;
`

export const AddTodo = () => {
  const [title, setTitle] = useState("")
  const [addTodo] = useMutation(ADD_TODO)
  return (
    <div>
      <input
        onChange={event => setTitle(event.target.value)}
        name="title"
        placeholder="Todo title..."
      ></input>
      <AddButton onClick={() => addTodo({ variables: { id: "_id", title } })}>
        add
      </AddButton>
    </div>
  )
}
