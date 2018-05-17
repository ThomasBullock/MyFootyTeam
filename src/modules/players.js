import axios from 'axios';

const action = name => `myfootyteam18/player/${name}`;

export const REQUEST_PLAYER_LIST = action('REQUEST_PLAYER_LIST');
export const RECEIVE_PLAYER_LIST = action('RECEIVE_PLAYER_LIST');
export const CHANGE_PLAYER_SELECTION_STATUS = action('CHANGE_PLAYER_SELECTION_STATUS');

export const requestPlayerList = () => ({ type: REQUEST_PLAYER_LIST});
export const receivePlayerList = (players) => ({ type: RECEIVE_PLAYER_LIST, players });
export const changePlayerSelectionStatus = (playerId) => ({ type: CHANGE_PLAYER_SELECTION_STATUS, playerId});

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
		console.log(action.players)
		// 	console.log(state)
			return action.players.map( (obj) => { 
				obj.inSquad = false 
				return obj;
			});
		case CHANGE_PLAYER_SELECTION_STATUS:
			console.log(action);
			console.log(state[action.playerId]);
			return Object.assign([
				...state.slice(0, action.playerId),
				{
					id: state[action.playerId].id,
					name: state[action.playerId].name,
					imageUrl: state[action.playerId].imageUrl,
					games: state[action.playerId].games,
					dob: state[action.playerId].dob,
					height: state[action.playerId].height,
					status: state[action.playerId].status,
					surname: state[action.playerId].surname,
					primary: state[action.playerId].primary,
					secondary: state[action.playerId].secondary,
					inSquad: !state[action.playerId].inSquad
				},
				...state.slice(action.playerId + 1),
			])
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
			dispatch(receivePlayerList(response.data))
		})
	}
}