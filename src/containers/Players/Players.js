import React, { Component } from 'react';
import { string, number } from 'prop-types';
import { connect } from 'react-redux';
import './Players.scss';

import Panel from '../../components/Panel.js';
import PlayerCard from '../../components/Card';
import PlayerList from '../../components/PlayerList';
import Loader from '../../img/Ellipsis.svg';

class Players extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			selected: this.props.selected
		}
		
		this.selectHandler = this.selectHandler.bind(this);
	}

	componentWillUpdate(nextProps, nextState) {
		console.log(this.props);
		console.log(nextProps)
		if(this.props.selected !== nextProps.selected) {
			this.setState({
				selected: nextProps.selected
		})		
		}

	}
	
	selectHandler(i) {
		console.log(this);
		this.setState({
			selected: this.props.players[i]
		})
	}
	
	render() {
		const { players } = this.props;
		console.log(players)		
		const selected = players.length > 1 && players[0];
		if(players) {
			return(
				<div className="col-lg-4">
					<PlayerCard 
							player={this.state.selected}
					/>
					{/*<PlayerControls/> */}
					<PlayerList playingList={players} selectHandler={this.selectHandler}/>		

						
				</div>				
			)
		} else {
			return(
				
				<div className="col col-3">

					<p>Loading</p>			

				</div>
			)			
		}

	}
}

Players.propTypes = {
	
}

const mapStateToProps = (state) => {
	return {
		players: state.players,
		selected: state.players[0]
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Players);