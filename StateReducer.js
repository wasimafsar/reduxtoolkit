import { useReducer } from "react";
import { memo } from "react";

function StateReducer() {
	const initial = [
		{ id: 1, name: "wasim" },
		{ id: 2, name: "Rumaan" },
	];

	const reducer = (state, action) => {
		switch (action.type) {
			case "add":
				state?.push(action.value);
				break;
			default:
		}
	};
	const [values, dispatch] = useReducer(reducer, initial);
	console.log(values);
	dispatch({ type: "add", value: { id: 3, name: "Faiz" } });
	console.log(values);
}

export default memo(StateReducer);
