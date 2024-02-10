// console.log(querySnapshot);
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth, db } from "database/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import Layout from "components/layout/Layout";
import logoImage from "assets/logoImage.png";
import ProfileContents from "components/main/ProfileContents";
import * as S from "components/styles/MypageStyle";
import { setUserLogin } from "store/modules/userLogin";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userLogin, isLogin } = useSelector((store) => store.userLogin);
    console.log(userLogin);
    console.log(isLogin);

    const defaultImage = useSelector((store) => store.userImage.fileImage);
    useEffect(() => {
        const userState = auth.onAuthStateChanged((user) => {
            console.log(user.uid);
            if (user.uid) {
                alert("로그인 상태 입니다!");
                dispatch(setUserLogin(user.uid));
            } else {
                alert("로그인해주세요!");
                navigate("/");
            }
        });
        return () => userState();
    }, [dispatch]);
    useEffect(() => {
        const myData = async () => {
            // collection 이름이 todos인 collection의 모든 document를 가져옵니다.
            const q = query(collection(db, "todos"));
            const querySnapshot = await getDocs(q);

            const initialPage = [];

            querySnapshot.forEach((doc) => {
                initialPage.push({ id: doc.id, ...doc.data() });
            });

            // firestore에서 가져온 데이터를 state에 전달
        };

        myData();
    }, []);
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
