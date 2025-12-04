import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut, 
  updateProfile as firebaseUpdateProfile, 
  FacebookAuthProvider,
  sendPasswordResetEmail
} from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  
  //  LOAD EXTRA PROFILE INFO FROM LOCALSTORAGE
  const [extraProfile, setExtraProfile] = useState(() => {
    const saved = localStorage.getItem("extraProfile");
    return saved ? JSON.parse(saved) : {
      address: "",
      phone: "",
      hobbies: "",
    };
  });

  //  UPDATE EXTRA PROFILE AND SAVE TO LOCALSTORAGE
  const updateExtraProfile = (data) => {
    const updated = { ...extraProfile, ...data };
    setExtraProfile(updated);
    localStorage.setItem("extraProfile", JSON.stringify(updated));
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // ✅ Correct updateProfile function
  const updateUserProfile = (name, photoURL) => {
    return firebaseUpdateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL
    });
  };

  // fb

  const fbProvider = new FacebookAuthProvider();

  const facebookLogin = () => {
  setLoading(true);
  return signInWithPopup(auth, fbProvider);
};

// reset

const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  
  //  MERGED FINAL PROFILE DATA
  const mergedUser = user
    ? { ...user, ...extraProfile }
    : null;

  const authInfo = {
    createUser,
    updateUserProfile,
    signInUser,
    signInWithGoogle,
    signOutUser,
    facebookLogin,
     resetPassword,
   
     user: mergedUser,
    loading,
     updateExtraProfile,
  };

  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;
