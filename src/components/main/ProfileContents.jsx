import React, { useState } from "react";
import ProfileImage from "./ProfileImage";
import Button from "components/common/Button";
import DangerButton from "components/common/DangerButton";
import { useSelector } from "react-redux";

const ProfileContents = () => {
    const { userUid } = useSelector((store) => store.userAccount.userLoginState);
    const { nickname, comment } = useSelector((store) => store.userContents.initUserInfo);
    const [isEdit, setIsEdit] = useState(false);
    const [editValue, setEditValue] = useState({
        nickname: "",
        comment: "",
    });
    const editValueNickname = editValue.nickname;
    const editValueComment = editValue.comment;
    const onEditValueChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setEditValue({ ...editValue, [name]: value });
    };
    const onEditContents = (e) => {
        e.preventDefault();
        console.log(1);
        setIsEdit(true);
        setEditValue({ nickname, comment });
    };

    const onEditSave = () => {
        e.preventDefault();
        //유효성
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
        console.log(editValue);
        setEditValue((prevInfo) => {
            console.log(prevInfo);
        });
        setIsEdit(false);
    };
    const onEditCancel = (e) => {
        e.preventDefault();
        setEditValue(false);
    };

    return (
        <div>
            <ProfileImage />
            <div>
                {!isEdit ? (
                    <div>
                        <p>닉네임 : {nickname}</p>
                        <p>소개 : {comment}</p>
                    </div>
                ) : (
                    <form>
                        <input
                            name="nickname"
                            value={editValueNickname}
                            onChange={onEditValueChange}
                            placeholder={
                                editValueNickname === "" ? "닉네임을 적어주세요" : editValueNickname
                            }
                        />
                        <textarea
                            name="comment"
                            cols="30"
                            rows="10"
                            value={editValueComment}
                            onChange={onEditValueChange}
                            placeholder={
                                editValueComment === "" ? "자신을 소개해주세요" : editValueComment
                            }
                        ></textarea>
                        <div>
                            {!isEdit ? (
                                <Button name="내용 편집" onClick={onEditContents} />
                            ) : (
                                <div>
                                    <Button name="수정완료" onClick={onEditSave} />
                                    <DangerButton name="수정취소" onClick={onEditCancel} />
                                </div>
                            )}
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ProfileContents;
