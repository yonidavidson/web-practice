import {ADD_NAME} from '../consts/action-types.jsx'
import {REMOVE_NAME} from '../consts/action-types.jsx'
import {EDIT_NAME} from '../consts/action-types.jsx'
import {GET_NAMES} from '../consts/action-types.jsx'

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

export const getNames = (title) => ({
	type: GET_NAMES,
	title
})


export const fetchNames = () => {	
	return function (disptach) {
		fetch('http://127.0.0.1:3000/names')
		.then(status)
		.then(json)
		.then(data => disptach(getNames(data)))
		.catch(err => console.log(err))
	}
}

const status = response => {
	if (response.status >= 200 && response.status < 300) {  
		return Promise.resolve(response)  
	} else {  
		return Promise.reject(new Error(response.statusText))  
	}	
}

const json = response => response.json()