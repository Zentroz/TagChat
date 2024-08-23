import React from 'react'
import FormInput from '../components/Inputs/FormInput';
import { useForm } from 'react-hook-form';
import FormButton from '../components/Buttons/FormButton';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  };
  return (
    <div className='w-screen h-screen py-3 flex flex-col gap-4 items-center overflow-x-hidden'>
      <div className='fromcontainer flex flex-col gap-2 items-center border-[1px] w-96 p-8'>
        <div className='flex flex-col gap-5 items-center justify-center'>
          <h1 className='text-5xl font-[cursive] font-bold'><span className='text-orange-400 font-[cursive] font-bold'>Tag</span>Chat</h1>
          <p className='w-60 text-center'>Sign up to find chat and have fun with friends.</p>
          <FormButton content={"Sign up with Google"} imgBefore={<img className='w-6' src='/src/img/google.png' alt='google-logo' />} extraClass={"gap-2"} />
        </div>
        <form className='flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex items-center justify-center gap-3 text-gray-300'>
            <div className='border-[1px] w-full h-[1px]'></div>
            <p>OR</p>
            <div className='border-[1px] w-full h-[1px]'></div>
          </div>
          <FormInput register={register} regName={"username"} placeholder={"Username"} />
          <FormInput register={register} regName={"password"} placeholder={"Password"} type={"password"} />
          <FormInput register={register} regName={"confpassword"} placeholder={"Confirm Password"} type={"password"} />
          <FormButton content={"Sign Up"} />
        </form>
        <p className='w-60 text-xs text-center text-gray-400'>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
      </div>
      <div className='signup border-[1px] w-96 min-h-20 flex items-center justify-center gap-2 text-sm'>
        Already have an account? <Link className='text-orange-500 font-semibold' to="/auth/login"> Log In</Link>
      </div>
    </div >
  )
}

export default SignUp
