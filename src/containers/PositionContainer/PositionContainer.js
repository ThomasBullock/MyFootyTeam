import React, { Component } from 'react';
import { func, object, oneOfType, bool } from 'prop-types';
import RemoveButton from '../../components/RemoveButton';
// import { Paper } from 'material-ui';
import Position from '../../components/Position';
import Player from '../../components/Player';
import classNames from 'classnames';
// import blank from '../img/Blank_t.png';
import { addPlayer, removePlayer, resetSquad } from '../../modules/squad';
import { ItemTypes } from '../../constants/itemTypes';
import { DropTarget } from 'react-dnd';
import './PositionContainer.scss';

// const addedToSquad = (id, squad) => {
//   let added = false;
//   squad.map( (player) => {
//     if(player.id = id) {
//       added = true;
//     }
//   })
//   return added;
// }

const posTarget = {
  drop(props, monitor) {
    // addPlayer(props.player, props.position);
    return {
      id: props.id,
      position: props.position
    };
  }
};

const collect = (connect, monitor) => {
  //   console.log(connect);
  //   console.log(monitor);

  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
};

class PositionContainer extends Component {
  removeHandler(playerId, positionId) {
    console.log(playerId, positionId);
    return () => {
      console.log(playerId, positionId);
      this.props.changePlayerSelectionStatus(playerId);
      this.props.removePlayer(positionId);
    };
  }

  renderOverlay(color) {
    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: 1,
          opacity: 0.5,
          backgroundColor: color
        }}
      />
    );
  }
  render() {
    const {
      classes,
      playerId,
      position,
      id,
      selectPosition,
      selected,
      addPlayer,
      removePlayer,
      changePlayerSelectionStatus,
      players,
      connectDropTarget,
      isOver
    } = this.props;
    // const photoUrl = player ? player.imageUrl : blank;
    const positionBorderClasses = classNames({
      position__border: true,
      [`position__border--selected`]: isOver || selected
    });
    // console.log(playerId, players[playerId]);
    return connectDropTarget(
      <div
        style={{
          position: 'relative',
          padding: '15px',
          background: '#333'
        }}
        className={classes}>
        {playerId !== null && (
          <RemoveButton
            removePlayer={this.removeHandler(playerId, id)}
            positionId={id}
          />
        )}
        {playerId !== null && (
          <Player
            id={playerId}
            player={players[playerId]}
            inSquad={players[playerId].inSquad}
            addPlayer={addPlayer}
            changePlayerSelectionStatus={changePlayerSelectionStatus}
          />
        )}
        {isOver && this.renderOverlay('red')}
      </div>
    );
  }
}

{
  /* <Paper
className={classes}
zDepth={2}
onClick={() => selectPosition(position)}
>
<div className={positionBorderClasses}>
  <div className="position__content">
    {selected &&
      player && (
        <RemoveButton removePlayer={removePlayer} position={position} />
      )}
    <span className="position__name">{player && player.surname}</span>
    <img className="position__photo" src={photoUrl} />
  </div>
</div>
</Paper> */
}

PositionContainer.defaultProps = {};

PositionContainer.propTypes = {
  connectDropTarget: func.isRequired,
  isOver: bool.isRequired,
  player: oneOfType([
    object,
    () => {
      return null;
    }
  ]),
  selectPosition: func.isRequired
};

export default DropTarget(ItemTypes.PLAYER, posTarget, collect)(
  PositionContainer
);
