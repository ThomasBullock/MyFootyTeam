import React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardText,
  CardActions
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './Card.scss';
import moment from 'moment';

const PlayerCard = ({ player, addPlayer, resetSquad }) => {
  // console.log(player);
  const {
    name,
    surname,
    position,
    imageUrl,
    games,
    dob,
    height,
    primary,
    secondary
  } = player;
  const age = moment().diff(dob, 'years');
  return (
    <Card className="player-card">
      <CardHeader
        style={{ display: 'flex' }}
        className="player-card__header"
        title={`${name} ${surname}`}
        subtitle={`${primary}${secondary ? ' | ' + secondary : ''}`}
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
        }>
        <img className="player-card__photo" src={imageUrl} />
      </CardMedia>
      <CardActions>
        <FlatButton label="Add to Squad" onClick={() => addPlayer(player)} />
        <FlatButton label="Reset Squad" onClick={() => resetSquad()} />
      </CardActions>
    </Card>
  );
};

export default PlayerCard;
