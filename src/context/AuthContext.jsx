import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile
} from "firebase/auth";
import { auth } from "../firebase/config";


export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("There is no auth provider");
    return context;
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUp = (email, password, displayName, phone) => {
        return createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
      
            // Actualizar el perfil del usuario con el número de teléfono
            return updateProfile(user, {
              displayName: displayName,
              phoneNumber: phone // Agregar esta línea para guardar el número de teléfono en el perfil
            }).then(() => {
              setUser(user);
            });
          });
      };

    const logIn = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);

    const logOut = () => signOut(auth);

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
            setLoading(false);
        });
    }, []);

    return (
        <AuthContext.Provider value={{ signUp, logIn, logOut, user, loading }}>
            {children}
        </AuthContext.Provider>
    );
}
