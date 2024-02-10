import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, db, storage } from "database/firebase";
import { UploadBtn } from "components/styles/ProfileStyle";
import { setSelectFile, setThumnailImg } from "store/modules/userImage";
import Button from "components/common/Button";
import * as M from "components/styles/MypageStyle";

const ProfileImage = () => {
    const dispatch = useDispatch();
    const { userUid } = useSelector((store) => store.userAccount.userLoginState);
    const selectFile = useSelector((store) => store.userImage.selectFile);
    const [isEdit, setEdit] = useState(false);
    const thumnailImg = useSelector((store) => store.userImage.thumnailImg);
    console.log(thumnailImg);
    // 이미지 추가 (파이어베이스)
    // 1. 이미지 선택
    const currUserUid = userUid ? userUid : null;
    const handleUpload = async () => {
        if (!selectFile) {
            alert("이미지를 선택해주세요.");
            return;
        }
        if (selectFile.name === undefined) {
            alert("이미지를 선택해주세요.");
            return;
        }
        //ref함수로 Storage 내부 저장할 위치를 회원 고유번호 uid정하고,
        //uploadBytes
        if (selectFile === null) return;
        const imageRef = ref(storage, `${currUserUid}/${selectFile.name}`);
        console.log(imageRef);
        try {
            await uploadBytes(imageRef, selectFile);
        } catch (error) {
            console.error("이미지가 업로드되지 않았어용", error);
            return null;
        }
        // 파이어베이스 해당 콜렉션에 있는 문서 가져오기
        // 파일 url 가져오기
        const downloadURL = await getDownloadURL(imageRef);
        console.log(downloadURL);

        dispatch(setThumnailImg(downloadURL));
        // setThumnailImg(downloadURL);

        setEdit(false);
        return downloadURL;
    };

    //일반 방법으로 섬네일로
    const addImgFile = (e) => {
        const imgFile = e.target.files[0];
        if (imgFile) {
            dispatch(setSelectFile(imgFile));
            // setSelectFile(imgFile);
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
                        <Button
                            onClick={handleUpload}
                            name="수정 완료"
                            fsize="1rem"
                            bd="1px solid var(--subColor2)"
                            bradius=""
                            bgc="var(--mainColor)"
                            pd="0.4, 1"
                        />
                        <Button
                            onClick={onEditCancel}
                            name="수정 취소"
                            fsize="1rem"
                            bd="1px solid var(--subColor2)"
                            bradius="20"
                            bgc="var(--mainColor)"
                            pd="0.4, 1"
                        />
                    </div>
                </div>
            ) : (
                <div onClick={onEditImg}>
                    <Button name="이미지 편집" />
                </div>
            )}
        </M.UserImage>
    );
};

export default ProfileImage;

// useEffect(() => {
//     const userState = onAuthStateChanged(auth, (user) => {
//         dispatch(setUser(user));
//         console.log("user", user); // 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
//     });

//     return userState;
// }, []);

// useEffect(async () => {
//     const querySnapshot = async () => {
//         try {
//             const query = await getDocs(collection(db, "account"));
//             query.forEach((doc) => {
//                 console.log(doc.id, doc.data());
//             });
//         } catch (error) {
//             console.error("정보를 받아오지 못하고 있습니다.", error);
//         }
//     };
//     querySnapshot();
// }, [getDocs]);

// const [thumbnailUrl, setThumnailUrl] = useState(defaultImage);

// 이미지 업로드 (파이어베이스)

//  const handleUpload = async () => {
//      const currUser = auth.currentUser;
//      if (!currUser) {
//          alert("사용자가 로그인되어 있지 않습니다.");
//          return;
//      }
//      //ref함수로 Storage 내부 저장할 위치 정하고,
//      //uploadBytes
//      const userUid = currUser.uid;
//      console.log(userUid);
//      const imageRef = ref(storage, `${storeUserUid}/${selectFile.name}`);
//      await uploadBytes(imageRef, selectFile);

//      // 파일 url 가져오기
//      const downloadURL = await getDownloadURL(imageRef);
//      console.log(downloadURL);

//      // 파이어베이스 해당 콜렉션에 있는 문서 가져오기
//  };

// const fileName = downloadURL.split("/").pop().split("?")[0].split("%2F").pop();
// console.log(fileName);

///

// const q = query(collection(db, "todos"));
// const querySnapshot = await getDocs(q);

//   const addImgFile = () => {
//       const imgFile = imgThumnailRef.current.files[0];
//       const reader = new FileReader();
//       reader.readAsDataURL(imgFile); //url 뽑아서
//       console.log(reader);

//       // reader.onloadend = () => {

//       //     setImgUpFile(reader.result);//세팅
//       // };
//   };
