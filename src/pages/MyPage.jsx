// console.log(querySnapshot);
import React, { useEffect, useState } from "react";
import Layout from "components/layout/Layout";
import logoImage from "assets/logoImage.png";
import * as S from "components/styles/MypageStyle";
import { useSelector } from "react-redux";
import ProfileContents from "components/main/ProfileContents";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "database/firebase";

const MyPage = () => {
    const defaultImage = useSelector((store) => store.userImage.fileImage);

    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         console.log("user", user);
    //     });
    // }, [user]);
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
                    <ProfileContents defaultImage={defaultImage} />
                </S.ImageNdInfo>
            </S.MyPageSection>
        </Layout>
    );
};

export default MyPage;
