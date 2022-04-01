import { useParams } from "react-router";
import { useUserContext } from "../../state/state";
import Colume from "../Colums/Colume";

export default function ToDoList() {
	const { categoryId } = useParams();

	const {
		state: { tasks },
	} = useUserContext();

	const todoTasks = tasks.filter(
		(task) => task.status === "todo" && task.categoryId === categoryId
	);

	const doingTasks = tasks.filter(
		(task) => task.status === "doing" && task.categoryId === categoryId
	);

	const doneTasks = tasks.filter(
		(task) => task.status === "done" && task.categoryId === categoryId
	);
	console.log(todoTasks, doingTasks, doneTasks);
	return (
		<div>
			<div className="flexed">
				<Colume
					taskList={todoTasks}
					columnTitle="todo"
					categoryId={categoryId}
				/>
				<Colume
					taskList={doingTasks}
					columnTitle="doing"
					categoryId={categoryId}
				/>
				<Colume
					taskList={doneTasks}
					columnTitle="done"
					categoryId={categoryId}
				/>
			</div>
		</div>
	);
}
