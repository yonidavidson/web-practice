import {ADD_NAME, REMOVE_NAME, EDIT_NAME} from '../consts/action-types.jsx'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
      return state.names.includes(action.title)?
  		Object.assign({}, state):
  		Object.assign({}, state, { names: state.names.concat(action.title) } )
    case REMOVE_NAME:
    	return Object.assign({}, {names: state.names.filter(v => action.title !== v)})
    case EDIT_NAME:
      console.log("EDIT_NAME:",action.title)
  }
  return state
}

export default reducer