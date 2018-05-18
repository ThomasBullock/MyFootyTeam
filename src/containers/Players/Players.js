import React, { Component } from 'react';
import { string, number } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Players.scss';

import Panel from '../../components/Panel.js';
import PlayerCard from '../../components/Card';
import PlayerList from '../../components/PlayerList';
import Loader from '../../img/Ellipsis.svg';

import {
  changePlayerSelectionStatus,
  resetPlayersSelection
} from '../../modules/players';
import { selectPlayer } from '../../modules/player';
import { addPlayer, removePlayer, resetSquad } from '../../modules/squad';

class Players extends Component {
  resetHandler() {
    console.log(this.props);
    return () => {
      console.log('reset');
      this.props.resetSquad();
      this.props.resetPlayersSelection();
    };
  }

  render() {
    const { players, squad } = this.props;
    // console.log(players)
    const selected = players.length > 1 && players[0];
    if (players) {
      return (
        <div className="col-lg-4">
          <PlayerCard
            player={this.props.selected}
            addPlayer={this.props.addPlayer}
            removePlayer={this.props.removePlayer}
            resetHandler={this.resetHandler()}
            resetSquad={this.props.resetSquad}
            resetPlayersSelection={this.props.resetPlayersSelection}
            selectedPosition={this.props.selectedPosition}
          />
          {/*<PlayerControls/> */}
          <PlayerList
            squad={squad}
            playingList={players}
            selectHandler={this.props.selectPlayer}
            addPlayer={this.props.addPlayer}
            changePlayerSelectionStatus={this.props.changePlayerSelectionStatus}
          />
        </div>
      );
    } else {
      return (
        <div className="col col-3">
          <p>Loading</p>
        </div>
      );
    }
  }
}

Players.propTypes = {};

const mapStateToProps = state => {
  return {
    squad: state.squad,
    players: state.players,
    selected: state.players[state.player],
    selectedPosition: state.squad.filter((item, i) => {
      if (item.selected === true) {
        return item;
      }
    })[0]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectPlayer: number => dispatch(selectPlayer(number)),
    addPlayer: (player, positionId) => dispatch(addPlayer(player, positionId)),
    removePlayer: position => dispatch(removePlayer(position)),
    resetSquad: () => dispatch(resetSquad()),
    changePlayerSelectionStatus: playerId =>
      dispatch(changePlayerSelectionStatus(playerId)),
    resetPlayersSelection: () => dispatch(resetPlayersSelection())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);
