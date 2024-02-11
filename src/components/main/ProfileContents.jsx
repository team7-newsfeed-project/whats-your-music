import React, { useState } from "react";
import ProfileImage from "./ProfileImage";
import Button from "components/common/Button";
import DangerButton from "components/common/DangerButton";
import { useDispatch, useSelector } from "react-redux";
import { setAccount } from "store/modules/userAccount";

const ProfileContents = ({ userUid }) => {
    const dispatch = useDispatch();
    const { nickname, comment } = useSelector((store) => store.userContents.initUserInfo);
    const [isEdit, setIsEdit] = useState(false);
    const [editValue, setEditValue] = useState({
        userUid: userUid,
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
        setIsEdit(true);
        setEditValue({ nickname, comment });
    };

    const onEditSave = (e) => {
        e.preventDefault();
        //유효성
        // const editSaveCheck = window.confirm("수정내용을 저장하시겠습니까?");
        // if (
        //     editSaveCheck === true &&
        //     editValueNickname === nickname &&
        //     editValueComment === comment
        // ) {
        //     alert("수정된 내용이 없습니다");
        //     return;
        // }
        // if (editSaveCheck === false) {
        //     alert("수정을 취소하셨습니다.");
        //     setIsEdit(false);
        //     return;
        // }
        // const editData = letterValue.map((letter) => {
        //     if (letter.id === id) {
        //         return {
        //             ...letter,
        //             content: editValueContent,
        //         };
        //     }
        //     return letter;
        // });

        console.log(editValue);
        dispatch(setAccount(editValue));
        setIsEdit(false);
    };
    const onEditCancel = (e) => {
        e.preventDefault();
        setIsEdit(false);
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
                            <p></p>
                        </div>
                    </form>
                )}
                {!isEdit ? (
                    <div>
                        <Button name="내용 편집" onClick={onEditContents} />
                    </div>
                ) : (
                    <div>
                        <Button name="수정완료" onClick={onEditSave} />
                        <DangerButton name="수정취소" onClick={onEditCancel} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfileContents;
