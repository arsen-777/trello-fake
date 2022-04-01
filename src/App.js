import "./App.css";
import { useReducer, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import ProjectPages from "./Pages/Boards/ProjectPages";
import ProtectedRoutes from "./ProtectedRoutes";
import ToDoList from "./components/ToDo/ToDoList";
import { reducer, inititalState, State } from "./state/state";
import Home from "./Pages/Home/Home";
import Modal from "./components/Modal/Modal";

function App() {
	const [state, dispatch] = useReducer(reducer, inititalState);

	return (
		<State.Provider value={{ state, dispatch }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>

					<Route
						path="/login"
						element={<Login dispatch={dispatch} state={state} />}
					></Route>
					<Route
						path="/projects"
						element={
							<ProtectedRoutes state={state}>
								<ProjectPages />
							</ProtectedRoutes>
						}
					></Route>
					<Route
						path="/toDoList/:categoryId"
						element={<ToDoList data={state} dispatch={dispatch} />}
					></Route>
				</Routes>
			</BrowserRouter>
		</State.Provider>
	);
}

export default App;
