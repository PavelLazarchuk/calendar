import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	btn: {
		fontSize: 14,
		border: 0,
		outline: 0,
		cursor: 'pointer',
		background: 'transparent',
	},
});

const Button = ({ onClick, className, children }) => {
	const classes = useStyles();
	return (
		<button className={`${classes.btn} ${className}`} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
