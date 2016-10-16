import {createStore} from 'redux'
import reducer from '../reducers/root.jsx'


const initialState = {
  names: ['Andrew G', 'Eyal K', 'Yoni D']
}


export default createStore(reducer, initialState)