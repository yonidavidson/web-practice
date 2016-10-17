import {ADD_NAME} from '../consts/action-types.jsx'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
    return state.names.includes(action.title)?
    		Object.assign({}, state):
    		Object.assign({}, state, { names: state.names.concat(action.title) } )
  }
  return state
}

export default reducer