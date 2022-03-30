import { createContext, useContext } from "react";

const ACTION_TYPES = {
	LOG_IN: "LOG_IN",
	ADD_ITEM: "ADD_ITEM",
	ADD_TODOS_TASK: "ADD_TODOS_TASK",
};
let inititalState = {
	username: "",
	workspase: [
		{
			workspaseName: "test1",
			tasks: [
				// { taskname: "todo", intasks: [] },
				// { taskname: "doing", intasks: [] },
				// { taskname: "done", intasks: [] },
			],
		},
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
			console.log(action.item);
			return {
				...state,
				workspase: [
					...state.workspase,
					{
						workspaseName: action.item,
						tasks: [
							{ taskname: "todo", intasks: [] },
							{ taskname: "doing", intasks: [] },
							{ taskname: "done", intasks: [] },
						],
					},
				],
			};
		}
		case ACTION_TYPES.ADD_TODOS_TASK: {
			let updatedTasks = state.workspase[action.listNameIndex].tasks.map(
				(item, index) => {
					if (index !== action.i) {
						return item;
					} else {
						return { ...item, intasks: [...item.intasks, action.value] };
					}
				}
			);
			let newWorkspace = [
				...state.workspase,
				{ ...state.workspase[action.listNameIndex], tasks: updatedTasks },
			];
			console.log("newWorkspace", newWorkspace);
			let newState = {
				...state,
				workspase: newWorkspace,
			};

			return newState;
		}

		default:
			throw new Error();
	}
}

export { reducer, inititalState, State, useUserContext, ACTION_TYPES };
