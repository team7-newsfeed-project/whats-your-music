import React from "react";
import styled from "styled-components";
import thumbnailImg from "assets/thumbnailExImg.png";
import { Navigate, useNavigate } from "react-router-dom";

const RecommendPostItem = ({ post }) => {
    const { id, nickname, title, content, date, videoSrc } = post;

    const navigate = useNavigate();

    const onPostItemClick = (id) => {
        navigate(`detail/${id}`);
    };

    // new Date() 로 파이어베이스에 데이터 넣고 (글쓰기 postForm에서) -> 가져와 toLocaleString써서 출력하기?
    // 파이어베이스에 직접 date를 넣으면 timestamp라서 ..
    //: 파이어베이스에 저장된 타임스탬프객체 -> toDate()메서드로 Date객체로 변환해 쓰기
    const formattedDate = date.toDate().toLocaleString("ko-KR", {
        year: "2-digit", // 혹은 numeric
        month: "numeric",
        day: "numeric",
    });

    return (
        <MainArticleWrapper>
            <MainArticle onClick={() => onPostItemClick(id)}>
                {/* <PostImgBox $thumbImgSrc={thumbImgSrc}>
                </PostImgBox> */}
                <RecommendPostVideoSection></RecommendPostVideoSection>
                <PostTextBox>
                    <PostTitle>{title}</PostTitle>
                    <PostContent>{content}</PostContent>
                    <DateNameTextBox>
                        <time>{formattedDate}</time>
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
    width: 550px;
    height: 145px;
    border-radius: 20px;
`;

// const PostImgBox = styled.div`
//     width: 230px;
//     height: 120px;
//     border-radius: 15px;
//     margin-left: 20px;
//     background-image: url(${(props) => props.$thumbImgSrc});
//     background-size: cover; // 결국 이미지 border-radius등 적용위해 배경이미지 로 쓰기로 !! 됐다 ㅠ
// `;

const PostTextBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 230px;
    gap: 10px;
    margin-left: 30px;
    /* background-color: aliceblue; */
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
