import React from "react";
import { Link } from "react-router-dom";

export default function CartItem({ item }) {
	return (
		<Link to={`/toDoList/${item.categoryId}`}>
			<h2>{item.categoryTitle}</h2>
		</Link>
	);
}
