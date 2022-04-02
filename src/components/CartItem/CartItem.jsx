import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./cartItemStyles";
export default function CartItem({ item }) {
	const styles = useStyles();
	return (
		<div className={styles.cartBlock}>
			<Link to={`/toDoList/${item.categoryId}`} className={styles.onlyItem}>
				<h2>{item.categoryTitle}</h2>
			</Link>
		</div>
	);
}
