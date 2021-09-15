import React, { useContext } from 'react';
import '../App.css';
import { TodoListContext } from '../Context/GlobalContext';
import Show from './Show';

export default function Todo() {
  const [state, dispatch] = useContext(TodoListContext);


  const addTodo = (info, action, index) => {
    if (action === 0) {
      dispatch({ type: 'add', payload: info });
    }
    else {
      dispatch({ type: 'edit', index: index, payload: info });
    }
  }

  const deleteTodo = (index) => {
    dispatch({ type: 'delete', payload: index })
  }

  return (
    <>
      <Show addTodo={addTodo} deleteTodo={deleteTodo} />
    </>
  );

}