import React, { useEffect, useRef, useState } from "react";
import { auth, db, storage } from "database/firebase";
// import defaultImage from "assets/defaultImage.png";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { UploadBtn } from "components/styles/Profile";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "store/modules/userImage";
import { collection, getDocs } from "firebase/firestore";
import * as M from "components/styles/MypageStyle";

const ProfileImage = () => {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.userImage.user);
    const defaultImage = useSelector((store) => store.userImage.fileImage);
    const [isEdit, setEdit] = useState(false);
    // 이미지 추가 (일반)
    const [imgUpFile, setImgUpFile] = useState("");
    const imgThumnailRef = useRef(defaultImage);
    // 이미지 추가 (파이어베이스)
    // 1. 이미지 선택
    const [selectFile, setSelectFile] = useState(defaultImage);
    console.log(user);
    useEffect(() => {
        const userState = onAuthStateChanged(auth, (user) => {
            dispatch(setUser(user));
            console.log("user", user); // 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
        });

        return userState;
    }, []);

    useEffect(async () => {
        const querySnapshot = async () => {
            try {
                const query = await getDocs(collection(db, "account"));
                query.forEach((doc) => {
                    console.log(doc.id, doc.data());
                });
            } catch (error) {
                console.error("정보를 받아오지 못하고 있습니다.", error);
            }
        };
        querySnapshot();
    }, []);

    const userUid = user ? user.uid : null;
    const handleUpload = async () => {
        const currUser = auth.currentUser;
        if (!currUser) {
            alert("사용자가 로그인되어 있지 않습니다.");
            return;
        }
        if (!selectFile) {
            alert("이미지를 선택해주세요.");
            return;
        }
        //ref함수로 Storage 내부 저장할 위치 정하고,
        //uploadBytes

        const imageRef = ref(storage, `${userUid}/${selectFile.name}`);
        try {
            await uploadBytes(imageRef, selectFile);
            // 파일 url 가져오기
            const downloadURL = await getDownloadURL(imageRef);
            console.log(downloadURL);

            setImgUpFile(downloadURL);
            return downloadURL;
        } catch (error) {
            console.error("이미지가 업로드되지 않았어용", error);
            return null;
        }
        // 파이어베이스 해당 콜렉션에 있는 문서 가져오기
    };

    //일반 방법으로 섬네일로
    const addImgFile = (e) => {
        const imgFile = e.target.files[0];
        if (imgFile) {
            setSelectFile(imgFile);
            const reader = new FileReader();
            reader.readAsDataURL(imgFile); //url 뽑아서

            reader.onloadend = () => {
                setImgUpFile(reader.result); //이미지 세팅
            };
        }
    };

    return (
        <M.UserImage>
            <M.ProfileThumbnailImg src={imgUpFile ? imgUpFile : defaultImage} alt="이미지" />
            <M.ProfileUpLoadBtnLabel htmlFor="ImgfileChoice">등록</M.ProfileUpLoadBtnLabel>
            <button>삭제</button>
            <M.ProfileUpLoad
                type="file"
                accept="image/*"
                id="ImgfileChoice"
                ref={imgThumnailRef}
                onChange={addImgFile}
            />
            {/* display : none */}
            {isEdit ? (
                <div></div>
            ) : (
                // <UploadBtn>이미지 편집</UploadBtn>
                <UploadBtn onClick={handleUpload}>이미지 편집</UploadBtn>
            )}
        </M.UserImage>
    );
};

export default ProfileImage;

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
