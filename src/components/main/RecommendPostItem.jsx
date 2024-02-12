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

    // 시간순정렬하고싶으면 여기서 다시 date객체로 변환 후 ?
    // iso string을 바꿔줘야 그런 문자열 이어야 date객체로 변환.. 되는. newDATE  -> date객체로 변환해서 그걸로 sort
    // 출력시엔 다시 isoString을 -> 출력원하는 대로
    // console.log("가져온 date: ", date, typeof date);
    // let dateRef = useRef("");
    // if (date) {
    const dateToDateObject = new Date(date); // 가져온 post의 date : ISO String 이므로 다시 date객체로 변환해 sort메서드로 정렬해주기

    const formattedDate = dateToDateObject.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    });
    //     toDate().toLocaleDateString("ko-KR", {
    //     year: "numeric",
    //     month: "numeric",
    //     day: "numeric",
    // });
    //     dateRef = formattedDate;
    // }

    // console.log("dateToDateObject:", dateToDateObject, typeof dateToDateObject);

    return (
        <MainArticleWrapper>
            <MainArticle onClick={() => onPostItemClick(id)}>
                <RecommendPostVideoSection videoSrc={videoSrc}></RecommendPostVideoSection>
                <PostTextBox>
                    <PostTitle>{title}</PostTitle>
                    <PostContent>{content}</PostContent>
                    <DateNameTextBox>
                        <PostTime>{formattedDate}</PostTime>
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
    width: 700px;
    height: 180px;
    border-radius: 20px;
    &:hover {
        box-shadow: 0px 0px 3px 0.3px var(--subColor1);
        transition: all 0.2s;
        transform: scale(1.01);
    }
`;

const PostTextBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 230px;
    gap: 10px;
    margin-left: 40px;
    /* font-family: "Pretendard-Regular"; */
`;

const PostTitle = styled.p`
    /* border: 1px solid var(--subColor1); */
    color: var(--subColor2);
    /* border-radius: 10px; */
    /* padding: 10px; */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 18px;
    /* background-color: beige; */
    width: 320px;
    margin-bottom: 10px;
`;

const PostContent = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    /* white-space: nowrap; */
    display: -webkit-box;
    -webkit-line-clamp: 2; // 내용 2줄까진 뜨게하고 그 이상은 자르기
    -webkit-box-orient: vertical;
    width: 320px;
    /* height: 30px; */
    font-family: "Pretendard-Light";
    font-size: 16px;
    margin-bottom: 10px;
    /* background-color: blueviolet; */
`;

const DateNameTextBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 320px;
    /* float: right; */
    /* background-color: aqua; */
`;

const PostNickname = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 320px;
    /* background-color: antiquewhite; */
    font-size: 15px;
    color: var(--subColor1);
`;

const PostTime = styled.time`
    font-family: "Pretendard-Light";
    font-size: 15px;
    width: 500px;
    color: gray;
    background-color: antiquewhite;
`;
