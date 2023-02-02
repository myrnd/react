import React from 'react';
import { useForm } from 'react-hook-form';

const HookForm = () => {
  const {
    watch,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

  console.log(useForm());

  // console.log(watch("example"));
  console.log('render');
  console.log(errors);
  const firstName = register("firstName", {required: true});
  firstName.onChange = (data) => {
    console.log(data)
    console.log(errors);
  };
  const submit = data => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label>Name :: </label>
        <input {...firstName}/>
        <span></span>
        <button type='submit' disabled={errors.firstName ? false: true}>submit</button>
      </form>
    </div>
  )
}

export default HookForm