import React, { useEffect } from "react";
import { useState, useMemo, useCallback } from "react";

const expensiveFun = (num) => {
	console.log("calculating...");
	for (var i = 0; i < 5000; i++) {
		num = num + i;
	}
	return num;
};

const Hooks = (props) => {
	const [message, setMessage] = useState("Hello Vivek");
	const [count, setCount] = useState(0);
	const [num, setNum] = useState(5);


	/*===================== 
		useMemo Example
	=======================*/
	const number = useMemo(() => {
		console.log('==> Inside useMemo');
		return expensiveFun(num);
	}, [num]);

	console.log(number);
	/*====================== 
		End of useMemo Example
	========================*/


	const changeCount = useCallback(() => {
		setCount((count) => {
			console.log(count);
			return count + 1;
		});
		console.log(count);
	}, [message]);


	// useEffect(() => {
	// 	console.log('effect');
	// 	setNum(prev => ++prev);
	// },[count])


	
	return <>
		{console.log('==> render')}
		<h1>Hooks Demo</h1>
		<h2>Count {count} | Num {num}</h2>
		<button onClick={() => setCount((prevState) => {return ++prevState})}>Increment Count</button>
		<button onClick={() => setNum((prevState) => {return ++prevState})}>Increment Num</button>
	</>;
};

export default React.memo(Hooks);
