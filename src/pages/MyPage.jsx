import React from "react";
import defaultImage from "assets/defaultImage.png";
import * as S from "components/styles/MypageStyle";
import Layout from "components/layout/Layout";
const dummyData = {
    userId: crypto.randomUUID(),
    nickname: "보라돌이",
    image: `${defaultImage}`,
    hiComment: "난 재즈가 좋아",
};

const MyPage = () => {
    const data = dummyData;
    return (
        <Layout>
            <S.MyPageWapper>MyPage</S.MyPageWapper>
        </Layout>
    );
};

export default MyPage;
