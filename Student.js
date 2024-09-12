import { useCallback, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";
import { memo } from "react";

function Student() {
	const inputElement = useRef();
	const dispatch = useDispatch();
	const value = useSelector((state) => state.counter.value);

	const elementChanged = () => {
		console.log(inputElement.current.value);
	};

	const clicked = () => {
		dispatch(increment());
	};
	const clickedtwo = () => {
		dispatch(decrement());
	};

	return (
		<>
			<input
				type="text"
				name="Name"
				onChange={elementChanged}
				ref={inputElement}
			/>
			<button onClick={clicked}>Inc</button>
			<button onClick={clickedtwo}>Dec</button>

			{value}
		</>
	);
}

export default memo(Student);
