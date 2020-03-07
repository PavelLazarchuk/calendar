import React from 'react';

import NewEvent from './NewEvent';
import UpdateEvent from './UpdateEvent';

const Form = ({ slot, events, setSlot, position, slotEvent, setSlotEvent }) => {
	return (
		<>
			{slot && <NewEvent setSlot={setSlot} events={events} />}
			{slotEvent && (
				<UpdateEvent
					events={events}
					position={position}
					setSlotEvent={setSlotEvent}
				/>
			)}
		</>
	);
};

export default Form;
