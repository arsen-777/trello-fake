import React from "react";
import { useState } from "react";
import Carts from "../../components/Carts/Carts";
import { ACTION_TYPES } from "../../state/state";
import { useUserContext } from "../../state/state";
import { useStyles } from "./boardssstyle";
import plusik from "../../asets/plusik.svg";

export default function ProjectPages() {
	const [isOpen, setIsOpen] = useState(false);
	const [inpValue, setInpValue] = useState("");
	const { dispatch } = useUserContext();
	const styles = useStyles();

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
		setInpValue("");
	};

	return (
		<div className={styles.boardBlock}>
			<button className={styles.button} onClick={toggleCart}>
				<img src={plusik} alt="" /> Create a board
			</button>
			{isOpen && (
				<div>
					<form className={styles.formik} onSubmit={(e) => e.preventDefault()}>
						<input
							className={styles.input}
							value={inpValue}
							onChange={changeInpValue}
						/>
						<button className={styles.buttonik} onClick={addItem}>
							add
						</button>
					</form>
				</div>
			)}
			<Carts />
		</div>
	);
}
