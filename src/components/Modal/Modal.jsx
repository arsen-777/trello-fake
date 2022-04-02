import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import useClickOutside from "../../hooks/useClickOutside";
import { ACTION_TYPES, useUserContext } from "../../state/state";
import { useStyles } from "./modalStyle";
// import "./Modal.css";

export default function Modal({ toggleModal, elem }) {
	const styles = useStyles();
	const { dispatch } = useUserContext();
	const [status, setStatus] = useState(elem.status);
	const [priority, setPriority] = useState();
	const [title, setTitle] = useState("");
	const ref = useRef();

	const saveChanges = () => {
		dispatch({
			type: ACTION_TYPES.PRINT_MODAL,
			id: elem.taskID,
			status: status,
			priority: priority,
			title: title,
		});
		setTitle("");
	};

	useClickOutside(ref, () => toggleModal());
	return (
		<div>
			<div ref={ref} className={styles.modal}>
				<input value={title} onChange={(e) => setTitle(e.target.value)} />
				{elem.title}
				<span>{elem.priority}</span>,<span>{elem.status}</span>
				<p>{elem.description}</p>
				<select onChange={(e) => setPriority(e.target.value)}>
					<option>Change Priority</option>
					<option>high</option>
					<option>low</option>
					<option>medium</option>
				</select>
				<select
					onChange={(e) => {
						setStatus(e.target.value);
					}}
				>
					<option value="todo" selected={elem.status === "todo"}>
						todo
					</option>
					<option value="doing" selected={elem.status === "doing"}>
						doing
					</option>
					<option value="done" selected={elem.status === "done"}>
						done
					</option>
				</select>
				<button onClick={saveChanges}>save</button>
			</div>
		</div>
	);
}
