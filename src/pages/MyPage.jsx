// console.log(querySnapshot);
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query } from "firebase/firestore";
import { auth, db, signout } from "database/firebase";
import { setUserLogin, setUserLogout } from "store/modules/userAccount";
import { setMyRecommend } from "store/modules/userRecommend";
import ProfileContents from "components/main/ProfileContents";
import DangerButton from "components/common/DangerButton";
import MyRecommend from "components/main/MyRecommend";
import Layout from "components/layout/Layout";
import * as S from "components/styles/MypageStyle";
import logoImage from "assets/logoImage.png";

const MyPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userUid } = useSelector((store) => store.userAccount.userLoginState);

    useEffect(() => {
        const fetchData = async () => {
            // firestore db 가져오기
            const q = query(collection(db, "posts"));
            const querySnapshot = await getDocs(q);
            const initialPosts = [];

            querySnapshot.forEach((doc) => {
                initialPosts.push({ id: doc.id, ...doc.data() });
            });
            console.log(initialPosts);
            dispatch(setMyRecommend(initialPosts));
        };
        fetchData();
    }, []);

    useEffect(() => {
        const userState = auth.onAuthStateChanged((user) => {
            if (!user) {
                alert("로그인해주세요!");
                navigate("/");
            }
            if (user.uid) {
                const { displayName, email, photoURL, uid } = user;
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
            await signout();
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
                    <ProfileContents userUid={userUid} />
                </S.ImageNdInfo>
                <MyRecommend userUid={userUid} />
            </S.MyPageSection>
        </Layout>
    );
};

export default MyPage;
