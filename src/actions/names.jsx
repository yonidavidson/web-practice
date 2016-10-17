import {ADD_NAME} from '../consts/action-types.jsx'
import {REMOVE_NAME} from '../consts/action-types.jsx'
import {EDIT_NAME} from '../consts/action-types.jsx'

export const addName = (title) => ({
	type: ADD_NAME,
	title
})

export const removeName = (title) => ({
	type: REMOVE_NAME,
	title
})

export const editName = (title) => ({
	type: EDIT_NAME,
	title
})