import React, { useContext } from 'react';
import '../App.css';
import { TodoListContext } from '../Context/GlobalContext';
import Show from './Show';

export default function Todo() {
  const { datas, setDatas } = useContext(TodoListContext);


  const addTodo = (e, action, index) => {
    if (action === 0) {
      setDatas([...datas, {
        name: e.target.name.value,
        email: e.target.email.value,
        todo: e.target.todo.value,
      }]);
    }
    else {
      datas[index].name = e.target.name.value;
      datas[index].email = e.target.email.value;
      datas[index].todo = e.target.todo.value;
      setDatas(datas);
    }
  }

  const deleteTodo = (i) => {
    const filtered = datas.filter((_, idx) => idx !== i)
    setDatas(filtered);
  }

  return (
    <>
      <Show addTodo={addTodo} deleteTodo={deleteTodo} />
    </>
  );

}