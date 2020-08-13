
import React from 'react'
import { useQuery } from '@apollo/client'
import { Todos } from '../models/Todos'
import { GET_ALL_TODOS } from '../operations/queries/getAllTodos'

export default function MainTest () {
  console.log("function MainTest. useQuery(GET_ALL_TODOS) ");
  const todosQueryResult = useQuery(GET_ALL_TODOS);
  const todos: Todos = todosQueryResult.data.todos;
  console.log("todos: ", todos);
  return (
    <div>
      Function MainTest
    </div>
  );
};

