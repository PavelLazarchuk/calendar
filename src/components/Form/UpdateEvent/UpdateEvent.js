import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

import useStyles from '../styles';
import Input from '../../../shared/Input';
import Button from '../../../shared/Button';
import getDateString from '../../../utils/getDateString';
import getTimeString from '../../../utils/getTimeString';
import { updateOneEvent, deleteOneEvent } from '../../../store/event/actions';

const UpdateEvent = ({
	events,
	position,
	eventList,
	setSlotEvent,
	deleteOneEvent,
	updateOneEvent,
}) => {
	const classes = useStyles();
	const [value, setValue] = useState({
		id: events.id,
		title: events.title,
		start: getDateString(events.start),
		time: getTimeString(events.start),
		notes: events.notes,
	});

	useEffect(() => {
		setValue({
			id: events.id,
			title: events.title,
			start: getDateString(events.start),
			time: getTimeString(events.start),
			notes: events.notes,
		});
	}, [events]);

	const handleChange = e => {
		setValue({ ...value, [e.target.name]: e.target.value });
	};

	const deleteEvent = () => {
		deleteOneEvent(eventList, value.id);
		setSlotEvent(false);
	};

	const update = () => {
		const idx = eventList.indexOf(events);
		const updatedEvent = {
			id: value.id,
			title: value.title,
			notes: value.notes,
			start: new Date(`${value.start}T${value.time}`),
			end: new Date(`${value.start}T${value.time}`),
		};
		const nextEvents = [...eventList];
		nextEvents.splice(idx, 1, updatedEvent);

		if (updatedEvent.title.length <= 30) {
			updateOneEvent(nextEvents);
			setSlotEvent(false);
		}
	};

	return (
		<div
			className={classes.absolute}
			style={{
				top: position.top - 20,
				left: position.left,
				color: 'red',
			}}
		>
			<div className={classes.root}>
				<div className={classes.right}>
					<CancelOutlinedIcon
						onClick={() => setSlotEvent(false)}
						className={classes.exit}
					/>
				</div>
				<label className={classes.lable}>event name</label>
				<Input
					name="title"
					type="text"
					value={value.title}
					onChange={handleChange}
					className={classes.input}
				/>
				<label className={classes.lable}>event date</label>
				<Input
					name="start"
					type="date"
					value={value.start}
					onChange={handleChange}
					className={classes.input}
				/>
				<label className={classes.lable}>event time</label>
				<Input
					name="time"
					type="time"
					value={value.time}
					onChange={handleChange}
					className={classes.input}
				/>
				<label className={classes.lable}>notes</label>
				<Input
					name="notes"
					type="text"
					value={value.notes}
					onChange={handleChange}
					className={classes.input}
				/>
				<div className={classes.flex}>
					<Button onClick={deleteEvent} className={classes.cancel}>
						DISCARD
					</Button>
					<Button onClick={update} className={classes.save}>
						EDIT
					</Button>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = ({ event }) => {
	return {
		eventList: event.list,
	};
};

const mapDispatchToProps = {
	deleteOneEvent,
	updateOneEvent,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEvent);
