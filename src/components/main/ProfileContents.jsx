import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { setUserInfo } from "database/FirebaseAPI";
import { auth } from "database/firebase";
import { setAccount, setUserLogout } from "store/modules/userAccount";
import { setInitValue } from "store/modules/userContents";
import Button from "components/common/Button";
import DangerButton from "components/common/DangerButton";
import ProfileImage from "./ProfileImage";
import * as PC from "components/styles/ProfileContentsStyle";

const ProfileContents = () => {
    const editNicknameRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const myPageUserInfo = useSelector((store) => store.userAccount);
    const { nickname, comment } = useSelector((store) => store.userContents.initUserInfo);
    const [editValue, setEditValue] = useState({
        nickname,
        comment,
    });
    const [isEdit, setIsEdit] = useState(false);
    const editValueNickname = editValue.nickname;
    const editValueComment = editValue.comment;

    const onEditValueChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setEditValue({ ...editValue, [name]: value });
    };

    // useEffect(() => {
    //     if (!isEdit) {
    //         editNicknameRef.current.focus();
    //     }
    // }, [isEdit]);

    const onEditContents = (e) => {
        e.preventDefault();
        setIsEdit(true);
        setEditValue({ nickname, comment });
    };

    const onEditSave = (e) => {
        e.preventDefault();
        // 유효성;
        const editSaveCheck = window.confirm("수정내용을 저장하시겠습니까?");
        if (
            editSaveCheck === true &&
            editValueNickname === nickname &&
            editValueComment === comment
        ) {
            alert("수정된 내용이 없습니다");
            return;
        }

        if (editSaveCheck === false) {
            alert("수정을 취소하셨습니다.");
            setIsEdit(false);
            return;
        }

        dispatch(setInitValue(editValue));
        dispatch(setAccount(editValue));

        const userAccountEdit = async () => {
            await setUserInfo(myPageUserInfo, editValue);
        };
        userAccountEdit();
        setIsEdit(false);
    };

    const onEditCancel = (e) => {
        e.preventDefault();
        setIsEdit(false);
    };

    const onLogout = async () => {
        try {
            await signOut(auth);
            dispatch(setUserLogout());
            alert("로그아웃되셨습니다!");
            navigate("/");
        } catch (error) {
            console.log(error);
            alert("로그아웃을 다시 한 번 시도해 주세용");
        }
    };
    return (
        <PC.ProfileContentsSection>
            <PC.ImageNdInfo>
                <ProfileImage />
                <div>
                    {!isEdit ? (
                        <PC.ProfileInfoarticle>
                            <PC.ProfileContentsDiv>
                                <PC.ProfileNicknameDiv>
                                    <div>
                                        <p>{nickname}</p>
                                    </div>
                                    <DangerButton name="⛔ 로그아웃" onClick={onLogout} />
                                </PC.ProfileNicknameDiv>
                                <PC.ProfileCommentDiv>
                                    <p>
                                        <span>{comment}</span>
                                    </p>
                                </PC.ProfileCommentDiv>
                            </PC.ProfileContentsDiv>
                            <PC.ProfileEditor>
                                <Button
                                    name="내용 편집"
                                    onClick={onEditContents}
                                    fsize="1.1rem"
                                    pd="0.6, 1"
                                />
                            </PC.ProfileEditor>
                        </PC.ProfileInfoarticle>
                    ) : (
                        <form onSubmit={onEditSave}>
                            <PC.ProfileEditDiv>
                                <PC.ProfileEditInputDiv>
                                    <PC.ProfileEditInput
                                        name="nickname"
                                        value={editValueNickname}
                                        ref={editNicknameRef}
                                        onChange={onEditValueChange}
                                        maxLength={8}
                                        placeholder={
                                            editValueNickname === ""
                                                ? "닉네임을 적어주세요 (8글자 이내)"
                                                : editValueNickname
                                        }
                                    />
                                </PC.ProfileEditInputDiv>
                                <PC.ProfileEditTextarea
                                    name="comment"
                                    cols="30"
                                    rows="10"
                                    value={editValueComment}
                                    onChange={onEditValueChange}
                                    maxLength={50}
                                    placeholder={
                                        editValueComment === ""
                                            ? "자신을 소개해주세요 (50글자 이내)"
                                            : editValueComment
                                    }
                                ></PC.ProfileEditTextarea>
                                <PC.EditDoneDiv>
                                    <Button name="수정완료" />
                                    <DangerButton name="수정취소" onClick={onEditCancel} />
                                </PC.EditDoneDiv>
                            </PC.ProfileEditDiv>
                        </form>
                    )}
                </div>
            </PC.ImageNdInfo>
        </PC.ProfileContentsSection>
    );
};

export default ProfileContents;
