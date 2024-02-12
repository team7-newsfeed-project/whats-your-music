import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, db, storage } from "database/firebase";
import { setSelectFile, setThumnailImg } from "store/modules/userImage";
import Button from "components/common/Button";
import * as M from "components/styles/MypageStyle";
import DangerButton from "components/common/DangerButton";
import { setAccount } from "store/modules/userAccount";
import { collection, getDocs, query, where } from "firebase/firestore";
import { setUserInfo } from "database/FirebaseAPI";
import { setEditValue, setInitValue } from "store/modules/userContents";
import { useNavigate } from "react-router-dom";

const ProfileImage = () => {
    const dispatch = useDispatch();
    const { email } = useSelector((store) => store.userAccount);
    const selectFile = useSelector((store) => store.userImage.selectFile);
    const thumnailImg = useSelector((store) => store.userImage.thumnailImg);
    const reduxUser = useSelector((store) => store.userAccount);
    const [isEdit, setEdit] = useState(false);
    const navigate = useNavigate();

    // 1. 이미지 선택
    const currEmail = email ? email : null;
    const handleUpload = async () => {
        if (!selectFile) {
            alert("이미지를 선택해주세요.");
            return;
        }
        if (selectFile.name === undefined) {
            alert("이미지를 선택해주세요.");
            return;
        }
        //ref함수로 Storage 내부 저장할 위치를 회원 고유번호 uid정하고, uploadBytes
        if (selectFile === null) return;
        const imageRef = ref(storage, `${currEmail}/${selectFile.name}`);
        try {
            await uploadBytes(imageRef, selectFile);
        } catch (error) {
            console.error("이미지가 업로드되지 않았어용", error);
            return null;
        }
        // 파이어베이스 해당 콜렉션에 있는 문서 파일 url 가져오기
        const downloadURL = await getDownloadURL(imageRef);
        dispatch(setThumnailImg(downloadURL));
        dispatch(setAccount({ image: downloadURL }));
        await setUserInfo(reduxUser, { image: downloadURL }, dispatch);

        setEdit(false);
        return downloadURL;
    };

    //일반 방법으로 섬네일로
    const addImgFile = (e) => {
        const imgFile = e.target.files[0];
        if (imgFile) {
            dispatch(setSelectFile(imgFile));
            const reader = new FileReader();
            reader.readAsDataURL(imgFile); //url 뽑아서

            reader.onloadend = () => {
                dispatch(setThumnailImg(reader.result));
            };
        }
    };

    const onEditImg = () => {
        setEdit(true);
    };
    const onEditCancel = () => {
        setEdit(false);
    };
    return (
        <M.UserImage>
            <M.ProfileThumbnailImg src={thumnailImg} alt="이미지" />
            <M.ProfileUpLoad
                type="file"
                accept="image/*"
                id="ImgfileChoice"
                onChange={addImgFile}
            />
            {/* display : none */}
            {isEdit ? (
                <div>
                    <M.ProfileUpLoadBtnLabel htmlFor="ImgfileChoice">등록</M.ProfileUpLoadBtnLabel>
                    <div>
                        <Button onClick={handleUpload} name="수정 완료" fsize="1rem" pd="0.4, 1" />
                        <DangerButton
                            onClick={onEditCancel}
                            name="수정 취소"
                            fsize="1rem"
                            pd="0.4, 1"
                        />
                    </div>
                </div>
            ) : (
                <div onClick={onEditImg}>
                    <Button name="이미지 편집" pd="0.4, 1" fsize="1rem" />
                </div>
            )}
        </M.UserImage>
    );
};

export default ProfileImage;

// useEffect(() => {
//     alert(`${email}`);
//     if (!email) {
//         alert("로그인 해주세요!");
//         navigate("/");
//     }
//     const getUserInfo = async (email) => {
//         //firebase에서 계정정보를 가져와서 redux에 저장
//         const q = query(collection(db, "accounts"), where("email", "==", email));
//         const querySnapshot = await getDocs(q);
//         let user;
//         try {
//             querySnapshot.forEach((doc) => {
//                 user = doc.data();
//                 // user.firebaseId = doc.id;
//                 const image = user.image;
//                 const nickname = user.nickname;
//                 const comment = user.comment;
//                 console.log(user.nickname, user.comment);

//                 dispatch(setAccount({ image, nickname, comment }));
//                 dispatch(setThumnailImg(user.image));
//                 // dispatch(setInitValue({ nickname, comment }));
//                 dispatch(setEditValue({ nickname, comment }));
//             });
//         } catch (error) {
//             console.log("로그인 해주세요!", error);
//             alert("로그인 해주세요!");
//             navigate("/");
//         }
//         if (!user || !user.image) {
//             alert("로그인 해주세요!");
//             navigate("/");
//         }
//     };
//     getUserInfo(email);
// }, []);
