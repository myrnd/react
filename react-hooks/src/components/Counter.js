import React, { useEffect, useRef, useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);
	const [isStart, setIsStart] = useState(false);
	const input = useRef(0);
	console.log("render");

	const start = () => {
		setIsStart(true);
	};

	const reset = () => {
		setIsStart(false);
		setCount(0);
	};
	
	useEffect(() => {
		console.log("effect");
		let interval = null;
		if (isStart) {
			interval = setInterval(() => {
				console.log("interval");
				setCount((prevState) => {
					return prevState + 1;
				});
				console.log(count);
			}, 1000);
		}
		return () => {
			console.log("cleanup");
			clearInterval(interval);
		};
	}, [isStart]);
	return (
		<div>
			<h1>Stop Watch : {count}</h1>
			<button onClick={start}>Start</button>
			<button onClick={reset}>Reset</button>
			<button onClick={() => setIsStart(false)}>Stop</button>
		</div>
	);
};

export default Counter;
