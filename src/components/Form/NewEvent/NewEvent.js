import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

import useStyles from '../styles';
import Input from '../../../shared/Input';
import Button from '../../../shared/Button';
import getDateString from '../../../utils/getDateString';
import getTimeString from '../../../utils/getTimeString';
import { addOneEvent } from '../../../store/event/actions';

const NewEvent = ({ setSlot, events, addOneEvent }) => {
	const classes = useStyles();
	const [value, setValue] = useState({
		title: '',
		start: getDateString(events.start),
		time: getTimeString(events.start),
		notes: '',
	});

	useEffect(() => {
		setValue({
			...value,
			start: getDateString(events.start),
			time: getTimeString(events.start),
		});
	}, [events.start]);

	const handleChange = e => {
		setValue({ ...value, [e.target.name]: e.target.value });
	};

	const addEvent = () => {
		const data = {
			id: Date.now(),
			start: new Date(`${value.start}T${value.time}`),
			end: new Date(`${value.start}T${value.time}`),
			title: value.title,
			notes: value.notes,
		};
		if (data.title.length <= 30) {
			addOneEvent(data);
			setSlot(false);
		}
	};

	return (
		<div
			className={classes.absolute}
			style={{ top: events.box.y - 170, left: events.box.x - 70 }}
		>
			<div className={classes.root}>
				<div className={classes.right}>
					<CancelOutlinedIcon
						onClick={() => setSlot(false)}
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
					<Button onClick={() => setSlot(false)} className={classes.cancel}>
						Cancel
					</Button>
					<Button onClick={addEvent} className={classes.save}>
						Save
					</Button>
				</div>
			</div>
		</div>
	);
};

export default connect(null, { addOneEvent })(NewEvent);
