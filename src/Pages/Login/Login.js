import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ACTION_TYPES } from "../../state/state";

export default function Login({ dispatch, state }) {
	const [inputValue, setInputValue] = useState("");
	const nav = useNavigate();
	useEffect(() => {
		if (state.username) {
			nav("/projects");
		}
	}, [state.username]);

	const handleInput = (e) => {
		setInputValue(e.target.value);
	};

	const logIn = () => {
		dispatch({ type: ACTION_TYPES.LOG_IN, inputValue: inputValue });
	};

	return (
		<div>
			<form>
				<input onChange={handleInput} value={inputValue} />
				<button onClick={logIn}>LogIn</button>
			</form>
		</div>
	);
}
