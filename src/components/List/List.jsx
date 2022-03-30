import React from "react";
import { useState } from "react";
import { useLocation } from "react-router";
import { ACTION_TYPES } from "../../state/state";
import ListItem from "../ListItem/ListItem";

export default function List({ data, dispatch, elem, index, listNameIndex }) {
	const [todosValue, setTodosValue] = useState("");
	const [descValue, setDescValue] = useState("");
	const [optionValue, setOptionValue] = useState("");

	const { state } = useLocation();

	const hangleTodosValue = (e) => {
		setTodosValue(e.target.value);
	};

	const addTodosTask = () => {
		dispatch({
			type: ACTION_TYPES.ADD_TODOS_TASK,
			value: {
				status: elem.taskname,
				id: index,
				title: todosValue,
				description: descValue,
				priority: optionValue,
			},
			i: index,
			listNameIndex,
		});
		setTodosValue("");
		setDescValue("");
		setOptionValue("");
	};
	const changeDescription = (e) => {
		setDescValue(e.target.value);
	};
	const handleOption = (e) => {
		setOptionValue(e.target.value);
	};

	// console.log(elem, "element");
	return (
		<div>
			<h3>{elem.taskname}</h3>
			<span>Title:</span>
			<input onChange={hangleTodosValue} value={todosValue} type="text" />

			<span>Desctriotion:</span>
			<input onChange={changeDescription} value={descValue} type="text" />
			<select onChange={handleOption}>
				<option>high</option>
				<option>medium</option>
				<option>low</option>
			</select>
			<button onClick={addTodosTask}>Add</button>
			{data.workspase.map((el, i) => (
				<ListItem key={i} el={el} index={index} />
			))}
		</div>
	);
}
