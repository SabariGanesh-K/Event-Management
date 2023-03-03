//firebase,mui,tailwind

import React, { useState } from 'react'
import { useEffect } from 'react';
import { createContext } from 'react';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
  import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
    deleteDoc,
    setDoc,
    orderBy,
    doc,
    getDoc,
    onSnapshot,
  } from "firebase/firestore";
  import { Timestamp } from 'firebase/firestore';
  import { serverTimestamp } from 'firebase/firestore';
  import { useAuthState } from "react-firebase-hooks/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export  const FireBaseContext =  createContext();
export const FirebaseProvider = ({children})=>{
  const [InitialLoading,setInitalLoading] = useState(true)
    const [loggedIn,setLoggedIn] = useState(false);
    const [userName,setUserName] = useState("")
    const [usermail,setusermail] = useState("");
   const [UserData, setUserData] = useState([])
    const [isAdmin,setIsAdmin] = useState(false);
 const [NoGameBalanceError, setNoGameBalanceError] = useState(false)
 const [NoCMBalanceError, setNoCMBalanceError] = useState(false)
    const compName = "Valley"
    const firebaseConfig = {
        apiKey: "AIzaSyDN3caVo0pefOV6I8pOfp8V8hMV3PGDhWA",
        authDomain: "pxp-events-mgm.firebaseapp.com",
        projectId: "pxp-events-mgm",
        storageBucket: "pxp-events-mgm.appspot.com",
        messagingSenderId: "98104462953",
        appId: "1:98104462953:web:8af8d1d83f54acad871cf8",
        measurementId: "G-1BJJDJLZVZ"
      };
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);      
   
      const auth = getAuth(app);
  const   db = getFirestore(app);
  const googleProvider = new GoogleAuthProvider();
  const [user, loading] = useAuthState(auth);
const [RegisterError, setRegisterError] = useState(false)
  
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      const q = query(
        collection(db, "users"),
        where("mail", "==", user.email)
      );
      const docs = await getDocs(q);
      console.log(docs.docs.data);
      if (docs.docs.length === 0) {
        setRegisterError(true);
        const out = await signOut();
        // await signOut();
      } else {
        setusermail(user.email);
        
        setRegisterError(false);
        docs.forEach((item)=>{
          setUserData(item.data())
        })
        setLoggedIn(true);
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const addmember = async(name,mail) =>{
    await setDoc(doc(db,"users",mail),{
      name:name,
      games:4,
      mail:mail
      
    })
    
  }
  const addAdmin = async(name,mail) =>{
    await setDoc(doc(db,"users",mail),{
      name:name,
  
      mail:mail,
      admin:true,
      
      
    })
    
  }
  const scanGame = async(mail) =>{
    const docRef = doc(db, "users",mail);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      if(docSnap.data().games!=0){
        await setDoc(
          docRef,
          {
            games: parseInt(docSnap.data().games) - 1,
          },
          { merge: true }
        );
        setNoGameBalanceError(false)
      }
      else{
        setNoGameBalanceError(true)
        alert("User has no balance")
        return false
      }
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      setNoGameBalanceError(true)
      alert("Invalid mail ID")
      return false
    }
    
  }
  const scanTeam = async(mail) =>{
    const docRef = doc(db, "users",mail);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      if(docSnap.data().games!=0  && docSnap.data().games>=4 ){
        await setDoc(
          docRef,
          {
            games: parseInt(docSnap.data().games) - 1,
          },
          { merge: true }
        );
        setNoGameBalanceError(false)
      }
      else{
        setNoGameBalanceError(true)
        alert("User has no team balance")
        return false
      }
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      setNoGameBalanceError(true)
      alert("Invalid mail ID")
      return false
    }
    
  }

  const scanCosplay = async(mail) =>{
    const docRef = doc(db, "users",mail);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      if(docSnap.data().cm!=0){
        await setDoc(
          docRef,
          {
            cm: parseInt(docSnap.data().cm) - 1,
          },
          { merge: true }
        );
        setNoGameBalanceError(false)
      }
      else{
        setNoGameBalanceError(true)
      }
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      setNoGameBalanceError(true)
    }
  }
  
  

    useEffect(()=>{
        const getUserEntityData = async () => {
          try {
            onSnapshot(doc(db, "users", user.email), (doc) => {
              console.log("Current data: ", doc.data());
              
              setUserData(doc.data())
              setLoggedIn(true)
          });
          } catch (err) {
            console.error(err);
            alert(err.message);
          }


          }

        // getMessages()
          if (loading) {
            return;
          }
          if (user) {
            console.log("yes")
            getUserEntityData();
    
          }
          
   
     
    },[user, loading]);
  
    return(
        <FireBaseContext.Provider value = {{loggedIn,scanTeam,signInWithGoogle,addmember,addAdmin,NoGameBalanceError,scanCosplay,scanGame,RegisterError,db,UserData}} >{children}</FireBaseContext.Provider>
    )
}