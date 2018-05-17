import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { ItemTypes } from '../constants/itemTypes';
import { addPlayer, removePlayer } from '../modules/squad';
import './Player.scss';

const playerSource = {
  beginDrag(props) {
    console.log(props)
    return {
      id: props.id,
      changePlayerSelectionStatus: props.changePlayerSelectionStatus
    };
  },
  endDrag(props, monitor) {
    if(monitor.didDrop()) {
      console.log('dropped on position');
      console
      console.log(props);
      if(!props.inSquad) {
        console.log('cahenge status')
        props.changePlayerSelectionStatus(props.id)
      }
      const dropResult = monitor.getDropResult();
      console.log(dropResult)
      props.addPlayer(props.id, dropResult.id);
    }


  }
};

const collect = (connect, monitor) => {
  // console.log(monitor.didDrop())
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
};

class Player extends Component {
  render() {
    const {
      id,
      player,
      selectHandler,
      addPlayer,
      connectDragSource,
      changePlayerSelectionStatus,
      isDragging
    } = this.props;
    console.log(this.props)
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
export default DragSource(ItemTypes.PLAYER, playerSource, collect)(Player);
