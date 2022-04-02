import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ACTION_TYPES } from "../../state/state";
import { useStyles } from "./loginStyle";
export default function Login({ dispatch, state }) {
	const [nameValue, setNameValue] = useState("");
	const [surnameValue, setSurnameValue] = useState("");
	const nav = useNavigate();
	const styles = useStyles();
	useEffect(() => {
		if (state.username) {
			nav("/projects");
		}
	}, [state.username, nav]);

	const handleInputName = (e) => {
		setNameValue(e.target.value);
	};
	const handleInputSurName = (e) => {
		setSurnameValue(e.target.value);
	};

	const logIn = (e) => {
		e.preventDefault();
		dispatch({
			type: ACTION_TYPES.LOG_IN,
			user: { nameValue: nameValue, surnameValue: surnameValue },
		});
	};
	useEffect(() => {
		console.log(state);
	}, [state]);
	return (
		<div className={styles.loginBlock}>
			<div className={styles.formBlock}>
				<form className={styles.form}>
					<label className={styles.label}>Name</label>
					<input
						className={styles.input}
						onChange={handleInputName}
						value={nameValue}
						placeholder="name"
					/>
					<label className={styles.label}>Surname</label>
					<input
						className={styles.input}
						onChange={handleInputSurName}
						value={surnameValue}
						placeholder="surName"
					/>

					<button className={styles.button} onClick={(e) => logIn(e)}>
						LogIn
					</button>
				</form>
			</div>
		</div>
	);
}
