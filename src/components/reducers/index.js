import { combineReducers } from 'redux'
import { parcelDetailsReducer } from './parcelDetails'

//Combine Multiple Reducer
const rootReducer = combineReducers({
  parcel: parcelDetailsReducer,
})

export default rootReducer
