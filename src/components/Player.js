import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { ItemTypes } from '../constants/itemTypes';
import './Player.scss';

const playerSource = {
  beginDrag(props) {
    return {};
  }
};

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
};

class Playerr extends Component {
  render() {
    const {
      id,
      player,
      selectHandler,
      connectDragSource,
      isDragging
    } = this.props;
    return connectDragSource(
      <div
        className="player"
        style={{
          opacity: isDragging ? 0.5 : 1,
          cursor: 'move'
        }}
        onClick={() => selectHandler(id)}>
        <span className="player__name">{player.name}</span>
        <span className="player__surname">{player.surname}</span>
        <img src={player.imageUrl} alt={`${player.name} ${player.surname}`} />
      </div>
    );
  }
}
// Player.defaultProps = {
//     player: {
//         name: null,
//         surname: null,

//     }
//   }
export default DragSource(ItemTypes.PLAYER, playerSource, collect)(Playerr);
