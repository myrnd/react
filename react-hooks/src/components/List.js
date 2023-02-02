import React from 'react'

const List = () => {
  const ary = ['a','b','c','d','e'];
  return (
    <div>
      <h1>List</h1> 
      {
        ary.map((item,index) => {
          return <h5 key={index}>{item}</h5>
        })
      }

    </div>
  )
}

export default List