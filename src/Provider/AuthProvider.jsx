import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from '../firebase/firebase.config';

export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [loading,setLoading]= useState(true);
    const [user, setUser] = useState(null);

    const signupWithEmailAndPassword = (email,pass)=>{
        console.log(email,pass);
        
        return createUserWithEmailAndPassword(auth,email,pass)
    }
     
    const authData={
        signupWithEmailAndPassword,
        setUser,
        user,
    }
    useEffect(()=>{
         const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
           setUser(currentUser)
           setLoading(false)
         })
         return ()=>{
            unsubscribe()
         }
    },[])

  return <AuthContext value={authData}>
    {children}
  </AuthContext>
}

export default AuthProvider;
