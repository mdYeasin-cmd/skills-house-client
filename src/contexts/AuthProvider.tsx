import React, { createContext, useState, ReactNode, useEffect, SetStateAction, Dispatch } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, User, UserCredential } from 'firebase/auth';
import app from '../firebase/firebase.config';

export type AuthContextType = {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
    providerLogIn: (provider: GoogleAuthProvider) => Promise<UserCredential>;
}

const auth = getAuth(app);

export const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = {
    children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const providerLogIn = async (provider: GoogleAuthProvider): Promise<UserCredential> => {
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
        });

        return unsubscribe;
    }, []);

    const authInfo = {
        user,
        setUser,
        providerLogIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;