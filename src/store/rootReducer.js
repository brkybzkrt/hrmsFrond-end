import {combineReducers} from "redux"
import favoritiesValue from "./reducers/favoritiesReducer"

const rootReducer= combineReducers({

    favorite:favoritiesValue
})

export default rootReducer;