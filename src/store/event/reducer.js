import { ADD_EVENT, DELETE_EVENT, UPDATE_EVENT } from './actionTypes';

const initialState = {
	list: [
		{
			id: 0,
			title: 'first',
			notes: 'description',
			start: new Date(2020, 2, 3),
			end: new Date(2020, 2, 3),
		},
		{
			id: 1,
			title: 'second',
			notes: 'description2',
			start: new Date(2020, 2, 4),
			end: new Date(2020, 2, 4),
		},
		{
			id: 2,
			title: '3 dcsdcd',
			notes: 'description3',
			start: new Date(2020, 2, 6),
			end: new Date(2020, 2, 6),
		},
	],
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
