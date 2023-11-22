import { Children, createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";


export const ProviderContext = createContext()

const auth = getAuth(app);

const Provider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create user by email and password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login user with email and password
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logout user
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('current user:', currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    },[])


    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading,
    }
    return (
        <ProviderContext.Provider value={authInfo}>
            {children}
        </ProviderContext.Provider>
    );
};

export default Provider;