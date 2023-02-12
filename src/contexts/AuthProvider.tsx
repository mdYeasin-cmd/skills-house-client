import React, { createContext, useState, ReactNode, useEffect, SetStateAction, Dispatch } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, User, UserCredential } from 'firebase/auth';
import app from '../firebase/firebase.config';

export type AuthContextType = {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
    signUp: (email: string, password: string) => Promise<UserCredential>;
    signIn: (email: string, password: string) => Promise<UserCredential>
    providerLogIn: (provider: GoogleAuthProvider) => Promise<UserCredential>;
    logOut: () => Promise<void>;
}

const auth = getAuth(app);

export const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = {
    children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const signUp = (email: string, password: string): Promise<UserCredential> => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email: string, password: string): Promise<UserCredential> => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const providerLogIn = (provider: GoogleAuthProvider): Promise<UserCredential> => {
        return signInWithPopup(auth, provider);
    }

    const logOut = (): Promise<void> => {
        return signOut(auth);
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
        signUp,
        signIn,
        providerLogIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;