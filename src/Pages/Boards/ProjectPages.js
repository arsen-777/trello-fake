import React from "react";
import { useState } from "react";
import Carts from "../../components/Carts/Carts";
import { ACTION_TYPES } from "../../state/state";
import { useUserContext } from "../../state/state";

export default function ProjectPages() {
	const [isOpen, setIsOpen] = useState(false);
	const [inpValue, setInpValue] = useState("");
	const { dispatch } = useUserContext();

	const toggleCart = () => {
		setIsOpen(!isOpen);
	};

	const changeInpValue = (e) => {
		setInpValue(e.target.value);
	};
	const addItem = () => {
		dispatch({
			type: ACTION_TYPES.ADD_ITEM,
			item: inpValue,
		});
	};

	return (
		<div>
			<button onClick={toggleCart}>+ Plus</button>
			{isOpen && (
				<div>
					<form onSubmit={(e) => e.preventDefault()}>
						<input value={inpValue} onChange={changeInpValue} />
						<button onClick={addItem}>add</button>
					</form>
				</div>
			)}
			<Carts />
		</div>
	);
}
