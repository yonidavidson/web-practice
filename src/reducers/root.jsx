import {ADD_NAME,REMOVE_NAME} from '../consts/action-types.jsx'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
    return state.names.includes(action.title)?
		Object.assign({}, state):
		Object.assign({}, state, { names: state.names.concat(action.title) } )
    case REMOVE_NAME:
    	return Object.assign({}, {names: state.names.filter(v => action.title !== v)})
    	
  }
  return state
}

export default reducer