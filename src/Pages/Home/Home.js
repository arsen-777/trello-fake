import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div>
			<h1>Welcome Trello</h1>
			<Link to="/login" className="signIn">
				Sign in
			</Link>
		</div>
	);
}
