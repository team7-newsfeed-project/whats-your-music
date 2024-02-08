import React from "react";
import styled from "styled-components";
import MainPostItem from "./MainPostItem";
import { dummyData } from "shared/postsDummyData";

const Main = () => {
    // 홈 페이지의 메인 영역
    return (
        <MainWrapper>
            <MainText>오늘의 음악을 추천해주세요!</MainText>
            <MainPostList>
                {dummyData.map((post) => (
                    <MainPostItem post={post}></MainPostItem>
                ))}
            </MainPostList>
        </MainWrapper>
    );
};

export default Main;

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    background-color: var(--mainColor);
    width: 100%;
    min-height: 500px;
    border-radius: 20px;
    margin-bottom: 20px;
`;

const MainText = styled.p`
    margin: 60px;
`;

const MainPostList = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    margin: 30px;
`;
