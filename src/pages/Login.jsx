import React, { useRef, useState } from 'react'
import { FaEye } from "react-icons/fa";
import {IoEyeOff} from "react-icons/io5";
import MyContainer from '../compunents/MyContainer'
import googleimg from '../assets/images.png'
import {Link} from 'react-router'
import { auth } from '../firebase/firebase.config'
import { getAuth,sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

const Login = () => {

     const [user, setuser] = useState(null);
     const [show, setshow] = useState(false);
     const emailRef = useRef(null);
    const [email, setEmail] = useState("")

    
     
      const handleLogin = (e) => {
       e.preventDefault();
       const email = e.target.email?.value;
       const password = e.target.password?.value;
       console.log('signup function entered',{email, password});
       console.log(password.length);
   
       const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};:'",.<>/?\\|]).{6,}$/;
       if(!regExp.test(password)){
         toast.error("Password must include at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 6 characters long.");
         return;
       }
   
   
       signInWithEmailAndPassword(auth, email, password).then((res) =>{
         console.log(res);
         setuser(res.user);
         toast.success("Login successfull");
       })
       .catch((e) =>{
         toast.error(e.message);
       });
      };
       const handleGoogleSignin =()=>{
        
        signInWithPopup(auth, googleProvider)
         .then((res)=>{
          setuser(res.user);
          toast.success('Google Signin succesfull')
         })
         .catch((e)=>{
          toast.error(e.message);
         })
       };
      const handleSignout = (e)=> {
         signOut(auth)
         .then(()=>{
          toast.success('Signout succesfull')
          setuser(null);
         })
         .catch((e)=>{
          toast.error(e.message);
         })
      };

      const handleForgetPassword = (e) =>{
        console.log();
        const email = emailRef.current.value;
        sendPasswordResetEmail(auth, email)
  .then(() => {
    toast.success("Reset mail sent!");
  })
  .catch((e) => {
    console.log("RESET ERROR:", e);
    toast.error(e.message);
  });

      };

      // console.log(email);
  return (
    <div className="min-h-screen flex items-center justify-center ">
        <MyContainer className={"flex justify-center items-center gap-20"}>
        <div>
            <h1 className='bg-gradient-to-b from-purple-300 to-white bg-clip-text text-transparent font-semibold text-4xl'>Login Your Account</h1>
            <p className='text-gray-300'>Type your Email and Password here... </p>
        </div>
        <div className="card bg-gradient-to-r p-10 from-blue-500 to-purple-500 w-auto h-auto text-white font-semibold shadow-sm ">
           
        {user ? (
          <div className='text-center space-y-3'>
            <img className='h-20 w-20 rounded-full mx-auto' src={user?.photoURL || "https://via.placeholder.com/88"} alt="" />
           
          <h2 className='text-xl font-semibold'>{user?.displayName}</h2>
          <p className='text-white/70'>{user?.email}</p>
            <button onClick={handleSignout}  className='btn '>Signout</button>
          </div>
        ) :(
          <form onSubmit={handleLogin} 
            className='flex flex-col gap-1' action="">
               <h1 className='text-center text-2xl mb-4'>Login</h1>
             <div>
               <label htmlFor="">Email</label>
              <input 
              name='email'
              ref={emailRef}
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
               className='border-white border rounded-[8px] p-2 w-full'  type="email" placeholder='Enter Your Email' />
             </div>
             <div className='relative'>
                <label htmlFor="">Password</label>
                <input name='password' className='border-white border  rounded-[8px] p-2 w-full'  type={show ? "text" : "password"} placeholder='Enter Password' />
                <span onClick={()=> setshow(!show)}
                className='absolute right-[8px] top-[36px] cursor-pointer z-50'>
                {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>
               <div className='text-center cursor-pointer'>
              <button onClick={handleForgetPassword}
              type='button'
              className='text-sm cursor-pointer hover:underline'>Forget Password?
              </button>
             </div>

            <button className='text-white btn bg-gradient-to-r font-extrabold from-blue-500 to-purple-500  mt-3 '>
              Login
            </button>
           <div className='flex justify-center place-items-center gap-2 my-4'>
              <div className='h-px w-16 bg-gray-400'></div>
              <span className='text-sm text-gray-300'>or</span>
              <div className='h-px w-16 bg-gray-400'></div>
           </div>
           <button type='submit'
            onClick={handleGoogleSignin}
             className='flex  bg-white text-black justify-center btn'>
              <img className='w-5' src={googleimg} alt="" />
              Continue With Google
            </button>
            <p className='text-sm  mt-3 text-center'>
              Don't have an account? <Link className='text-red-400' to={"/signup"} >Signup</Link>
            </p>

            </form>
        )}
         

        </div>

    </MyContainer>
    </div>
  )
}

export default Login
