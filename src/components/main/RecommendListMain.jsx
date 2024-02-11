import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainPostItem from "./RecommendPostItem";
import { dummyData } from "shared/postsDummyData";
import { useDispatch, useSelector } from "react-redux";
import { db } from "database/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import { setPost } from "store/modules/posts";

const RecommendListMain = () => {
    // 홈 페이지의 메인 영역
    // const [posts, setPosts] = useState([]);
    const setPosts = useSelector((state) => state.posts);
    const activeCategory = useSelector((state) => state.category);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            // firestore db 가져오기
            const q = query(collection(db, "posts"));
            const querySnapshot = await getDocs(q);
            console.log(querySnapshot);

            const initialPosts = [];

            querySnapshot.forEach((doc) => {
                initialPosts.push({ id: doc.id, ...doc.data() });
            });
            // firestore에서 가져온 데이터를 redux 통해 전달
            dispatch(setPost(initialPosts));
        };
        fetchData();
    }, []);
    console.log(setPosts);
    const filteredPosts = setPosts.filter((post) => post.category === activeCategory);

    return (
        <MainWrapper>
            <MainText>오늘의 음악을 추천해주세요 </MainText>
            <ListText>
                '동영상을 재생할 수 없음'이라고 뜨는 경우, &nbsp;
                <span style={{ textDecorationLine: "underline", textDecorationColor: "gray" }}>
                    YouTube에서 보기
                </span>
                &nbsp;를 눌러주세요 :)
            </ListText>
            <MainPostList>
                {filteredPosts.map((post) => (
                    <MainPostItem key={post.id} post={post}></MainPostItem>
                ))}
            </MainPostList>
        </MainWrapper>
    );
};

export default RecommendListMain;

const MainWrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: var(--mainColor);
    width: 100%;
    min-height: 500px;
    border-radius: 20px;
    margin-bottom: 10px;
`;

const MainText = styled.p`
    margin: 60px;
    font-size: 20px;
    width: 100%;
    height: 100px;
    background-color: #b192d1;
    /* background-color: var(--subColor1); */
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    /* color: white; */
    font-family: "Pretendard-Regular";
    border-radius: 30px;
    font-weight: bold;
`;

const MainPostList = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin: 0px 30px 30px 30px;
    /* background-color: bisque; */
`;

const ListText = styled.p`
    color: gray;
    font-size: 13px;
    /* margin-bottom: 0px; */
    /* padding-bottom: 50px; */
    /* background-color: aqua; */
    height: 20px;
`;
