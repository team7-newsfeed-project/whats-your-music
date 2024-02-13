import React, { useEffect } from "react";
import styled from "styled-components";
import MainPostItem from "./RecommendPostItem";
import { useDispatch, useSelector } from "react-redux";
import { db } from "database/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import { setPost } from "store/modules/posts";

const RecommendListMain = () => {
    // 홈 페이지의 메인 영역
    const setPosts = useSelector((state) => state.posts);
    const activeCategory = useSelector((state) => state.category);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            // firestore db 가져오기
            const q = query(collection(db, "posts"));
            const querySnapshot = await getDocs(q);

            const initialPosts = [];

            querySnapshot.forEach((doc) => {
                initialPosts.push({ id: doc.id, ...doc.data() });
            });

            // date 날짜시간순 정렬
            const dateOrderedPosts = [...initialPosts].sort((a, b) => {
                return new Date(b.date) - new Date(a.date); // post컬렉션 문서의 date키 밸류값은 ISO String이므로 date객체로 변환해준 후 sort
            });

            // firestore에서 가져온 데이터를 redux 통해 전달
            dispatch(setPost(dateOrderedPosts));
        };
        fetchData();
    }, []);
    const filteredPosts = setPosts.filter((post) => post.category === activeCategory);

    return (
        <MainWrapper>
            <MainBanner>♫ 오늘의 음악을 추천해주세요 🎧 </MainBanner>
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
    /* width: 1650px; */
    width: 100%;
    min-height: 700px;
    margin-bottom: 10px;
`;

const MainBanner = styled.div`
    margin: 100px;
    font-size: 20px;
    width: 100%;
    height: 200px;
    background-image: url("https://images.unsplash.com/photo-1630441099796-851705faa3ed?q=80&w=1909&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right 35% bottom 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: "Pretendard-Regular";
    font-weight: bold;
    letter-spacing: 0.4rem;
`;

const MainPostList = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin: 0px 30px 100px 30px;
`;

const ListText = styled.p`
    color: gray;
    font-size: 13px;
    height: 20px;
`;
