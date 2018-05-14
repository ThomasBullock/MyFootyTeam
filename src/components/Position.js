import React from 'react';
import { func, object, oneOfType } from 'prop-types';
import RemoveButton from './RemoveButton';
import { Paper } from 'material-ui';
import classNames from 'classnames';
import blank from '../img/Blank_t.png';
import './Position.scss';

const Position = props => {
  const {
    classes,
    player,
    position,
    selectPosition,
    selected,
    removePlayer
  } = props;
  const photoUrl = player ? player.imageUrl : blank;
  const positionBorderClasses = classNames({
    position__border: true,
    [`position__border--selected`]: selected
  });
  return (
    <Paper
      className={classes}
      zDepth={2}
      onClick={() => selectPosition(position)}>
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
    </Paper>
  );
};

Position.defaultProps = {};

Position.propTypes = {
  player: oneOfType([
    object,
    () => {
      return null;
    }
  ]),
  selectPosition: func.isRequired
};

export default Position;
