import { ADD_EVENT, DELETE_EVENT, UPDATE_EVENT } from './actionTypes';

const addEvent = payload => {
	return {
		type: ADD_EVENT,
		payload,
	};
};

const deleteEvent = payload => {
	return {
		type: DELETE_EVENT,
		payload,
	};
};

const updateEvent = payload => {
	return {
		type: UPDATE_EVENT,
		payload,
	};
};

export const addOneEvent = data => {
	return dispatch => {
		dispatch(addEvent(data));
	};
};

export const updateOneEvent = data => {
	return dispatch => {
		dispatch(updateEvent(data));
	};
};

export const deleteOneEvent = (state, id) => {
	return dispatch => {
		const index = state.findIndex(e => e.id === id);
		state.splice(index, 1);
		dispatch(deleteEvent(state));
	};
};

export const moveOneEvent = data => {
	return dispatch => {
		dispatch(updateEvent(data));
	};
};
