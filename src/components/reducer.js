import {setName} from './action'

function getName(username = 'test', action) {
	switch(action.type) {
		case 'SET_NAME': return action.username
		default : return username
	}
}

function todoApp(state = {}, action) {
	return {
		username: getName(state.username, action)
	}
}

export default todoApp