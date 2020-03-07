import React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import Calendar from '../../components/Calendar';

const useStyles = makeStyles({
	root: {
		background: '#F0F0F7',
		padding: '40px 0 100px 0',
	},
	title: {
		color: '#43425D',
		fontSize: 28,
		marginBottom: 30,
	},
	paper: {
		padding: '20px',
	},
	txt: {
		fontSize: 18,
		color: '#43425D',
		marginBottom: 20,
	},
});

const Page = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Container>
				<h1 className={classes.title}>Calendar</h1>
				<Paper className={classes.paper}>
					<div className={classes.txt}>Calendar View</div>
					<Calendar />
				</Paper>
			</Container>
		</div>
	);
};

export default Page;
