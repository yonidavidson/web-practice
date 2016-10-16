

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NAME':
    console.log(state)
    return Object.assign({}, state, { names: state.names.concat(action.title) } )
  }
  return state
}

export default reducer