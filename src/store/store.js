import { combineReducers, createStore } from "redux"
import reducer from "./reducer"


const reducers = combineReducers({
    main: reducer,
})

const store = createStore(reducers)



export default store

window.store = store