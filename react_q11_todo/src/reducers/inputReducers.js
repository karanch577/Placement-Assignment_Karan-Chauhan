export const initialState = {
    input: "",
    todos: []
}

export const inputReducer = (state, action) => {
    if(action.type === 'INPUT') {
        return {
            ...state,
            [action.payload.name]: action.payload.value
        }
    }else if(action.type === "ADD") {

    } else {
        return state
    }
}
