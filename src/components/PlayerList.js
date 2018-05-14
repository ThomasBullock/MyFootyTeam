import React from 'react';
import { string, number, array } from 'prop-types';
import { List, ListItem } from 'material-ui/List';
import Player from './Player';
import './PlayerList.scss';

const iterateList = (players, selectHandler) => {
  return players.map((player, i) => {
    return (
      <Player key={i} id={i} player={player} selectHandler={selectHandler} />
    );
  });
};

const PlayerList = props => {
  const { playingList, selectHandler } = props;
  return (
    <div className="playerlist">{iterateList(playingList, selectHandler)}</div>
  );
};

PlayerList.propTypes = {
  playingList: array.isRequired
};

export default PlayerList;
