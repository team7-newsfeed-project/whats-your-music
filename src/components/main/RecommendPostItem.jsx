import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import RecommendPostVideoSection from "./RecommendPostVideoSection";

const RecommendPostItem = ({ post }) => {
    const { id, nickname, title, content, date, videoSrc } = post;

    const navigate = useNavigate();

    const onPostItemClick = (id) => {
        navigate(`detail/${id}`);
    };

    // NOTE: postform에서 글쓴 시각 date (파이어베이스통해) 전달받아 출력하기로? (아래 보류)
    // new Date() 로 파이어베이스에 데이터 넣고 (글쓰기 postForm에서) -> 가져와 toLocaleString써서 출력하기?
    // 파이어베이스에 직접 date를 넣으면 timestamp라서 ..
    //: 파이어베이스에 저장된 타임스탬프객체 -> toDate()메서드로 Date객체로 변환해 쓰기

    // const formattedDate = new Date().toLocaleDateString("ko-KR", {
    //     year: "numeric",
    //     month: "long",
    //     day: "numeric",
    // });

    return (
        <MainArticleWrapper>
            <MainArticle onClick={() => onPostItemClick(id)}>
                <RecommendPostVideoSection videoSrc={videoSrc}></RecommendPostVideoSection>
                <PostTextBox>
                    <PostTitle>{title}</PostTitle>
                    <PostContent>{content}</PostContent>
                    <DateNameTextBox>
                        <time>{date}</time>
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
    /* justify-content: space-around; */
    align-items: center;
    background-color: var(--subColor3);
    width: 600px;
    height: 200px;
    border-radius: 20px;
`;

const PostTextBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 230px;
    gap: 10px;
    margin-left: 30px;
    /* font-family: "Pretendard-Regular"; */
`;

const PostTitle = styled.p`
    border: 1px solid var(--subColor1);
    border-radius: 10px;
    padding: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const PostContent = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const DateNameTextBox = styled.div`
    display: flex;
    justify-content: space-between;
    /* gap: 30px; */
`;

const PostNickname = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
