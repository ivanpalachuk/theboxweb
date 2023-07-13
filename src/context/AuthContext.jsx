import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"


export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("There is no auth provider");
    return context;
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUp = async (email, password, displayName, phone) => {

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await updateProfile(user, {
                displayName: displayName
            });

            await setDoc(doc(db, "users", user.uid),
                {
                    displayName: displayName,
                    email: email,
                    phone: phone
                }
            )

            setUser(user);

        } catch (error) {
            throw new Error(error.message);
        }
    };

    const logIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const logOut = () => signOut(auth);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ signUp, logIn, logOut, user, loading }}>
            {children}
        </AuthContext.Provider>
    );
}
