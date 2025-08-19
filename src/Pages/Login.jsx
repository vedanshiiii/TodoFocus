import React from 'react'
import './Login.css'
import { useForm } from 'react-hook-form'


function Login() {

    const {register,handleSubmit,formState :{errors}} = useForm();



    const submitfunc = (data) => {
        console.log('submitted')
        console.log(data);
    }



    return (
        <div className='wholelog'>
            <div className={`formbod`} >
                <form onSubmit={handleSubmit(submitfunc)} className='formDv idsf flc' >

                    <div  className={`idsf flc`}>
                        <input type='text' {...register("name", { required: "Please provide your username to Login" })} className={`fieldsF`} placeholder='Enter username'/>
                        <br/>
                        {errors.name && <p className='fieldsF err'>{errors.name.message}</p>}</div>

                    <br />
                    <div className={`idsf flc`}>
                        <input type='password' className={`fieldsF`} {...register("password", { required: "please enter your password", minLength: { value: 8, message: 'Password should be atleast 8 characters long' } })}  placeholder='Enter password'/>
                        {errors.password && <p className='fieldsF err'>{errors.password.message}</p>}
                    </div>

                    <br />
                    <button type='submit' className={`logSub`} >Log In</button>



                </form>





            </div>
        </div>

    )
}

export default Login