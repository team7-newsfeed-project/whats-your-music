import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { LayoutStyle } from "components/styles/LayoutStyle";
import logoImg from "assets/whatsyourmusic_logo.png";
import Button from "components/common/Button";
import { useNavigate } from "react-router-dom";
import Footer from "components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "store/modules/posts";
import { setCategory } from "store/modules/category";
import { addDoc, collection } from "firebase/firestore";
import { db } from "database/firebase";
import CategoryDropdown from "components/common/CategoryDropdown";
import RecommendPostVideoSection from "components/main/RecommendPostVideoSection";

const PostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [videoSrc, setVideoSrc] = useState("");
    const [content, setContent] = useState("");
    const [currentDateTime, setCurrentDateTime] = useState("");
    const selectedCategory = useSelector((state) => state.category);
    const userNickname = useSelector((state) => state.userAccount.nickname);
    const email = useSelector((state) => state.userAccount.email);

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const formattedDateTime = `${now.getFullYear()}.${
                now.getMonth() + 1
            }.${now.getDate()} ${now.getHours() >= 12 ? "오후" : "오전"} ${
                now.getHours() % 12 || 12
            }:${now.getMinutes().toString().padStart(2, "0")}`;
            setCurrentDateTime(formattedDateTime);
        };
        updateDateTime();

        const intervalId = setInterval(updateDateTime, 60000);

        return () => clearInterval(intervalId);
    }, []);

    const handlePostSubmit = async (e) => {
        e.preventDefault();

        if (!title || !videoSrc || !content) {
            alert("제목, 영상 URL, 본문은 필수 입력값입니다.");
            return;
        }

        const newPost = {
            category: selectedCategory,
            content,
            date: new Date().toISOString(),
            nickname: userNickname,
            title,
            videoSrc,
            email,
        };

        try {
            const docRef = await addDoc(collection(db, "posts"), newPost);
            newPost.id = docRef.id;
            dispatch(addPost(newPost));
            setTitle("");
            setVideoSrc("");
            setContent("");
            setCurrentDateTime("");
            alert("게시글이 등록되었습니다");
            navigate("/");
        } catch (error) {
            console.error("Error adding post to Firestore:", error);
            alert("게시글 등록에 실패했습니다!");
        }
    };

    const handleGenreChange = (event) => {
        dispatch(setCategory(event.target.value));
    };

    return (
        <LayoutStyle>
            <HeaderBox>
                <Button
                    onClick={() => navigate("/")}
                    name={"← HOME"}
                    $bgc={"black"}
                    color={"#C9F254"}
                    $bd={"1px solid #C9F254"}
                />
                <LogoBox>
                    <img src={logoImg} width={270} alt="logo" />
                </LogoBox>
            </HeaderBox>
            <MainWrapper>
                <FormHeader>
                    <CategoryDisplay>{selectedCategory}</CategoryDisplay>
                    <NicknameDisplay>{userNickname}</NicknameDisplay>
                </FormHeader>
                <StyledInput
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder=" 제목을 입력해주세요"
                />
                <StyledInput
                    type="text"
                    value={videoSrc}
                    onChange={(e) => setVideoSrc(e.target.value)}
                    placeholder=" 올리고 싶은 Youtube 영상의 일반 URL 주소 혹은 공유 URL 주소를 입력해주세요"
                />
                {videoSrc ? (
                    <>
                        <RecommendPostVideoSection videoSrc={videoSrc} type="detail" />
                        <VideoText>
                            Youtube 영상 재생 시 '오류가 발생'했다고 뜨는 경우, 유효하지 않은 영상
                            URL 주소일 수 있어요
                        </VideoText>
                    </>
                ) : (
                    ""
                )}
                <StyledTextarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder=" 본문을 입력해주세요"
                />
                <div>
                    <DateTime>{currentDateTime}</DateTime>
                    <CategoryDropdown onChange={handleGenreChange} value={setCategory} />
                    <SubmitBtn onClick={handlePostSubmit}>등록</SubmitBtn>
                </div>
            </MainWrapper>
            <Footer />
        </LayoutStyle>
    );
};

export default PostForm;

const HeaderBox = styled.header`
    background-color: var(--mainColor);
    width: 100%;
    height: 100px;
    /* margin: 20px; */
    margin: 0px auto 10px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const LogoBox = styled.div`
    flex-grow: 1;
    text-align: center;
`;

const MainWrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: var(--mainColor);
    width: 100%;
    min-height: 600px;
    margin-bottom: 10px;
`;

const StyledInput = styled.input`
    border: 1px solid black;
    border-radius: 20px;
    padding: 10px;
    font-size: 16px;
    width: 1000px;
    margin-bottom: 10px;
    background-color: var(--subColor3);
    color: white;
`;

const StyledTextarea = styled.textarea`
    border: 1px solid black;
    border-radius: 20px;
    padding: 10px;
    font-size: 16px;
    width: 1000px;
    height: 200px;
    margin-bottom: 20px;
    background-color: var(--subColor3);
    color: white;
`;

const DateTime = styled.span`
    color: var(--subColor1);
    font-size: 20px;
    margin-right: 500px;
`;

const SubmitBtn = styled.button`
    /* border: 1px solid var(--subColor2); */
    border: 0;
    border-radius: 20px;
    padding: 15px;
    width: 80px;
    font-size: 16px;
    color: white;
    background-color: var(--mainColor);
    box-shadow: 0px 0px 3px 1px var(--subColor2);
    outline: none;
    appearance: none;
    cursor: pointer;
    &:hover {
        background-color: var(--subColor2);
        color: var(--mainColor);
        transition: all 0.3s;
    }
    /* font-family: "Pretendard-Regular"; */
`;

const CategoryDisplay = styled.span`
    /* border: 1px solid var(--subColor1); */
    border-radius: 20px;
    padding: 15px;
    width: 80px;
    font-size: 16px;
    color: white;
    background-color: var(--mainColor);
    outline: none;
    appearance: none;
    box-shadow: 0px 0px 3px 2px var(--subColor1);
`;

const FormHeader = styled.div`
    margin-bottom: 20px;
`;

const NicknameDisplay = styled.span`
    font-size: 20px;
`;

const VideoText = styled.p`
    font-size: 13px;
    color: gray;
`;
