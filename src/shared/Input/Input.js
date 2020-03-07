import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	input: {
		color: '#D6D6D6',
		fontSize: 14,
		borderBottom: '1px solid #43425D80',
	},
});

const Input = ({ name, type, value, className, onChange, defaultValue }) => {
	const classes = useStyles();
	return (
		<input
			name={name}
			type={type}
			value={value}
			onChange={onChange}
			defaultValue={defaultValue}
			className={`${classes.input} ${className}`}
		/>
	);
};

export default Input;
