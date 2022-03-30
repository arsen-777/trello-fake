import React from "react";
import { useUserContext } from "../../state/state";

export default function ListItem({ el, index }) {
	// const newState = useUserContext();
	// const { state } = newState;
	// console.log(el.tasks, "elementtitle");
	return (
		<div>
			{el.tasks[index].intasks.map((el) => {
				return (
					<>
						<h2>{el.title}</h2>
					</>
				);
			})}
		</div>
	);
}
