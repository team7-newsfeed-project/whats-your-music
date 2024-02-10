// console.log(querySnapshot);
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth, db } from "database/firebase";
import Layout from "components/layout/Layout";
import logoImage from "assets/logoImage.png";
import ProfileContents from "components/main/ProfileContents";
import * as S from "components/styles/MypageStyle";
import { setUserLogin } from "store/modules/userAccount";
import { useNavigate } from "react-router-dom";
import DangerButton from "components/common/DangerButton";

const MyPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const userState = useSelector((store) => store.userAccount.userLoginState);
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

    const onLogout = () => {
        auth.signOut().then(() => {
            // console.log(res);
            navigate("/");
        });
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
                <article>
                    <div>
                        <p>내가 추천한 음악들</p>
                    </div>
                    <section>
                        <div>{/* <iframe src="" frameborder="0"></iframe> */}</div>
                    </section>
                </article>
            </S.MyPageSection>
        </Layout>
    );
};

export default MyPage;
