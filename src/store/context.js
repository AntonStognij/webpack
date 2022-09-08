import { createStore } from "redux"
const defaultState = {
    name:""
}

const reducer = (state = defaultState, action)=> {
    switch (action.type) {
        case "ADD_NAME" : 
        return {...state, name:action.payload}
        default: return state
    }
}
const store = createStore(reducer)
export {store}
