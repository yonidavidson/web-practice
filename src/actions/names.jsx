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
	return function (dispatch) {
		fetch('http://127.0.0.1:3000/names')
		.then(status)
		.then(json)
		.then(data => dispatch(getNames(data)))
		.catch(err => console.log(err))
	}
}

export const postName = (name) =>{
	return function(dispatch){
		const payload = JSON.stringify({name: name})
		fetch('http://127.0.0.1:3000/names',{
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: 'post',
			body: payload
		})
		.then(status)
		.then(dispatch(addName(name)))
		.catch(err => console.log('failed to post name to server:', err))		
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