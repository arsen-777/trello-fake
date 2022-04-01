import React from "react";

import CartItem from "../CartItem/CartItem";
import { useUserContext } from "../../state/state";
export default function Carts() {
	const {
		state: { categories },
	} = useUserContext();
	return (
		<div>
			{categories.map((item) => (
				<CartItem item={item} key={item.categoryId} />
			))}
		</div>
	);
}
