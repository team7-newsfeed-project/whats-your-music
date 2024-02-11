import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { LayoutStyle } from "components/styles/LayoutStyle";
import logoImg from "assets/whatsyourmusicLogo.png";
import Button from "components/common/Button";
import { useNavigate } from "react-router-dom";
import Footer from "components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "store/modules/posts";
import { setCategory } from "store/modules/category";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "database/firebase";
import CategoryDropdown from "components/common/CategoryDropdown";

const PostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [videoSrc, setVideoSrc] = useState("");
    const [content, setContent] = useState("");
    const [currentDateTime, setCurrentDateTime] = useState("");
    const selectedCategory = useSelector((state) => state.category);
    const userNickname = useSelector((state) => state.userAccount.nickname);
    const userUid = useSelector((state) => state.userAccount.userUid);

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
            date: serverTimestamp(),
            nickname: userNickname,
            title,
            videoSrc,
            uid: userUid,
        };

        try {
            const docRef = await addDoc(collection(db, "posts"), newPost);
            newPost.id = docRef.id;
            dispatch(addPost(newPost));
            setTitle("");
            setVideoSrc("");
            setContent("");
            setCurrentDateTime("");
            alert("게시글이 등록되었습니다.");
        } catch (error) {
            console.error("Error adding post to Firestore:", error);
            alert("게시글 등록에 실패했습니다.");
        }
    };
    console.log(title, videoSrc, content);

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
                    <img src={logoImg} width={300} alt="logo" />
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
                    placeholder="제목"
                />
                <StyledInput
                    type="text"
                    value={videoSrc}
                    onChange={(e) => setVideoSrc(e.target.value)}
                    placeholder="영상 url 주소"
                />
                <StyledTextarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="본문 입력"
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
    margin: 20px;
    border-radius: 20px;
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
    min-height: 550px;
    border-radius: 20px;
    margin-bottom: 20px;
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
    border: 1px solid var(--subColor2);
    border-radius: 20px;
    padding: 15px;
    width: 80px;
    font-size: 16px;
    color: white;
    background-color: var(--mainColor);
    outline: none;
    appearance: none;
    cursor: pointer;
`;

const CategoryDisplay = styled.span`
    border: 1px solid var(--subColor1);
    border-radius: 20px;
    padding: 15px;
    width: 80px;
    font-size: 16px;
    color: white;
    background-color: var(--mainColor);
    outline: none;
    appearance: none;
`;

const FormHeader = styled.div`
    margin-bottom: 20px;
`;

const NicknameDisplay = styled.span`
    font-size: 20px;
`;
