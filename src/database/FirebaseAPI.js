//import React, { useEffect, useState } from "react";
import { db } from "database/firebase";
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
//import { useDispatch, useSelector } from "react-redux";
import { setAccount } from "store/modules/userAccount";

export const register = async (newAccount) => {
    const collectionRef = collection(db, "accounts");
    const docRef = await addDoc(collectionRef, newAccount);
    const accountRef = doc(db, "accounts", docRef.id);

    await updateDoc(accountRef, { ...newAccount, id: docRef.id });
};

export const getUserInfo = async (email, dispatch) => {
    //firebase에서 계정정보를 가져와서 redux에 저장
    const q = query(collection(db, "accounts"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    let user;

    querySnapshot.forEach((doc) => {
        user = doc.data();
        user.firebaseId = doc.id;
    });

    dispatch(setAccount(user));

    return user;
};

export const setUserInfo = async (reduxUser, newAccount, dispatch) => {
    //계정 정보 변경해서 firebase와 redux에 저장
    // const id = "t88aScOycVaKaYNYy1IJ";
    // reduxUser : 기존 값, newAccount : 새로운 값
    // reduxUser, newAccount : 객체
    const userId = reduxUser.firebaseId;
    const accountRef = doc(db, "accounts", userId);

    await updateDoc(accountRef, { ...reduxUser, ...newAccount });

    dispatch(setAccount(newAccount));
};

export const googleLogIn = async ({ email, nickname }, dispatch) => {
    const user = await getUserInfo(email, dispatch);

    if (user) {
        return;
    } else {
        register({ email, nickname });
    }
};

// const FirebaseAPI = () => {
//     const reduxUser = useSelector((state) => state.userAccount);
//     const dispatch = useDispatch();

//     console.log(reduxUser);
//     useEffect(() => {
//         const newAccount = { email: "asd7973@gmail.com" };
//         googleLogIn(newAccount, dispatch);
//     }, [dispatch]);
//     return <div>FirebaseAPI</div>;
// };

//export default FirebaseAPI;
