import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import {IoEyeOff} from "react-icons/io5";
import MyContainer from '../compunents/MyContainer'
import {Link} from 'react-router'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase.config'
import { toast } from 'react-toastify'
const Signup = () => {
   
  const [show, setshow] = useState(false);
  
   const handleSignup = (e) => {
    e.preventDefault();
    const firstName =e.target.firstName?.value;
    const lastName =e.target.lastName?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    console.log('signup function entered',{email, password,firstName,lastName});
    console.log(password.length);

    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};:'",.<>/?\\|]).{6,}$/;
    if(!regExp.test(password)){
      toast.error("Password must include at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 6 characters long.");
      return;
    }


    createUserWithEmailAndPassword(auth, email, password).then((res) =>{
      console.log(res);
      toast.success("Signup successfull");
    })
    .catch((e) =>{
      console.log(e.code);
      if(e.code == 'auth/email-already-in-use'){
        toast.error("user already exist in database.");

      }else if (e.code == "auth/weak-password"){
        toast.error("Password should be at least 6 digit.")
      }
      else{
        toast.error(e.massage);
      }

    });
   };


  return (
   <div className="min-h-screen flex items-center justify-center ">
        <MyContainer className={"flex justify-center items-center gap-20"}>
        <div>
            <h1 className='bg-gradient-to-b from-purple-300 to-white bg-clip-text text-transparent font-semibold text-4xl'>Create Your Account</h1>
            <p className='text-gray-300'>Type your Email and Password here... </p>
        </div>
        <div className="card bg-gradient-to-r p-10 from-blue-500 to-purple-500 w-[450px] h-[500px] text-white font-semibold shadow-sm ">
            <h1 className='text-center text-2xl mb-4'>Signup</h1>
            <form onSubmit={handleSignup}  className='flex flex-col gap-1' action="">
              <div>
               <label  htmlFor="">First Name</label>
              <input name='firstName' className='border-white border   rounded-[8px] p-2 w-full'  type="Text" placeholder='First Name' />
             </div>
               <div>
               <label htmlFor="">Last Name </label>
              <input name='lastName' className='border-white border   rounded-[8px] p-2 w-full'  type="Text" placeholder='Last Name' />
             </div>
             <div >
               <label htmlFor="">Email</label>
              <input name="email" className='border-white border rounded-[8px] p-2 w-full'  type="Email" placeholder='...@gmail.com' />
              
             </div>
             <div className='relative'>
               <label htmlFor="">Password</label>
               <input name='password' className='border-white border  rounded-[8px] p-2 w-full'  type={show ? "text" : "password"} placeholder='Enter Password' />
               <span onClick={()=> setshow(!show)}
                className='absolute right-[8px] top-[36px] cursor-pointer z-50'>
                {show ? <FaEye /> : <IoEyeOff />}
                </span>
             </div>
               <button className='text-white btn bg-gradient-to-r  from-blue-500 to-purple-500  mt-5 '>
              Signup
            </button> 

            <p className='text-sm mt-2 '>
              Already you have an account?<Link className='text-red-400 ml-2 cursor-pointer' to={"/login"} >Login</Link>
            </p>
           
            </form>
                     
        </div>

    </MyContainer>
    </div>
  )
}

export default Signup;
