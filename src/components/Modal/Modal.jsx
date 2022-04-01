import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import useClickOutside from "../../hooks/useClickOutside";
import { ACTION_TYPES, useUserContext } from "../../state/state";

import "./Modal.css";

export default function Modal({ toggleModal, elem }) {
	const { dispatch } = useUserContext();
	const [status, setStatus] = useState();
	const [priority, setPriority] = useState();
	const ref = useRef();

	const saveChanges = () => {
		dispatch({
			type: ACTION_TYPES.PRINT_MODAL,
			id: elem.taskID,
			status: status,
			priority: priority,
		});
	};

	useClickOutside(ref, () => toggleModal());
	return (
		<div>
			<div ref={ref} className="modal">
				<input value={elem.title} />
				<span>{elem.priority}</span>,<span>{elem.status}</span>
				<p>{elem.description}</p>
				<select onChange={(e) => setPriority(e.target.value)}>
					<option>Change Priority</option>
					<option>high</option>
					<option>low</option>
					<option>medium</option>
				</select>
				<select onChange={(e) => setStatus(e.target.value)}>
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
