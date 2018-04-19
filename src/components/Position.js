import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from 'material-ui';
import blank from '../img/Blank_t.png';
import './Position.scss';

const Position = (props) => {
	const { player } = props;
	console.log(player)
	const photoUrl = player ? player.imageUrl : blank;
	return(

			<Paper className="position"
				zDepth={2}
			>
				<div className="position__content">
					<span className="position__name">{player && player.surname}</span>
					<img className="position__photo" src={photoUrl} />
				</div>
			</Paper>

	)
	
}

Position.defaultProps = {
	player: 'empty'
}

export default Position;