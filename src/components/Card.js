import React from 'react';
import { Card, CardHeader, CardMedia, CardText } from 'material-ui/Card';
import './Card.scss';
import moment from 'moment';

const PlayerCard = ({player}) => {
	console.log(player);
	const { name, surname, position, imageUrl, games, dob, height, primary, secondary } = player;
	const age = moment().diff(dob, 'years');
	return(
		<Card className="player-card">
			<CardHeader 
      title={`${name} ${surname}`}
      subtitle={`${primary}${(secondary) ? ' | ' + secondary : ''}`}
      avatar={imageUrl}
			/>
			<CardMedia
				overlay={
					<CardText>
						<div className="player-card__stats">
							<span>Age: {age}</span>
							<span>Ht: {height}cm</span>						
							<span>Games: {games}</span>
						</div>
						<div className="player-card__stats">
							<span>Games: {games}</span>
							<span>Games: {games}</span>					
							<span>Games: {games}</span>
						</div>													
					</CardText>
				}
			>
				<img className="player-card__photo" src={imageUrl} />
			</CardMedia>
		</Card>
	)
}

export default PlayerCard;