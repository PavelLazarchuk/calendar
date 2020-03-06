import { ADD_EVENT, DELETE_EVENT, UPDATE_EVENT } from './actionTypes';

const initialState = {
	list: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_EVENT:
			return {
				list: [...state.list, action.payload],
			};

		case DELETE_EVENT:
			return {
				list: action.payload,
			};

		case UPDATE_EVENT:
			return {
				list: action.payload,
			};

		default:
			return state;
	}
};
