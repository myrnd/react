import { useState } from "react";

const FormInput = () => {
  const [value, setValue] = useState('test');
  console.log('form input render');
  const handleSubmit = (e) => {
    setValue(e.target.value);
  }
  return <div>
    <label>Input : </label>
    <input type="text" onChange={(e) => handleSubmit(e)} value={value}/>
    {/* <h3>Input value : {value}</h3> */}
  </div>
}

export default FormInput