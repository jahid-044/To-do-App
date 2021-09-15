import React, { useContext, useState } from 'react';
import { TodoListContext } from '../Context/GlobalContext';
import '../App.css';

export default function Show({ addTodo, deleteTodo }) {
    const [datas, setDatas] = useContext(TodoListContext);

    const [index, setIndex] = useState(0);
    const [info, setInfo] = useState({ name: '', email: '', todo: '' })
    const [action, setAction] = useState(0);
    const [btnValue, setBtnValue] = useState('submit');
    const title = 'Add a to-do';

    const onChangeHandler = (event) => {
        setInfo({ ...info, [event.target.name]: event.target.value });
    }

    const refresh = () => {
        setInfo({ name: '', email: '', todo: '' });
        setBtnValue('submit');
    }

    const add = (event) => {
        addTodo(event, action, index);
        event.preventDefault();
        setInfo({ name: '', email: '', todo: '' });
        setBtnValue('submit')
        setAction(0);
    }

    const edit = (event, index) => {
        event.preventDefault();
        const data = datas[index];
        setInfo({ name: data.name, email: data.email, todo: data.todo });
        setBtnValue('Edit');
        setAction(1);
        setIndex(index);
    }

    const remove = (index) => {
        deleteTodo(index);
        setInfo({ name: '', email: '', todo: '' });
        setBtnValue('submit')
    }

    return (
        <>
            <div className="App">
                <h2>{title}</h2>
                <form className="myForm" onSubmit={add}>
                    <div className="align">
                        <label className="label" htmlFor="name">Name:</label>
                        <input required type="text" id="name" name="name" value={info.name} placeholder="Name" className="formField"
                            onChange={onChangeHandler}
                        />
                    </div>

                    <div className="align">
                        <label className="label" htmlFor="email">Email:</label>
                        <input required type="email" id="email" name="email" value={info.email} placeholder="Email" className="formField"
                            onChange={onChangeHandler}
                        />
                    </div>

                    <div className="align">
                        <label className="label" htmlFor="todo">Todo:</label>
                        <textarea required type="text" id="todo" name="todo" value={info.todo} placeholder="Todo description" className="formField"
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className="btnHolder">
                        <div className="btn-submit">
                            <input type="submit" className="myButton" value={btnValue} />
                        </div>
                        <div className="btn-submit">
                            <button onClick={refresh} className="myButton">cancel</button>
                        </div>

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