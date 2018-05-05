import React, { Component, Fragment } from 'react';
import { func, object } from 'prop-types';
import { connect } from 'react-redux';

import { removePlayer, selectPosition} from '../../modules/squad';
import { Transition, TransitionGroup, CSSTransition } from 'react-transition-group'
import './Field.scss';

import Position from '../../components/Position';
import Statistics from '../Statistics/Statistics';

class Field extends Component {
	renderPositions() {
		return this.props.squad.map((pos, i) => {
			let positionClass;
			switch(true) {
				case i === 0 || i === 15:
					positionClass = 'position--left-pocket';
					break;
				case i === 2 || i === 17:
				positionClass = 'position--right-pocket';
				break;					
				case i > 17:
					positionClass = 'position--bench';
					break;
				default:
					positionClass = 'position';
					break; 
			}
			console.log(positionClass);

			return(
					<Position
						classes={positionClass}
						key={pos.position}
						position={pos.position}
						selected={pos.selected}
						player={pos.player}
						selectPosition={this.props.selectPosition}
						removePlayer={this.props.removePlayer}
					/>
			)
		})
	}
	
	render() {	
		return(
				<div className="col-lg-8">
					<Statistics />
					<div className="field">
						<div className="field__wrapper" > 
							{this.renderPositions()}
						</div>
					</div>
				</div>
		)
	}
}


Field.propTypes = {
	selectPosition: func.isRequired
}

const mapStateToProps = (state) => {
	return {
		squad: state.squad
	}
} 

const mapDispatchToProps = (dispatch) => {
	return {
		selectPosition: (position) => dispatch(selectPosition(position)),
		removePlayer: (position) => dispatch(removePlayer(position)),			
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Field);