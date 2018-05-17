const action = name => `myfootyteam18/player/${name}`;

export const SELECT_PLAYER = action('SELECT_PLAYER');

export const selectPlayer = number => ({ type: SELECT_PLAYER, number });

const initialState = 0;

const player = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PLAYER:
      return action.number;
    default:
      return state;
  }
};

export default player;
