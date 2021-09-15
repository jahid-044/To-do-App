import React, { createContext, useState } from "react";

export const TodoListContext = createContext([]);

function GlobalContext(props) {
    const [datas, setDatas] = useState([]);
    return (
        <TodoListContext.Provider value={[datas, setDatas]}>
            {props.children}
        </TodoListContext.Provider>
    )
}

export default GlobalContext;