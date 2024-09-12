import logo from "./logo.svg";
import "./App.css";
import { createContext } from "react";
import Person from "./Person";
import Student from "./Student";
import StateReducer from "./StateReducer";

export const UserContext = createContext();

function App() {
	return (
		<div className="App">
			<Student />
		</div>
	);
}

export default App;
