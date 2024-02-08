import React from "react";
import Layout from "components/layout/Layout";
import defaultImage from "assets/defaultImage.png";
import logoImage from "assets/logoImage.png";
import * as S from "components/styles/MypageStyle";
import Footer from "components/Footer/Footer";
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
            <S.MyPageSection>
                <S.MyPageheadDiv>
                    <div>
                        <div>
                            <S.HomeLink to="/">← HOME</S.HomeLink>
                            <h3>
                                <S.HeaderLogo src={logoImage} alt="logo" />
                            </h3>
                            <h4>마이페이지</h4>
                        </div>
                    </div>
                </S.MyPageheadDiv>
            </S.MyPageSection>
        </Layout>
    );
};

export default MyPage;
