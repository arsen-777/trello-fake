import { ACTION_TYPES } from "../../App";
import List from "../List/List";
import { useLocation } from "react-router";
export default function ToDoList({ dispatch, data }) {
	const { state } = useLocation();

	return (
		<div>
			{data.workspase[state.index].tasks.map((elem, i) => {
				return (
					<div key={i}>
						<List
							data={data}
							dispatch={dispatch}
							elem={elem}
							index={i}
							listNameIndex={state.index}
						/>
					</div>
				);
			})}
		</div>
	);
}
