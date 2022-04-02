import { createContext, useContext } from "react";
import uuid from "react-uuid";

const ACTION_TYPES = {
	LOG_IN: "LOG_IN",
	ADD_ITEM: "ADD_ITEM",
	ADD_TODOS_TASK: "ADD_TODOS_TASK",
	DELETE_ITEM: "DELETE_ITEM",
	CHANGE_STATUS: "CHANGE_STATUS",
	PRINT_MODAL: "PRINT_MODAL",
};

let inititalState = {
	username: "",

	categories: [{ categoryId: 1, categoryTitle: "JS" }],
	tasks: [
		// {
		// 	taskID: 1,
		// 	title: "React",
		// 	description: "leran more info",
		// 	status: "todo",
		// 	priority: "low",
		// 	categoryId: "1",
		// },
		// {
		// 	taskID: 2,
		// 	title: "React",
		// 	description: "leran more info",
		// 	status: "doing",
		// 	priority: "low",
		// 	categoryId: "1",
		// },
		// {
		// 	taskID: 3,
		// 	title: "React",
		// 	description: "leran more info",
		// 	status: "done",
		// 	priority: "low",
		// 	categoryId: "1",
		// },
		// {
		// 	taskID: 4,
		// 	title: "React",
		// 	description: "leran more info",
		// 	status: "todo",
		// 	priority: "low",
		// 	categoryId: "1",
		// },
	],
};

const State = createContext(inititalState);
const useUserContext = () => useContext(State);

function reducer(state, action) {
	switch (action.type) {
		case ACTION_TYPES.LOG_IN: {
			return { ...state, username: action.inputValue };
		}
		case ACTION_TYPES.ADD_ITEM: {
			return {
				...state,
				categories: [
					...state.categories,
					{ categoryId: uuid(), categoryTitle: action.item },
				],
			};
		}
		case ACTION_TYPES.ADD_TODOS_TASK: {
			return {
				...state,
				tasks: [...state.tasks, action.elem],
			};
		}
		case ACTION_TYPES.DELETE_ITEM: {
			return {
				...state,
				tasks: state.tasks.filter((el) => el.taskID !== action.id),
			};
		}
		case ACTION_TYPES.CHANGE_STATUS: {
			let newArr = state.tasks.map((el) => {
				if (el.taskID !== action.id) {
					return el;
				} else {
					return { ...el, status: action.status };
				}
			});
			return { ...state, tasks: newArr };
		}
		case ACTION_TYPES.PRINT_MODAL: {
			let changeArr = state.tasks.map((el) => {
				if (el.taskID === action.id) {
					// el.priority = action.priority;
					// el.status = action.status;
					// el.title = action.title;
					return {
						...el,
						priority: action.priority,
						status: action.status,
						title: action.title,
					};
				} else {
					return el;
				}
			});
			return { ...state, tasks: changeArr };
		}
		default:
			throw new Error();
	}
}

export { reducer, inititalState, State, useUserContext, ACTION_TYPES };
