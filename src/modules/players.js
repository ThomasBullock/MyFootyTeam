import axios from 'axios';

const action = name => `myfootyteam18/player/${name}`;

export const REQUEST_PLAYER_LIST = action('REQUEST_PLAYER_LIST');
export const RECEIVE_PLAYER_LIST = action('RECEIVE_PLAYER_LIST');

export const requestPlayerList = () => ({ type: REQUEST_PLAYER_LIST});
export const receivePlayerList = (players) => ({ type: RECEIVE_PLAYER_LIST, players });

const initialState = [{
	id: null,
	name: null,
	imageUrl: null,
	games: null,
	dob: null,
}]

const player = (state = initialState, action) => {
	switch(action.type) {
		case RECEIVE_PLAYER_LIST:
		// console.log(action)
		// 	console.log(state)
			return action.players 
		default:
			return state;
	}
}

export default player;

export const fetchPlayers = () => {
	return (dispatch) => {
		
		dispatch(requestPlayerList());
		
		return axios.get(`https://59b0e017ffff010011b4ef5c.mockapi.io/api/players`)
		.then((response) => {
			console.log(response)
			dispatch(receivePlayerList(response.data))
		})
	}
}