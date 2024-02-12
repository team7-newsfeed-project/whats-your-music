import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "database/firebase";
import { setUserInfo } from "database/FirebaseAPI";
import { setSelectFile, setThumnailImg } from "store/modules/userImage";
import { setAccount } from "store/modules/userAccount";
import Button from "components/common/Button";
import DangerButton from "components/common/DangerButton";
import * as I from "components/styles/MypageStyle";

const ProfileImage = () => {
    const dispatch = useDispatch();
    const { email } = useSelector((store) => store.userAccount);
    const selectFile = useSelector((store) => store.userImage.selectFile);
    const thumnailImg = useSelector((store) => store.userImage.thumnailImg);
    const myPageUser = useSelector((store) => store.userAccount);
    const [isEdit, setEdit] = useState(false);

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
            alert("이미지가 업로드 되지 않았어용! 다시 등록해주세용!");
            return null;
        }
        // 파이어베이스 해당 콜렉션에 있는 문서 파일 url 가져오기
        const downloadURL = await getDownloadURL(imageRef);
        await setUserInfo(myPageUser, { image: downloadURL });

        if (!downloadURL) {
            alert("사진을 등록해주세요!");
        } else {
            alert("사진 등록이 완료됐습니다.");
        }
        dispatch(setThumnailImg(downloadURL));
        dispatch(setAccount({ image: downloadURL }));

        setEdit(false);
        return downloadURL;
    };

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
        <I.UserImage>
            <I.ProfileThumbnailImg src={thumnailImg} alt="이미지" />
            <I.ProfileUpLoad
                type="file"
                accept="image/*"
                id="ImgfileChoice"
                onChange={addImgFile}
            />
            {isEdit ? (
                <div>
                    <I.ProfileUpLoadBtnLabel htmlFor="ImgfileChoice">등록</I.ProfileUpLoadBtnLabel>
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
        </I.UserImage>
    );
};

export default ProfileImage;
