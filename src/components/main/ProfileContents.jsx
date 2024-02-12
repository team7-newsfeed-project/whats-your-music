import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAccount } from "store/modules/userAccount";
import { setInitValue } from "store/modules/userContents";
import { setUserInfo } from "database/FirebaseAPI";
import DangerButton from "components/common/DangerButton";
import Button from "components/common/Button";
import ProfileImage from "./ProfileImage";

const ProfileContents = () => {
    const dispatch = useDispatch();
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
        // setEditValue({ nickname, comment });
    };

    return (
        <div>
            <ProfileImage />
            <div>
                {!isEdit ? (
                    <div>
                        <div>
                            <p>닉네임 : {nickname}</p>
                            <p>소개 : {comment}</p>
                        </div>
                        <div>
                            <Button name="내용 편집" onClick={onEditContents} />
                        </div>
                    </div>
                ) : (
                    <form onSubmit={onEditSave}>
                        <div>
                            <input
                                name="nickname"
                                value={editValueNickname}
                                onChange={onEditValueChange}
                                placeholder={
                                    editValueNickname === ""
                                        ? "닉네임을 적어주세요"
                                        : editValueNickname
                                }
                            />
                            <textarea
                                name="comment"
                                cols="30"
                                rows="10"
                                value={editValueComment}
                                onChange={onEditValueChange}
                                placeholder={
                                    editValueComment === ""
                                        ? "자신을 소개해주세요"
                                        : editValueComment
                                }
                            ></textarea>
                        </div>
                        <div>
                            <Button name="수정완료" />
                            <DangerButton name="수정취소" onClick={onEditCancel} />
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ProfileContents;
