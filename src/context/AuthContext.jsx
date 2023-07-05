import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../firebase/config";

export const AuthContext = createContext()



export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error("There is not auth provider")
    return context
}


export function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading,setLoading]=useState(true)

    const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password)

    const logIn = (email, password) => signInWithEmailAndPassword(auth, email, password)

    const logOut = () => { signOut(auth) }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
    }, [])




    return (
        <AuthContext.Provider value={{ signUp, logIn, logOut, user,loading }}>
            {children}
        </AuthContext.Provider>
    )

}
