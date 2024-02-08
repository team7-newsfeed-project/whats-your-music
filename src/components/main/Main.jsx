import React from "react";
import styled from "styled-components";
import MainPostItem from "./MainPostItem";

const Main = () => {
    // 홈 페이지의 메인 영역
    return (
        <MainWrapper>
            <p>오늘의 음악을 추천해주세요!</p>
            <MainPostList>
                <MainPostItem></MainPostItem>
                <MainPostItem></MainPostItem>
            </MainPostList>
        </MainWrapper>
    );
};

export default Main;

const MainWrapper = styled.div`
    background-color: var(--mainColor);
    width: 100%;
    min-height: 500px;
    border-radius: 20px;
    margin-bottom: 20px;
`;

const MainPostList = styled.ul`
    gap: 20px;
`;
