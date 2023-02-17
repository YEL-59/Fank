import React, { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
        
    }
    const SignIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut =()=>{
         return signOut(auth)
        }
    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,currenUser=>{
            console.log('user observer')
            setUser(currenUser)
        })
        return()=>unsubscribe()
    },[])
    const authInfo={
        createUser,
        SignIn,
        logOut,
        user
    }
  return(
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
  
};

export default AuthProvider;
