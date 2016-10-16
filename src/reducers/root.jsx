import {ADD_NAME} from '../consts/action-types.jsx'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
    return Object.assign({}, state, { names: state.names.concat(action.title) } )
  }
  return state
}

export default reducer