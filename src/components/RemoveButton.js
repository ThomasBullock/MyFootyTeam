import React from 'react';
import IconButton from 'material-ui/IconButton';
import Clear from 'material-ui/svg-icons/content/clear';
import './RemoveButton.scss';

const RemoveButton = ({removePlayer, positionId}) => (
        <div className="remove-btn"
            onClick={removePlayer}
            >
            <Clear />
        </div>
);

export default RemoveButton;