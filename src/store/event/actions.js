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

export const updateOneEvent = (state, data) => {
	return dispatch => {
		const index = state.findIndex(e => e.id === data.id);
		state.splice(index, 1, data);
		dispatch(updateEvent(state));
	};
};

export const deleteOneEvent = (state, id) => {
	return dispatch => {
		const index = state.findIndex(e => e.id === id);
		state.splice(index, 1);
		dispatch(deleteEvent(state));
	};
};
