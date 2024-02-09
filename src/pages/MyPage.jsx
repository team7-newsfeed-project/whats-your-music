import React, { useRef, useState } from "react";
import { collection, getDocs, query, ref } from "firebase/firestore";
import { db } from "database/firebase";
import Layout from "components/layout/Layout";
import defaultImage from "assets/defaultImage.png";
import logoImage from "assets/logoImage.png";
import * as S from "components/styles/MypageStyle";

// 파이어베이스 해당 콜렉션에 있는 문서 가져오기
const q = query(collection(db, "todos"));
const querySnapshot = await getDocs(q);

// console.log(querySnapshot);

const dummyData = [
    {
        userId: crypto.randomUUID(),
        nickname: "해리1",
        image: `${defaultImage}`,
        hiComment: "난 재즈가 좋아",
    },
    {
        userId: crypto.randomUUID(),
        nickname: "해리2",
        image: `${defaultImage}`,
        hiComment: "난 재즈가 좋아",
    },
];

const MyPage = () => {
    // const storage = getStorage();
    const [imgUpFile, setImgUpFile] = useState("");
    const imgRef = useRef();

    const addImgFile = () => {
        const imgFile = imgRef.current.files[0];
        const reader = new FileReader();
    };
    const data = dummyData;
    return (
        <Layout>
            <S.MyPageSection>
                <S.MyPageheadDiv>
                    <S.HomeLink to="/">← HOME</S.HomeLink>
                    <h3>
                        <S.HeaderLogo src={logoImage} alt="logo" />
                    </h3>
                    <h4>마이페이지</h4>
                </S.MyPageheadDiv>
                <S.ImageNdInfo>
                    <S.UserImage>
                        <S.ProfileThumbnailImg src={imgUpFile ? imgUpFile : defaultImage} alt="" />
                        <S.ProfileUpLoadLabel htmlFor="ImgfileChoice">
                            이미지 업로드
                        </S.ProfileUpLoadLabel>
                        <S.ProfileUpLoad
                            type="file"
                            accept="image/*"
                            id="ImgfileChoice"
                            ref={imgRef}
                            onChange={addImgFile}
                        />
                    </S.UserImage>
                    <div>
                        <p>보라돌이</p>
                        <p>나는 재즈가 좋아</p>
                    </div>
                    <ul>
                        <button>편집</button>
                    </ul>
                </S.ImageNdInfo>
            </S.MyPageSection>
        </Layout>
    );
};

export default MyPage;
