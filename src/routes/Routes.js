import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import MenuWithIcons from '../components/MenuWithIcons';

class Routes extends Component {
	render() {
		return(
			<div className="sidebar-nav">
				{/*<ul>
					<li>
						<Link to="/"><span className="material-icons">border_color</span>Squad Selector</Link>
					</li>
					<li>
						<Link to="/videos"><span className="material-icons">dashboard</span>Inspiring Bomber Vids</Link>
					</li>
					<li className="divider"></li>
					<li>
						<Link to="/admin"><span className="material-icons">dashboard</span>Admin Area</Link>
					</li>
				</ul>
			*/}
				<MenuWithIcons />
			</div>		
		)
	}
}

export default Routes;