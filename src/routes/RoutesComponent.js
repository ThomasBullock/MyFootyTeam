import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import SquadSelector from '../containers/SquadSelector/SquadSelector';
import Videos from '../containers/Videos/Videos';
import EditPlayer from '../containers/Admin/EditPlayer/EditPlayer';
import Admin from '../containers/Admin/Admin';

class RoutesComponent extends Component {
  render() {
    return (
      <div className="main">
        <Route exact path="/" component={SquadSelector}/>
        <Route path="/videos" component={Videos} />
        <Route path="/admin" component={Admin} />
        <Route path="/player/:id/edit" component={EditPlayer} />      
      </div>
    );
  }
}

export default RoutesComponent;