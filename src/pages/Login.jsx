import React, { useContext } from 'react'
import { FaEye } from "react-icons/fa";
import {IoEyeOff} from "react-icons/io5";
import MyContainer from '../compunents/MyContainer'
import googleimg from '../assets/images.png'
import {Link} from 'react-router'
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
   
     const {setUser,user} = useContext(AuthContext)
     
    
     
      const handleSubmit = (e)=>{
       e.preventDefault();
         const email = e.target.email.value;
         const pass = e.target.password.value;
       signInWithEmailAndPassword(auth, email, pass)
       .then((userCredential)=>{
        const user = userCredential.user;
        setUser(user)

       })
       .catch((error)=>{
        console.log(error);
        
       });
  //      const handleGoogleSignin =()=>{
        
  //       signInWithPopup(auth, googleProvider)
  //        .then((res)=>{
  //         setuser(res.user);
  //         toast.success('Google Signin succesfull')
  //        })
  //        .catch((e)=>{
  //         toast.error(e.message);
  //        })
  //      };
  //     const handleSignout = (e)=> {
  //        signOut(auth)
  //        .then(()=>{
  //         toast.success('Signout succesfull')
  //         setuser(null);
  //        })
  //        .catch((e)=>{
  //         toast.error(e.message);
  //        })
  //     };

  //     const handleForgetPassword = (e) =>{
  //       console.log();
  //       const email = emailRef.current.value;
  //       sendPasswordResetEmail(auth, email)
  // .then(() => {
  //   toast.success("Reset mail sent!");
  // })
  // .catch((e) => {
  //   console.log("RESET ERROR:", e);
  //   toast.error(e.message);
  // });

      };

      console.log(user);
  return (
    <div className="min-h-screen flex items-center justify-center ">
        <MyContainer className={"flex justify-center items-center gap-20"}>
        <div>
            <h1 className='bg-gradient-to-b from-purple-300 to-white bg-clip-text text-transparent font-semibold text-4xl'>Login Your Account</h1>
            <p className='text-gray-300'>Type your Email and Password here... </p>
        </div>
        <div className="card bg-gradient-to-r p-10 from-blue-500 to-purple-500 w-auto h-auto text-white font-semibold shadow-sm ">
          <form onSubmit={handleSubmit}
            className='flex flex-col gap-1' action="">
               <h1 className='text-center text-2xl mb-4'>Login</h1>
             <div>
               <label htmlFor="">Email</label>
              <input 
              name='email'
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
               className='border-white border rounded-[8px] p-2 w-full'  type="email" placeholder='Enter Your Email' />
             </div>
             <div className='relative'>
                <label htmlFor="">Password</label>
                <input name='password' className='border-white border  rounded-[8px] p-2 w-full'  type= "password" placeholder='Enter Password' />
                <span
                className='absolute right-[8px] top-[36px] cursor-pointer z-50'>

                </span>
              </div>
               <div className='text-center cursor-pointer'>
              <button 
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
             className='flex  bg-white text-black justify-center btn'>
              <img className='w-5' src={googleimg} alt="" />
              Continue With Google
            </button>
            <p className='text-sm  mt-3 text-center'>
              Don't have an account? <Link className='text-red-400' to={"/signup"} >Signup</Link>
            </p>

            </form>
        
         

        </div>

    </MyContainer>
    </div>
  )
}

export default Login
