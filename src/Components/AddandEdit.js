import React, { useState } from 'react';
import '../App.css';

export default function AddandEdit({ addTodo, deleteTodo, datas }) {
    const [index, setIndex] = useState(0);
    const [info, setInfo] = useState({ name: '', email: '', todo: '' })
    const [action, setAction] = useState(0);
    const title = 'Add a to-do';
    console.log(datas);

    const onChangeHandler = (event) => {
        setInfo({ ...info, [event.target.name]: event.target.value });
    }

    const add = (event) => {
        addTodo(event, action, index);
        event.preventDefault();
        setInfo({ name: '', email: '', todo: '' });
        setAction(0);
    }

    const edit = (event, index) => {
        event.preventDefault();
        const data = datas[index];
        setInfo({ name: data.name, email: data.email, todo: data.todo });
        setAction(1);
        setIndex(index);
    }

    const remove = (index) => {
        deleteTodo(index);
        setInfo({ name: '', email: '', todo: '' });
    }

    return (
        <>
            <div className="App">
                <h2>{title}</h2>
                <form className="myForm" onSubmit={add}>
                    <div className="align">
                        <label className="label" htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={info.name} placeholder="Name" className="formField"
                            onChange={onChangeHandler}
                        />
                    </div>

                    <div className="align">
                        <label className="label" htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" value={info.email} placeholder="Email" className="formField"
                            onChange={onChangeHandler}
                        />
                    </div>

                    <div className="align">
                        <label className="label" htmlFor="todo">Todo:</label>
                        <input type="text" id="todo" name="todo" value={info.todo} placeholder="Todo description" className="formField"
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className="btn-submit">
                        <input type="submit" className="myButton" value="submit" />
                    </div>
                </form>
                <div className="list-div">
                    {
                        datas.map((data, i) =>
                            <li key={i} className="myList">
                                Name: {data.name}<br />Email: {data.email}<br />To-do: {data.todo}<br />
                                <button onClick={() => remove(i)} className="myListButton">remove </button>
                                <button onClick={(event) => edit(event, i)} className="myListButton">edit </button>

                            </li>
                        )
                    }
                </div>

            </div>



        </>
    );
}