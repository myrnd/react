import React from 'react';
import { Link } from '@reach/router';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard components </h1>
      <nav>
				<Link to="/">Back to Home</Link> 
			</nav>
    </div>
  )
}

export default Dashboard