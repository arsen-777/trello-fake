import React from "react";
import ColumeItem from "../ColumeItems/ColumeItem";
import { useState } from "react";
import { useUserContext } from "../../state/state";
import { ACTION_TYPES } from "../../state/state";
import uuid from "react-uuid";
import { useStyles } from "./columeStyle";

export default function Colume({ taskList, columnTitle, categoryId }) {
	const [todosValue, setTodosValue] = useState("");
	const [descValue, setDescValue] = useState("");
	const [optionValue, setOptionValue] = useState("");
	const { dispatch } = useUserContext();
	const styles = useStyles();
	const hangleTodosValue = (e) => {
		if (todosValue.length >= 0) {
			setTodosValue(e.target.value);
		}
	};
	const changeDescription = (e) => {
		setDescValue(e.target.value);
	};
	const handleOption = (e) => {
		setOptionValue(e.target.value);
	};
	const addTodosTask = () => {
		dispatch({
			type: ACTION_TYPES.ADD_TODOS_TASK,
			elem: {
				taskID: uuid(),
				title: todosValue,
				description: descValue,
				status: columnTitle,
				priority: optionValue,
				categoryId: categoryId,
			},
		});
	};

	const createTask = () => {
		if (todosValue.trim().length > 0) {
			setTodosValue("");
			setDescValue("");
			setOptionValue("");
			addTodosTask();
		}
	};
	return (
		<div>
			<div className={styles.column}>
				<h3>{columnTitle.toUpperCase()}</h3>
				<div>
					<span>Title:</span>
					<input onChange={hangleTodosValue} value={todosValue} type="text" />
				</div>
				<div className={styles.txtArea}>
					<span>Desc:</span>
					<textarea
						onChange={changeDescription}
						value={descValue}
						type="text"
					/>
				</div>
				<div>
					<select onChange={handleOption}>
						<option>high</option>
						<option>medium</option>
						<option>low</option>
					</select>
				</div>

				<div>
					<button onClick={createTask}>Add</button>
				</div>
				{taskList.map((elem, i) => (
					<ColumeItem key={i} elem={elem} />
				))}
			</div>
		</div>
	);
}
