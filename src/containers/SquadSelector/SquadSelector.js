import React, { Component } from 'react';
import { array } from 'prop-types';
import { connect } from 'react-redux';

import { requestPlayerList } from '../../modules/players';

import Field from '../Field/Field';
import Players from '../Players/Players';

class SquadSelector extends Component {
	componentWillMount() {
		// console.log('components mounted')
		// this.props.requestPlayerList();
	}

  render() {
  	const { players } = this.props;
    return (
        <div className="container-fluid">
        	<div className="row">
                <Field />
                <Players />
        	</div>   	
        </div>
    );
  }
}

SquadSelector.propTypes = {
	players: array.isRequired
}

const mapStateToProps = (state) => {
	return {
		players: state.players
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		requestPlayerList: () => dispatch(requestPlayerList())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SquadSelector);
