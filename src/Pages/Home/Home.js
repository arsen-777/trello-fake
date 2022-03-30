import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div>
			<h1>Welcome Trello</h1>
			<Link to="/login">Sign in</Link>
		</div>
	);
}
