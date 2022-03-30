import "./App.css";
import { useReducer } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import ProjectPages from "./Pages/Boards/ProjectPages";
import ProtectedRoutes from "./ProtectedRoutes";
import ToDoList from "./components/ToDo/ToDoList";
import {
	reducer,
	inititalState,
	State,
	useUserContext,
	ACTION_TYPES,
} from "./state/state";
import Home from "./Pages/Home/Home";

function App() {
	const [state, dispatch] = useReducer(reducer, inititalState);
	// console.log(state, "himnakan");
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
								<ProjectPages dispatch={dispatch} state={state} />
							</ProtectedRoutes>
						}
					></Route>
					<Route
						path="/toDoList"
						element={<ToDoList data={state} dispatch={dispatch} />}
					></Route>
				</Routes>
			</BrowserRouter>
		</State.Provider>
	);
}

export default App;
