import { db } from "database/firebase";
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";

export const register = async (newAccount) => {
    const collectionRef = collection(db, "accounts");
    const docRef = await addDoc(collectionRef, newAccount);
    const accountRef = doc(db, "accounts", docRef.id);

    await updateDoc(accountRef, { ...newAccount, firebaseId: docRef.id });
};

export const getUserInfo = async (email) => {
    //firebase에서 계정정보를 가져와서 redux에 저장
    const q = query(collection(db, "accounts"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    let user;

    querySnapshot.forEach((doc) => {
        user = doc.data();
        user.firebaseId = doc.id;
    });

    return user;
};

export const setUserInfo = async (reduxUser, newAccount) => {
    //계정 정보 변경해서 firebase와 redux에 저장

    // reduxUser : 기존 값, newAccount : 새로운 값
    // reduxUser, newAccount : 객체
    const userId = reduxUser.firebaseId;
    const accountRef = doc(db, "accounts", userId);

    await updateDoc(accountRef, { ...reduxUser, ...newAccount });

    return newAccount;
};

export const do3rdPartyLogIn = async ({ email, nickname }) => {
    const user = await getUserInfo(email);
    if (user) {
        return;
    } else {
        register({ email, nickname });
    }
};
