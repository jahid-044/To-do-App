
const todoReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                datas: state.datas.concat(action.payload)
            };
        case 'edit':
            const datas = [...state.datas];
            datas[action.index] = action.payload;
            return { ...state, datas };
        case 'delete':
            return {
                ...state,
                datas: state.datas.filter((_, index) => index !== action.payload)
            };
        default:
            return state;
    }
};

export default todoReducer;