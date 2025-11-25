import React, { useContext, useState } from 'react'
import { FaEye } from "react-icons/fa";
import {IoEyeOff} from "react-icons/io5";
import MyContainer from '../compunents/MyContainer'
import {Link} from 'react-router'
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import googleimg from '../assets/images.png'
import { toast } from "react-toastify";
import { useNavigate } from "react-router";




const Signup = () => {
  const [show, setshow] = useState(false);

  const {signupWithEmailAndPassword, setUser, user,handleGoogleSignin}= useContext(AuthContext);
  const navigate = useNavigate();

    const handleSubmit = (e)=>{
         e.preventDefault()
         const email = e.target.email.value;
         const pass = e.target.password.value;
         const name = e.target.name.value;
         const photoUrl = e.target.photoUrl.value;
         
         const uppercase = /[A-Z]/;
         const lowercase = /[a-z]/;
        if(pass.length < 6 ){
          return toast.error(' Password must be at least 6 characters!');
        }
        if(!uppercase.test(pass)){
          return toast.error("Password must contain at least 1 Uppercase letter!");
        }
        if(!lowercase.test(pass)){
          return toast.error("Password must contain at least 1 Lowercase letter!");
        }

         signupWithEmailAndPassword(email,pass)
         .then((userCredential) =>{
          
          updateProfile(auth.currentUser,{
            displayName: name , photoURL: photoUrl
          }).then(()=>{
               setUser(userCredential.user)
               toast.success("Signup Successful!");
               navigate("/");
          }).catch((error)=>{
               toast.error(error.message);
          }); 
         })
         .catch(err=>{
          toast.error(err.message);
         })
    }
    console.log(user);

     const googleSignin =()=>{
        handleGoogleSignin()
        .then(result=>{
          const user = result.user
          setUser(user)
          toast.success("Google Signup Successful!");
        })
        .catch(err=> toast.error(err.message))
      }
  return (
   <div className="min-h-screen flex items-center justify-center ">
        <MyContainer className={"flex justify-center items-center gap-20"}>
        <div>
            <h1 className='bg-gradient-to-b from-purple-300 to-white bg-clip-text text-transparent font-semibold text-4xl'>Create Your Account</h1>
            <p className='text-gray-300'>Type your Email and Password here... </p>
        </div>
        <div className="card bg-gradient-to-r p-10 from-blue-500 to-purple-500 w-[450px] h-auto text-white font-semibold shadow-sm ">
            <h1 className='text-center text-2xl mb-4'>Signup</h1>
            <form onSubmit={handleSubmit}  className='flex flex-col gap-1' action="">
              <div>
               <label  htmlFor="">Full Name</label>
              <input name='name' className='border-white border   rounded-[8px] p-2 w-full'  type="Text" placeholder='Full Name' />
             </div>
               <div>
               <label htmlFor="">Photo Url </label>
              <input name='photoUrl' className='border-white border   rounded-[8px] p-2 w-full'  type="Text" placeholder='photoUrl' />
             </div>
             <div >
               <label htmlFor="">Email</label>
              <input name="email" className='border-white border rounded-[8px] p-2 w-full'  type="Email" placeholder='...@gmail.com' />
              
             </div>
             <div className='relative'>
               <label htmlFor="">Password</label>
               <input name='password' type={show ? "text": "password"} className='border-white border  rounded-[8px] p-2 w-full' 
                placeholder='Enter Password' />
               <span onClick={()=> setshow(!show)}
                className='absolute right-[8px] top-[36px] cursor-pointer z-50'>
                {show? <FaEye /> : <IoEyeOff /> }
                </span>
             </div>
               <button className='text-white  btn bg-gradient-to-r  from-purple-500 to-purple-800  mt-5 '>
              Register
            </button> 

               <div className='flex justify-center place-items-center gap-2 my-4'>
              <div className='h-px w-16 bg-gray-400'></div>
              <span className='text-sm text-gray-300'>or</span>
              <div className='h-px w-16 bg-gray-400'></div>
           </div>
           <button onClick={googleSignin}
            type='submit'
             className='flex  bg-white text-black justify-center btn'>
              <img className='w-5' src={googleimg} alt="" />
              Continue With Google
            </button>

            <p className='text-sm mt-2 '>
              Already you have an account?<Link className='text-yellow-400 ml-2 cursor-pointer hover:underline' to={"/login"} >Login</Link>
            </p>
           
            </form>
                     
        </div>

    </MyContainer>
    </div>
  )
}

export default Signup;
