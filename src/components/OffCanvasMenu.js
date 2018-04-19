import React, { Component, Fragment } from 'react';
import Routes from '../routes/Routes';
import Drawer from 'material-ui/Drawer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FormatIndentDecrease from 'material-ui-icons/FormatIndentDecrease';

import './OffCanvasMenu.scss';

class OffCanvasMenu extends Component {
  constructor () {  // move this to redux store!
    super();
    this.state = { menuOpen: false };
    // this.menuCollapseWithResize = this.menuCollapseWithResize.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }	

  // Sidebar toggle
  toggleMenu() {
    console.log('click toggle')
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }));
  }
	
  render(){
  	return(
      <Fragment>  
  	    <Drawer open={this.state.menuOpen}
  	      className=""
  	      containerClassName="sidebar-initial-color"
  	    >
  	      <Routes />

  	    </Drawer>    	
        <FloatingActionButton className="open-drawer-btn"
          secondary={true}        
          onClick={this.toggleMenu}
        >
          <FormatIndentDecrease />
        </FloatingActionButton>
      </Fragment>    

  	)
	
  }
}

 
export default OffCanvasMenu;