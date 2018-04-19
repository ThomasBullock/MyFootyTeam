import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import SquadSelector from '../containers/SquadSelector/SquadSelector';
import Videos from '../containers/Videos/Videos';

class RoutesComponent extends Component {
  render() {
    return (
      <div className="main">
        <Route exact path="/" component={SquadSelector}/>
        <Route path="/videos" component={Videos} />
        <Route path="/admin" component={Videos} />        
      </div>
    );
  }
}

export default RoutesComponent;