
export const addName = (name) => {
	tmpDB.includes(name) ? tmpDB : tmpDb.concat(name)
}

export const removeName = (name) => {
	tmpDB.filter(v => action.title !== v)
}

export const editName = (newName, oldName) => {
	tmpDB.map(v => oldName === v ? newName : v)
}

export const getNames = () => tmpDB