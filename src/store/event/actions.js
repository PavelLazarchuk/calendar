import { ADD_EVENT, DELETE_EVENT, UPDATE_EVENT } from './actionTypes';

export const addEvent = payload => {
	return {
		type: ADD_EVENT,
		payload,
	};
};

export const deleteEvent = payload => {
	return {
		type: DELETE_EVENT,
		payload,
	};
};

export const updateEvent = payload => {
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
