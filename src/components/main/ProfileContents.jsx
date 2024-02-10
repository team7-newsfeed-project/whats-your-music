import React, { useState } from "react";
import ProfileImage from "./ProfileImage";
import Button from "components/common/Button";
import DangerButton from "components/common/DangerButton";
import { useSelector } from "react-redux";

const ProfileContents = () => {
    const userInfo = useSelector((store) => store.userContents.dbUserInfo);
    const currUser = {
        dbId: 1,
        nickname: "",
        comment: "",
    };
    const myPageData = userInfo.find((userId) => userId.dbId === currUser.dbId);
    const { dbId, nickname, comment } = myPageData;
    const [isEdit, setIsEdit] = useState(false);
    const [contentsValue, setContentsValue] = useState(currUser);
    const contentsValueNickname = contentsValue.nickname;
    const contentsValueComment = contentsValue.comment;

    const onEditValueChange = (e) => {
        const { name, value } = e.target;
        setContentsValue({ ...contentsValue, [name]: value });
    };
    const onEditContents = () => {
        setContentsValue(true);
    };
    const onEditCancel = () => {
        setContentsValue(false);
    };
    const onEditSave = () => {
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
            // alert("내용을 수정하셨습니다.");
            // return prevInfo.map((prevItem) => {
            //     console.log(prevItem);
            //     // if (prevTodo.dbId === dbId) {
            //     //     return {
            //     //         ...prevTodo,
            //     //         nickname: editValueNickname, //새로 들어간 title값
            //     //         comment: editValueComment,
            //     //     };
            //     // }
            //     // return prevTodo;
            // });
        });
        setIsEdit(false);
    };
    // console.log(myPageData);
    return (
        <div>
            <ProfileImage isEdit={isEdit} />
            <div>
                {!isEdit ? (
                    [myPageData].map((userInfo) => {
                        const { dbId, nickname, comment } = userInfo;
                        return (
                            <div key={dbId}>
                                <p>닉네임 : {nickname}</p>
                                <p>comment : {comment}</p>
                            </div>
                        );
                    })
                ) : (
                    <div>
                        <textarea
                            name="nickname"
                            cols="15"
                            rows="1"
                            value={contentsValueNickname}
                            onChange={onEditValueChange}
                            placeholder={
                                editValueNickname === "" ? "닉네임을 적어주세요" : editValueNickname
                            }
                        ></textarea>
                        <textarea
                            name="comment"
                            cols="30"
                            rows="10"
                            value={contentsValueComment}
                            onChange={onEditValueChange}
                            placeholder={
                                editValueComment === "" ? "자신을 소개해주세요" : editValueComment
                            }
                        ></textarea>
                    </div>
                )}

                <div>
                    {isEdit ? (
                        <div>
                            <Button name="수정완료" onClick={onEditSave} />
                            <DangerButton name="수정취소" onClick={onEditCancel} />
                        </div>
                    ) : (
                        <Button name="내용 편집" onClick={onEditContents} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileContents;
