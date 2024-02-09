import React from "react";
import styled from "styled-components";
import MainPostItem from "./MainPostItem";
import { dummyData } from "shared/postsDummyData";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
    // 홈 페이지의 메인 영역
    const activeCategory = useSelector((state) => state.category);
    // const filteredPosts = posts.filter(post)
    const filteredPosts = dummyData.filter((post) => post.category === activeCategory);

    return (
        <MainWrapper>
            <MainText>오늘의 음악을 추천해주세요!</MainText>
            <MainPostList>
                {filteredPosts.map((post) => (
                    <MainPostItem key={post.id} post={post}></MainPostItem>
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
