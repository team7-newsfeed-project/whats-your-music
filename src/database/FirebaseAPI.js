import { db } from "database/firebase";
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
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
    const accountRef = doc(db, "accounts", reduxUser.id);

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
