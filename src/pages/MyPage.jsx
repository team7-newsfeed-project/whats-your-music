// console.log(querySnapshot);
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, db } from "database/firebase";
import { signOut } from "firebase/auth";
import { setUserLogin, setUserLogout } from "store/modules/userAccount";
import ProfileContents from "components/main/ProfileContents";
import DangerButton from "components/common/DangerButton";
import Layout from "components/layout/Layout";
import * as S from "components/styles/MypageStyle";
import logoImage from "assets/logoImage.png";
import MyRecommend from "components/main/MyRecommend";

const MyPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const userState = auth.onAuthStateChanged((user) => {
            if (!user) {
                alert("로그인해주세요!");
                navigate("/");
            }
            const { displayName, email, photoURL, uid } = user;
            if (user.uid) {
                // alert("로그인 상태 입니다!");
                dispatch(setUserLogin({ displayName, email, photoURL, uid }));
            } else {
                alert("로그인해주세요!");
                navigate("/");
            }
        });
        return () => userState();
    }, [dispatch]);

    const onLogout = async () => {
        try {
            await signOut(auth);
            dispatch(setUserLogout());
            navigate("/");
        } catch (error) {
            console.log(error);
            alert("로그아웃을 다시 한 번 시도해 주세용");
        }
    };

    return (
        <Layout>
            <S.MyPageSection>
                <S.MyPageheadDiv>
                    <S.HomeLink to="/">← HOME</S.HomeLink>
                    <DangerButton name="⛔ 로그아웃 " onClick={onLogout} />

                    <h3>
                        <S.HeaderLogo src={logoImage} alt="logo" />
                    </h3>
                    <h4>마이페이지</h4>
                </S.MyPageheadDiv>
                <S.ImageNdInfo>
                    <ProfileContents />
                </S.ImageNdInfo>
                <MyRecommend />
            </S.MyPageSection>
        </Layout>
    );
};

export default MyPage;
