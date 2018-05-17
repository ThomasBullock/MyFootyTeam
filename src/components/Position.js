import React, { Component } from 'react';
import { func, object, oneOfType, bool } from 'prop-types';
import RemoveButton from './RemoveButton';
import { Paper } from 'material-ui';
import classNames from 'classnames';
import blank from '../img/Blank_t.png';
import { addPlayer, removePlayer, resetSquad } from '../modules/squad';
import { ItemTypes } from '../constants/itemTypes';
import { DropTarget } from 'react-dnd';
import './Position.scss';


// const posTarget = {
//   drop(props, monitor) {
//     // console.log(monitor.getItem())
//     addPlayer(props.player, props.position);
//   }
// };

// const collect = (connect, monitor) => {
//   console.log(connect.dropTarget())
//   return {
//     connectDropTarget: connect.dropTarget(),
//     isOver: monitor.isOver()
//   };
// }

class Position extends Component {

  render() {
    const {
      // classes,
      // player,
      // position,
      // selectPosition,
      // selected,
      // removePlayer,
      // connectDropTarget, isOver
    } = this.props;
    // const photoUrl = player ? player.imageUrl : blank;
    // const positionBorderClasses = classNames({
    //   position__border: true,
    //   [`position__border--selected`]: isOver || selected
    // });
    // console.log(connectDropTarget)
    return (
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}>

          {this.props.children}

      </div>  
    );
  }
};

{/* <Paper
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
</Paper> */}



// BoardSquare.propTypes = {
//   x: PropTypes.number.isRequired,
//   y: PropTypes.number.isRequired,
//   connectDropTarget: PropTypes.func.isRequired,
//   isOver: PropTypes.bool.isRequired,
//   canDrop: PropTypes.bool.isRequired
// };
export default Position;
