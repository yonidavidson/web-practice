import {ADD_NAME, REMOVE_NAME, EDIT_NAME, GET_NAMES} from '../consts/action-types.jsx'
import {getNames} from '../server/server.jsx'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
      return state.names.includes(action.title)?
  		Object.assign({}, state):
  		Object.assign({}, state, { names: state.names.concat(action.title) } )
    case REMOVE_NAME:
    	return Object.assign({}, {names: state.names.filter(v => action.title !== v)})
    case EDIT_NAME:
      return Object.assign({}, {names: state.names.map(v => action.title.oldN === v ?
        action.title.newN : v)
      })
    case GET_NAMES:
      const data = getNames()
      return Object.assign({}, {names: data})
  }
  return state
}

export default reducer