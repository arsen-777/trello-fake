import React from "react";

import CartItem from "../CartItem/CartItem";
export default function Carts({ dispatch, state }) {
	return (
		<div>
			{state.workspase.map((item, i) => (
				<CartItem item={item} key={i} i={i} />
			))}
		</div>
	);
}
