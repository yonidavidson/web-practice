import {createStore} from 'redux'
import reducer from '../reducers/root.jsx'


const initialState = {
  names: []
}


export default createStore(reducer, initialState)