import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';

import './calendar.css';
import Form from '../Form';
import EventCard from '../EventCard';
import getPosition from '../../utils/getPosition';

const CalendarWrap = ({ eventList }) => {
	const [slot, setSlot] = useState(false);
	const [events, setEvent] = useState({});
	const localizer = momentLocalizer(moment);
	const [slotEvent, setSlotEvent] = useState(false);
	const [eventLisiState, setEventLisiState] = useState([]);
	const [position, setPosition] = useState({
		top: 0,
		left: 0,
	});

	const onSelectEvent = (event, e) => {
		setEvent(event);
		setSlotEvent(true);
		setPosition(getPosition(e));
		setSlot(false);
	};

	const onSelectSlot = event => {
		setEvent(event);
		setSlot(true);
		setSlotEvent(false);
	};

	useEffect(() => {
		setEventLisiState(eventList);
	}, [eventList, eventLisiState]);

	return (
		<div className="position-relative" id="position">
			<Calendar
				selectable={true}
				showMultiDayTimes
				events={eventLisiState}
				startAccessor="start"
				endAccessor="end"
				timeslots={4}
				components={{
					event: EventCard,
				}}
				localizer={localizer}
				onSelectSlot={onSelectSlot}
				onSelectEvent={onSelectEvent}
			/>
			<Form
				slot={slot}
				events={events}
				setSlot={setSlot}
				position={position}
				slotEvent={slotEvent}
				setSlotEvent={setSlotEvent}
			/>
		</div>
	);
};

const mapStateToProps = ({ event }) => {
	return {
		eventList: event.list,
	};
};

export default connect(mapStateToProps)(CalendarWrap);
