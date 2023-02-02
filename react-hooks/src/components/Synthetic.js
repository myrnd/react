import React from 'react'

const Synthetic = () => {
  const clickHandler = (ev) => {
    ev.preventDefault();
    console.log(ev);
  }
  return (
    <>
      <h1>Synthetic Event Example</h1>
      <a href='google.com' onClick={(ev) => clickHandler(ev)}>click me</a>
    </>
  )
}

export default Synthetic