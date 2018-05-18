import React, { Component, Fragment } from 'react';
import { func, object } from 'prop-types';
import { connect } from 'react-redux';

import { addPlayer, removePlayer, selectPosition } from '../../modules/squad';
import {
  Transition,
  TransitionGroup,
  CSSTransition
} from 'react-transition-group';
import './Field.scss';

import Position from '../../components/Position';
import Statistics from '../Statistics/Statistics';
import Player from '../../components/Player';
import { selectPlayer } from '../../modules/player';
import { changePlayerSelectionStatus } from '../../modules/players';
import PositionContainer from '../PositionContainer/PositionContainer';

class Field extends Component {
  renderPositions() {
    return this.props.squad.map((pos, i) => {
      let positionClass;
      switch (true) {
        case i === 0 || i === 15:
          positionClass = 'position--left-pocket';
          break;
        case i === 2 || i === 17:
          positionClass = 'position--right-pocket';
          break;
        case i === 3 || i === 12:
          positionClass = 'position--left-flank';
          break;
        case i === 5 || i === 14:
          positionClass = 'position--right-flank';
          break;
        case i > 17:
          positionClass = 'position--bench';
          break;
        default:
          positionClass = 'position';
          break;
      }
      // console.log(pos)
      return (
        <PositionContainer
          classes={positionClass}
          key={pos.position}
          id={pos.id}
          position={pos.position}
          selected={pos.selected}
          playerId={pos.playerId}
          selectPosition={this.props.selectPosition}
          addPlayer={this.props.addPlayer}
          removePlayer={this.props.removePlayer}
          changePlayerSelectionStatus={this.props.changePlayerSelectionStatus}
          players={this.props.players}>
          {/* {pos.playerId && <Player id={pos.playerId} player={players[pos.playerId]} selectHandler={selectPlayer} />} */}
        </PositionContainer>
      );
    });
  }

  render() {
    return (
      <div className="col-lg-8">
        <Statistics />
        <div className="field">
          <div className="field__wrapper">{this.renderPositions()}</div>
        </div>
      </div>
    );
  }
}

Field.propTypes = {
  selectPosition: func.isRequired
};

const mapStateToProps = state => {
  return {
    squad: state.squad,
    players: state.players
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectPosition: position => dispatch(selectPosition(position)),
    addPlayer: (player, positionId) => dispatch(addPlayer(player, positionId)),
    removePlayer: position => dispatch(removePlayer(position)),
    changePlayerSelectionStatus: playerId =>
      dispatch(changePlayerSelectionStatus(playerId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Field);
