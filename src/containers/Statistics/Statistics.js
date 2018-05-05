import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import './Statistics.scss';

class Statistics extends Component {
    averageStat = (property) => {
        let players = 0;

        const total = this.props.squad.filter( (position) => {
            if(position.player) {
                return position;
            }
        }).reduce( (accumulator, currentValue, i, arr) => {    
            if(currentValue.player) {
                // console.log('yes')
                players++;
                return accumulator += currentValue.player[property];
            } else {
                return 0;
            }
        }, 0)
        return (players !== 0) ? (total / players).toFixed(1) : 0;
    }

    averageAge = () => {
        let players = 0;

        const total = this.props.squad.filter( (position) => {
            if(position.player) {
                return position;
            }
        }).reduce( (accumulator, currentValue, i, arr) => {    
            if(currentValue.player) {
                // console.log('yes')
                players++;
                return accumulator += moment().diff(currentValue.player.dob, 'years') ;
            } else {
                return 0;
            }
        }, 0)
        return (players !== 0) ? (total / players).toFixed(1) : 0;        
    }

    render() {
        console.log(this.averageStat('height'))
        return (
            <div className="statistics">
                <ul className="statistics__list">
                    <li><span>Age: </span><span>{this.props.squad && this.averageAge()}</span></li>
                    <li><span>Height: </span><span>{this.props.squad && this.averageStat('height')}</span></li>
                    <li><span>Games: </span><span>{this.props.squad && this.averageStat('games')}</span></li>
                </ul>    
            </div>
        );
    }
}

Statistics.propTypes = {

};

const mapStateToProps = (state) => {
    return {
        squad: state.squad
    }
}

export default connect(mapStateToProps)(Statistics);