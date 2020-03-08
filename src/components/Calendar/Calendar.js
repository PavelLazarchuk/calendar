import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { momentLocalizer } from 'react-big-calendar';

import Form from '../Form';
import EventCard from '../EventCard';
import getPosition from '../../utils/getPosition';
import DraggableCalendar from '../DraggableCalendar';
import { moveOneEvent } from '../../store/event/actions';

const CalendarWrap = ({ eventList, moveOneEvent }) => {
	const [slot, setSlot] = useState(false);
	const [events, setEvent] = useState({});
	const [slotEvent, setSlotEvent] = useState(false);
	const [eventsL, setEventsL] = useState(eventList);
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

	const moveEvent = ({ event, start, end }) => {
		const idx = eventsL.indexOf(event);
		const updatedEvent = { ...event, start, end };
		const nextEvents = [...eventsL];
		nextEvents.splice(idx, 1, updatedEvent);

		moveOneEvent(nextEvents);
	};

	useEffect(() => {
		setEventsL(eventList);
	}, [eventList]);

	return (
		<div className="position-relative" id="position">
			<DndProvider backend={HTML5Backend}>
				<DraggableCalendar
					selectable={true}
					showMultiDayTimes
					startAccessor="start"
					events={eventList}
					endAccessor="end"
					timeslots={4}
					components={{
						event: EventCard,
					}}
					onEventDrop={moveEvent}
					onSelectSlot={onSelectSlot}
					onSelectEvent={onSelectEvent}
					localizer={momentLocalizer(moment)}
				/>
			</DndProvider>

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

export default connect(mapStateToProps, { moveOneEvent })(CalendarWrap);
