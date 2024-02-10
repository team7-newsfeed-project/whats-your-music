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
    // const filteredPosts = posts.filter(post)

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
            dispatch(setPost(initialPosts)); // modules폴더의 posts 임포트하기
        };
        fetchData();
    }, []);
    console.log(setPosts);
    const filteredPosts = setPosts.filter((post) => post.category === activeCategory);

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

export default RecommendListMain;

const MainWrapper = styled.main`
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
    gap: 20px;
    margin: 30px;
`;
