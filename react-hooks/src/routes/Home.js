import { Link } from "@reach/router";
import React from "react";

const Home = () => {
	return (
		<div>
			<h1>Dashboard</h1>
			<nav>
				<Link to="/">Home</Link> |{" "}
				<Link to="dashboard">Dashboard</Link>
			</nav>
		</div>
	);
};

export default Home;
