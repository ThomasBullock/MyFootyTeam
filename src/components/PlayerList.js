import React from 'react';
import { string, number, array } from 'prop-types';

import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {pinkA200, transparent} from 'material-ui/styles/colors';

// import MobileTearSheet from './common/mobileTearSheet.js';

const iterateList = (players, selectHandler) => {
	return players.map( (player, i) => {
		return(
      <ListItem 
      	key={i}
      	className="playerlist__item"
        primaryText={`${player.name} ${player.surname}`}
        leftIcon={<span style={
        	{ top: 1, borderRadius: '50%', behavior: 'url(PIE.htc)', background: 'red', border: '2px solid #333', width: 16,
  				 height: 16, padding: 5, textAlign: 'center', font: '16px Arial, sans-serif', color: '#333'}
        } 
        className="playerlist__number" color={pinkA200} >{player.id}</span>}
        rightAvatar={<Avatar src={player.imageUrl} />}
        onClick={() => selectHandler(i)}
      />
		)
	})
}

const PlayerList = (props) => {
	const { playingList, selectHandler } = props;
	return(
    	<List className="playerlist">
			{iterateList(playingList, selectHandler)}
	    </List>
		
	)
}

PlayerList.propTypes = {
	playingList: array.isRequired
}

export default PlayerList;