import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import players from './players';
import player from './player';
import squad from './squad';

export default combineReducers({
  router: routerReducer,
  counter,
  players,
  player,
  squad
});