export const initialState = {
    name: "",
    email: "",
    password: ""
  }

export const reducer = (state, action) => {
switch (action.type) {
    case "ONCHANGE":
    return {
        ...state,
        [action.payload.name]: action.payload.value
    }

    default:
    return state;
}
}