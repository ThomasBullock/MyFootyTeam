const action = name => `myfootyteam18/squad/${name}`;

export const SELECT_POSITION = action('SELECT_POSITION');
export const ADD_PLAYER = action('ADD_PLAYER');
export const REMOVE_PLAYER = action('REMOVE_PLAYER');
export const RESET_SQUAD = action('RESET_SQUAD');
export const selectPosition = (position) => ({type: SELECT_POSITION, position});
export const addPlayer = (player) => ({type: ADD_PLAYER, player});
export const removePlayer = (position) => ({type: REMOVE_PLAYER, position});
export const resetSquad = () => ({type: RESET_SQUAD});

const initialState = [
	{ position: 'LeftBackPocket', player: null, selected: true },
	{ position: 'FullBack', player: null, selected: false },
	{ position: 'RightBackPocket', player: null, selected: false },
	{ position: 'LeftHalfBack', player: null, selected: false },
	{ position: 'CentreHalfBack', player: null, selected: false },	
	{ position: 'RightHalfBack', player: null, selected: false },	
	{ position: 'LeftWing', player: null, selected: false },		
	{ position: 'Centre', player: null, selected: false },	
	{ position: 'RightWing', player: null, selected: false },
	{ position: 'Ruck', player: null, selected: false },
	{ position: 'Ruck-Rover', player: null, selected: false },	
	{ position: 'Rover', player: null, selected: false },							
	{ position: 'LeftHalfForward', player: null, selected: false },
	{ position: 'CentreHalfForward', player: null, selected: false },	
	{ position: 'RightHalfForward', player: null, selected: false },
	{ position: 'LeftForwardPocket', player: null, selected: false },
	{ position: 'FullForward', player: null, selected: false },	
	{ position: 'RightForwardPocket', player: null, selected: false },					
	{ position: 'Interchange1', player: null, selected: false },
	{ position: 'Interchange2', player: null, selected: false },
	{ position: 'Interchange3', player: null, selected: false },	
	{ position: 'Interchange4', player: null, selected: false },

													
]

const squad = (state = initialState, action) => {
	console.log(action);
	switch(action.type) {
		case SELECT_POSITION: 
			return Object.assign([...state], 
				state.map((item) => {
					return {
						position: item.position,
						player: item.player,
						selected: (item.position === action.position) ? true : false,
					}
				}), {	
			});
		case ADD_PLAYER:
			let index;
			const update = state.filter((item, i) => {
				if(item.selected === true) {
					index = i;
					return item; 
				}

			}).map( (item) => {
				return {
					position: item.position,
					player: action.player,
					selected: item.selected,	
				}
			
			})[0]
			return Object.assign([
				...state.slice(0, index),
				update,
				...state.slice(index + 1),
			])
		case REMOVE_PLAYER: 
			let index2;
			const update2 = state.filter((item, i) => {
				if(item.position === action.position) {
					index2 = i;
					return item
				}
			}).map((item) => {
				return {
					position: item.position,
					player: null,
					selected: item.selected,	
				}
			})[0]
			return Object.assign([
				...state.slice(0, index2),
				update2,
				...state.slice(index2 + 1),
			])				
		case RESET_SQUAD:
			return Object.assign([...state], 
				state.map((item) => {
					return {
						position: item.position,
						player: null,
						selected: false,
					}
				}), {	
			});		 		
		default:
			return state;
	}
}

export default squad;