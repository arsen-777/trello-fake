import React from "react";
import { Navigate } from "react-router";

export default function ProtectedRoutes({ children, state }) {
	if (!state.username) {
		return <Navigate replace to="/login" />;
	}
	return children;
}
