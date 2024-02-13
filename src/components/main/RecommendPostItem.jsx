import React, { useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import RecommendPostVideoSection from "./RecommendPostVideoSection";

const RecommendPostItem = ({ post }) => {
    const { id, nickname, title, content, date, videoSrc } = post;

    const navigate = useNavigate();

    const onPostItemClick = (id) => {
        navigate(`detail/${id}`);
    };

    // 가져온 post의 date : ISO String 이므로 다시 date객체로 변환해 -> toLocale..String으로 0000. 00. 00. 오전(오후) 0:00 형태로 변환
    const formattedDate = new Date(date).toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    });

    return (
        <MainArticleWrapper>
            <MainArticle onClick={() => onPostItemClick(id)}>
                <RecommendPostVideoSection videoSrc={videoSrc}></RecommendPostVideoSection>
                <PostTextBox>
                    <PostTitle>{title}</PostTitle>
                    <PostContent>{content}</PostContent>
                    <DateNameTextBox>
                        <PostTime>{formattedDate} &emsp;│</PostTime>
                        <PostNickname>{nickname}</PostNickname>
                    </DateNameTextBox>
                </PostTextBox>
            </MainArticle>
        </MainArticleWrapper>
    );
};

export default RecommendPostItem;

const MainArticleWrapper = styled.li`
    list-style: none;
`;

const MainArticle = styled.article`
    display: flex;
    align-items: center;
    background-color: var(--subColor3);
    width: 700px;
    height: 180px;
    border-radius: 20px;
    &:hover {
        box-shadow: 0px 0px 3px 0.3px var(--subColor1);
        transition: all 0.2s;
        transform: scale(1.01);
    }
    cursor: pointer;
`;

const PostTextBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 230px;
    gap: 10px;
    margin-left: 40px;
`;

const PostTitle = styled.p`
    color: var(--subColor2);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 18px;
    width: 320px;
    margin-bottom: 10px;
`;

const PostContent = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; // 내용 2줄까진 뜨게하고 그 이상은 자르기
    -webkit-box-orient: vertical;
    width: 320px;
    font-family: "Pretendard-Light";
    font-size: 16px;
    margin-bottom: 10px;
`;

const DateNameTextBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 320px;
`;

const PostNickname = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 320px;
    font-size: 15px;
    color: var(--subColor1);
`;

const PostTime = styled.time`
    font-family: "Pretendard-Light";
    font-size: 15px;
    width: 500px;
    color: gray;
`;
