import React from "react";
import { Link } from "react-router-dom";

export default function CartItem({ item, i }) {
	// const stateObj = { item: item, i: i };
	// console.log(stateObj, "sateObj");
	return (
		<Link to={"/toDoList"} state={{ index: i }}>
			<h2>{item.workspaseName}</h2>
		</Link>
	);
}
