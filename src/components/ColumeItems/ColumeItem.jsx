import React, { Suspense, useState } from "react";
import { useUserContext } from "../../state/state";
import { ACTION_TYPES } from "../../state/state";
const Modal = React.lazy(() => import("../Modal/Modal"));

export default function ColumeItem({ elem }) {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const { dispatch } = useUserContext();

	const changeOptionValue = (i) => {
		dispatch({
			type: ACTION_TYPES.CHANGE_STATUS,
			id: elem.taskID,
			status: i.target.value,
		});
	};

	const deleteItem = () => {
		dispatch({ type: ACTION_TYPES.DELETE_ITEM, id: elem.taskID });
	};

	const toggleModal = () => {
		setIsOpenModal(!isOpenModal);
	};

	return (
		<>
			<div className="task">
				<input onClick={toggleModal} value={elem.title} />
				<select onChange={changeOptionValue}>
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

				<button onClick={deleteItem}>x</button>
			</div>
			<Suspense fallback={<div>loading...</div>}>
				{isOpenModal && <Modal toggleModal={toggleModal} elem={elem} />}
			</Suspense>
		</>
	);
}
