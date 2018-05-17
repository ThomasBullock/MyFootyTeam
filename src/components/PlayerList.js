import React from 'react';
import { string, number, array } from 'prop-types';
import { List, ListItem } from 'material-ui/List';
import Player from './Player';
import './PlayerList.scss';

// const addedToSquad = (id, squad) => {
//   let added = false;
//   squad.map( (player) => {
//     if(player.id = id) {
//       added = true;
//     }
//   })
//   return added;
// }

const iterateList = (players, selectHandler, addPlayer, changePlayerSelectionStatus) => {
  return players.map((player, i) => {
    return (
      <Player key={i} id={i} player={player} inSquad={player.inSquad} selectHandler={selectHandler} addPlayer={addPlayer} changePlayerSelectionStatus={changePlayerSelectionStatus} />
    );
  });
};

const PlayerList = (props) => {
  const { playingList, selectHandler, addPlayer, changePlayerSelectionStatus } = props;
  return (
    <div className="playerlist">
      {iterateList(playingList, selectHandler, addPlayer, changePlayerSelectionStatus)}
    </div>
  );
};

PlayerList.propTypes = {
  playingList: array.isRequired
};

export default PlayerList;
