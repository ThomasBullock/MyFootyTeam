import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Transition, TransitionGroup, CSSTransition } from 'react-transition-group'
import './Field.scss';

import Position from '../../components/Position';

class Field extends Component {
	renderPositions() {
		return this.props.squad.map((pos) => {
			console.log(pos.player)
			return(
				<CSSTransition classNames="position" key={pos.position} timeout={{ enter: 2550, exit: 550 }}>
					<Position
						key={pos.position}
						player={pos.player}
					/>
				</CSSTransition>	
			)
		})
	}
	
	render() {
		const duration = 300;

		const defaultStyle = {
		  transition: `opacity ${duration}ms ease-in-out`,
		  opacity: 0,
		}

		const transitionStyles = {
		  entering: { opacity: 0 },
		  entered:  { opacity: 1 },
		};

		const Fade = ({ in: inProp }) => (
		  <Transition in={inProp} timeout={duration}>
		    {(state) => (
		      <div style={{
		        ...defaultStyle,
		        ...transitionStyles[state]
		      }}>
		        I'm a fade Transition!
		      </div>
		    )}
		  </Transition>
		);		
		// for (var prop in this.props.squad) {
		// 	console.log(prop)
		// 	console.log(this.props.squad[prop]);
		// }
				
		console.log(this.props.squad.hasOwnProperty("FullBack"))
		// Object.defineProperty(this.props.squad, Symbol.iterator, {
		// 	enumerable: false,
		// 	writable: false,
		// 	configurable: true,
		// 	value: function() {
		// 		var o = this;
		// 		var idx = 0;
		// 		var ks = Object.keys( o );
		// 		return {
		// 			next: function() {
		// 				return {
		// 					value: o[ks[idx++]],
		// 					done: (idx > ks.length)
		// 				};
		// 			}
		// 		};
		// 	}
		// } );
		
		// for (var v of this.props.squad) {
		// 	console.log( v );
		// 	console.log(this.props.squad['v'])
		// }		
		
		// this.props.squad.map( item => console.log(item.player))
		
		// for (var prop in this.props.squad) {
		// 	console.log(prop)
		// 	console.log(this.props.squad[prop]);
		// }
		
		return(

				
				<div className="col-lg-8 field">
					<TransitionGroup component="div" className="field__wrapper" appear={true}> 
						{this.renderPositions()}
					</TransitionGroup>
					{Fade(1000)}
				</div>

		)
	}
}

const mapStateToProps = (state) => {
	return {
		squad: state.squad
	}
} 

const mapDispatchToProps = () => {
	return {
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Field);