export const ADD_PLAYER = 'squad/ADD_PLAYER';
export const REMOVE_PLAYER = 'squad/REMOVE_PLAYER';
export const AddPlayer = (position, player) => ({type: ADD_PLAYER, position, player})
export const RemovePlayer = (position,) => ({type: REMOVE_PLAYER, position})

const initialState = [
	{ position: 'LeftBackPocket', player: null },
	{ position: 'FullBack', player: null },
	{ position: 'RightBackPocket', 
		player: {
			name: 'Andrew',
			surname: 'McGrath',
			imageUrl: 'http://s.afl.com.au/staticfile/AFL%20Tenant/Essendon/Player%20Profiles/2017%20-%20Profiles/MCGRATH%20Andrew.png',
		} 
	},
	{ position: 'LeftHalfBack', player: null },
	{ position: 'CentreHalfBack', player: null },	
	{ position: 'RightHalfBack', player: null },		
	{ position: 'LeftWing', player: null },		
	{ position: 'Centre', player: null },		
	{ position: 'RightWing', player: null },
	{ position: 'Ruck', player: null },
	{ position: 'Ruck-Rover', player: null },	
	{ position: 'Rover', player: null },							
	{ position: 'LeftHalfForward', player: null },
	{ position: 'CentreHalfForward', player: null },	
	{ position: 'RightHalfForward', player: null },
	{ position: 'LeftForwardPocket', player: null },
	{ position: 'FullForward', player: null },	
	{ position: 'RightForwardPocket', player: null },					
	{ position: 'Interchange1', player: null },
	{ position: 'Interchange2', player: null },
	{ position: 'Interchange3', player: null },	
	{ position: 'Interchange4', player: null },		
													
]

const squad = (state = initialState, action) => {
	switch(action.type) {
		default:
			return state;
	}
}

export default squad;