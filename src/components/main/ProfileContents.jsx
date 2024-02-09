import React, { useState } from "react";
import ProfileImage from "./ProfileImage";

const ProfileContents = ({ defaultImage }) => {
    const [isEdit, setIsEdit] = useState(false);
    const dummyDB = [
        {
            dbId: 1,
            nickname: "해리1",
            image: `${defaultImage}`,
            comment: "난 재즈가 좋아",
        },
        {
            dbId: 2,
            nickname: "해리2",
            image: `${defaultImage}`,
            comment: "난 재즈가 좋아",
        },
    ];
    const currUser = {
        dbId: 1,
        nickname: "해리1",
        image: `${defaultImage}`,
        comment: "난 재즈가 좋아",
    };
    const myPageData = dummyDB.find((userId) => userId.dbId === currUser.dbId);
    console.log(myPageData);
    return (
        <div>
            <ProfileImage isEdit={isEdit} />
            <div>
                {[myPageData].map((userInfo) => {
                    const { dbId, nickname, image, comment } = userInfo;
                    return (
                        <div key={dbId}>
                            <p>닉네임 : {nickname}</p>
                            <p>comment : {comment}</p>
                        </div>
                    );
                })}
                <div>
                    {isEdit ? (
                        <button>편집</button>
                    ) : (
                        <div>
                            <button>수정완료</button>
                            <button>수정취소</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileContents;
