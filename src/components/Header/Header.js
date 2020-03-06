import React from 'react';
import { NavLink } from 'react-router-dom';

import useStyles from './styles';

const Header = () => {
	const classes = useStyles();
	return (
		<div className={classes.flex}>
			<div className={classes.text}>Calendar View</div>
			<nav className={classes.nav}>
				<NavLink
					to="/month"
					className={classes.link}
					activeClassName={classes.active}
				>
					Month
				</NavLink>
				<NavLink
					to="/week"
					className={classes.link}
					activeClassName={classes.active}
				>
					Week
				</NavLink>
				<NavLink
					to="/day"
					className={classes.link}
					activeClassName={classes.active}
				>
					Day
				</NavLink>
			</nav>
		</div>
	);
};

export default Header;
