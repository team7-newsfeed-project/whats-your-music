// console.log(querySnapshot);
import React, { useEffect, useState } from "react";
import Layout from "components/layout/Layout";
import logoImage from "assets/logoImage.png";
import * as S from "components/styles/MypageStyle";
import { useSelector } from "react-redux";
import ProfileContents from "components/main/ProfileContents";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "database/firebase";

const MyPage = () => {
    const defaultImage = useSelector((store) => store.userImage.fileImage);

    useEffect(() => {
        const fetchData = async () => {
            // collection 이름이 todos인 collection의 모든 document를 가져옵니다.
            const q = query(collection(db, "todos"));
            const querySnapshot = await getDocs(q);

            const initialPage = [];

            querySnapshot.forEach((doc) => {
                initialPage.push({ id: doc.id, ...doc.data() });
            });

            // firestore에서 가져온 데이터를 state에 전달
        };

        fetchData();
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
