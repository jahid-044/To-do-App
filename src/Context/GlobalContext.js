import React, { createContext, useReducer } from "react";
import todoReducer from "../reducer/todoReducer";

const initialState = {
    datas: [],
};

export const TodoListContext = createContext(initialState);

function GlobalContext(props) {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    return (
        <TodoListContext.Provider value={{ state, dispatch }}>
            {props.children}
        </TodoListContext.Provider>
    )
}

export default GlobalContext;