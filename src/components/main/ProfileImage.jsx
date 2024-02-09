import React, { useRef, useState } from "react";
import { auth, db, storage } from "database/firebase";
import { collection, getDocs, query } from "firebase/firestore";
// import defaultImage from "assets/defaultImage.png";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { UploadBtn } from "components/styles/Profile";
import { useSelector } from "react-redux";
import * as M from "components/styles/MypageStyle";

const ProfileImage = ({ isEdit }) => {
    const defaultImage = useSelector((store) => store.userImage.fileImage);
    const storeUserUid = useSelector((store) => store.userId.userInfo.uid);
    console.log(storeUserUid);
    // 이미지 추가 (일반)
    const [isPhotoEdit, setIsPhotoEdit] = useState(false);
    const [imgUpFile, setImgUpFile] = useState("");
    const imgThumnailRef = useRef();
    // 이미지 추가 (파이어베이스)
    // 1. 이미지 선택
    const [selectFile, setSelectFile] = useState(defaultImage);
    const addFileSelect = (e) => {
        setSelectFile(e.target.files[0]);
    };
    console.log(auth.currentUser);

    //일반 방법으로 섬네일로
    const addImgFile = (e) => {
        const imgFile = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(imgFile); //url 뽑아서
        console.log(reader);
        console.log(imgFile);

        reader.onloadend = () => {
            setImgUpFile(reader.result); //이미지 세팅
        };
    };

    return (
        <M.UserImage>
            <M.ProfileThumbnailImg src={imgUpFile ? imgUpFile : defaultImage} alt="" />
            <M.ProfileUpLoadBtnLabel htmlFor="ImgfileChoice" onChange={addImgFile}>
                등록
            </M.ProfileUpLoadBtnLabel>
            <button>삭제</button>
            <M.ProfileUpLoad type="file" accept="image/*" id="ImgfileChoice" ref={imgThumnailRef} />
            {/* display : none */}
            {!isEdit ? (
                <div></div>
            ) : (
                <UploadBtn>이미지 편집</UploadBtn>
                // <UploadBtn onClick={handleUpload}>이미지 편집</UploadBtn>
            )}
        </M.UserImage>
    );
};

export default ProfileImage;

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
