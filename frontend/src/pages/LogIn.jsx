import React from 'react';
import FormInput from '../components/Inputs/FormInput';
import { useForm } from 'react-hook-form';
import FormButton from '../components/Buttons/FormButton';
import { Link } from 'react-router-dom';

const LogIn = () => {
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
    <div className='grid grid-cols-2'>
      <div className='image'>
        <img className='w-40 h-96' src="" alt="banner" />
      </div>
      <div className='form'>
        <div className='fromcontainer flex flex-col gap-2 items-center border-[1px] w-96 h-96'>
          <div className='h-28 flex items-center justify-center'>
            <h1 className='text-5xl'><span className='text-orange-400'>Tag</span>Chat</h1>
          </div>
          <form className='flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>
            <FormInput register={register} regName={"username"} placeholder={"Username"} />
            <FormInput register={register} regName={"password"} placeholder={"Password"} />
            <FormButton content={"Log In"} />
            <div className='flex items-center justify-center gap-3 text-gray-300'>
              <div className='border-[1px] w-full h-[1px]'></div>
              <p>OR</p>
              <div className='border-[1px] w-full h-[1px]'></div>
            </div>
          </form>
          <div className='flex flex-col items-center gap-3'>
            <a className='flex justify-center' href='https://www.google.com'><img className='w-6' src="/src/img/google.png" alt="google-logo" /> <p className='text-orange-500 font-semibold'> Log in with Google </p></a>
            <Link to="/forgot-password"><p className='text-gray-300 text-xs'>Forgot Password?</p></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogIn