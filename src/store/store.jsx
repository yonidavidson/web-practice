import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducers/root.jsx'
import thunk from 'redux-thunk'

const initialState = {
  names: []
}


export default createStore(reducer, initialState,applyMiddleware(thunk))