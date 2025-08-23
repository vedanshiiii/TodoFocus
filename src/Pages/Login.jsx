import React from 'react'
import './Login.css'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom';
import { logout } from '../Features/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { loginApiHit } from '../Features/loginSlice';

function Login() {

    const {register,handleSubmit,formState :{errors}} = useForm();
    const {id} = useParams();
    const {token,status }= useSelector((state)=>state.login)
    const dispatch = useDispatch();
    console.log(status);



    const submitfunc = (data) => {
        console.log('submitted')
        console.log(data)
        dispatch(loginApiHit(data));
    }



const logoutbt = ()=>{
dispatch(logout());
}


    return (
        <>{token ? <div className='formbod idsf'>
<h1> Hello User, How are your tasks coming up ?</h1>
<br/>
<button type='submit' className={`logSub`} onClick={logoutbt} >Log Out</button>

        </div> :  <div className='wholelog'>
            <div className={`formbod`} >
                <form onSubmit={handleSubmit(submitfunc)} className='formDv idsf flc' >

                    <div  className={`idsf flc`}>
                        <input type='email' {...register("name", { required: "Please provide your username to Login" })} className={`fieldsF`} placeholder='Enter username'/>
                        <br/>
                        {errors.name && <p className='fieldsF err'>{errors.name.message}</p>}</div>

                    <br />
                    <div className={`idsf flc`}>
                        <input type='password' className={`fieldsF`} {...register("password", { required: "please enter your password", minLength: { value: 8, message: 'Password should be atleast 8 characters long' } })}  placeholder='Enter password'/>
                        {errors.password && <p className='fieldsF err'>{errors.password.message}</p>}
                    </div>

                    <br />
                    <button type='submit' className={`logSub`} >Log In</button>
                    {id=='redirect' &&  <p className='fieldsF err'> Please LOGIN to Focus on your tasks</p>}
                    {status=='logging' ? <p className='fieldsF err'> Please wait!! we are Logging you in to your account ......</p> : status=='failed' ?   <p className='fieldsF err'> Please try after some time </p> :''}



                </form>





            </div>
        </div>   }</>
       

    )
}

export default Login