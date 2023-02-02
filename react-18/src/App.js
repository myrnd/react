import React, { useEffect, useState } from 'react';

const App = () => {

  const[country, setCountry] = useState(null);

  function fetchData() {
		fetch("https://60067de93698a80017de17db.mockapi.io/country")
			.then((resp) => {
        return resp.json();
      })
			.then((res) => {
        console.log(res);
        return res;
      });
	}
  const result = fetchData();

  useEffect(() => {
    setCountry(result);
  },[])
  return (
    <>
      App 
    </>
  )
}

export default App