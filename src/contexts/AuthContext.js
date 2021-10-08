import React, { useContext, useEffect, useState } from 'react';
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";
import { fire } from '../firebase'


export const authContext = React.createContext()

export const useAuth = () => useContext(authContext)

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState();
    console.log(user);

    const googleProvider = new GoogleAuthProvider();

    const loginWithGoogle = () => signInWithPopup(fire, googleProvider);

    const signup = (email, password) =>
        createUserWithEmailAndPassword(fire, email, password);

    const login = (email, password) =>
        signInWithEmailAndPassword(fire, email, password);

    const logout = () => signOut(fire);

    useEffect(() => {
        const loginCheck = onAuthStateChanged(fire, user => {
            setUser(user)
        })
        return loginCheck
    }, [])


    return (
        <authContext.Provider value={{
            loginWithGoogle,
            signup,
            login,
            logout,
            user,
        }}>
            {children}
        </authContext.Provider>
    );
};


export default AuthContextProvider;