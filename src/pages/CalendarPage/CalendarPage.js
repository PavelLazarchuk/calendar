import React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect, Switch, Route } from 'react-router-dom';

import Header from '../../components/Header';
import Day from '../../components/DayCalendar';
import Week from '../../components/WeekCalendar';
import Month from '../../components/MonthCalendar';

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
});

const Page = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Container>
				<h1 className={classes.title}>Calendar</h1>
				<Redirect to="month" />
				<Paper className={classes.paper}>
					<Header />
					<Switch>
						<Route path="/month" component={Month} />
						<Route path="/week" component={Week} />
						<Route path="/day" component={Day} />
					</Switch>
				</Paper>
			</Container>
		</div>
	);
};

export default Page;
