import React, { useEffect, useState } from "react";
import { LayoutStyle } from "components/styles/LayoutStyle";
import styled from "styled-components";
import Button from "components/common/Button";
import logoImg from "assets/whatsyourmusic_logo.png";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "components/Footer/Footer";
import { doc, getDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "database/firebase";
import DangerButton from "components/common/DangerButton";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, editPost } from "store/modules/posts";
import RecommendPostVideoSection from "components/main/RecommendPostVideoSection";

const Detail = () => {
    const navigate = useNavigate();
    const [post, setPost] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const { id } = useParams();
    const { email } = useSelector((state) => state.userAccount);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchPost = async () => {
            const docRef = doc(db, "posts", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setPost(docSnap.data());
            } else {
                console.error("게시글을 찾을 수 없습니다.");
            }
        };

        fetchPost();
    }, [id]);

    if (!post) {
        return <div>게시글을 불러오는 중입니다...</div>;
    }

    const isAuthor = email === post.email;

    const deletePostHandler = async () => {
        const confirmDelete = window.confirm(
            "게시글을 영구적으로 삭제하시겠습니까?\n삭제된 게시글은 복구할 수 없습니다."
        );

        if (!confirmDelete) return;

        const docRef = doc(db, "posts", id);

        try {
            await deleteDoc(docRef);
            dispatch(deletePost(id));
            navigate("/");
        } catch (error) {
            console.error("게시글 삭제 오류:", error);
        }
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { title, videoSrc, content } = post;
        const docRef = doc(db, "posts", id);
        await updateDoc(docRef, {
            title,
            videoSrc,
            content,
        });

        dispatch(editPost(post));
        setIsEditing(false);
    };

    const formattedDate = new Date(post.date).toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    });

    return (
        <LayoutStyle>
            <HeaderBox>
                <Button
                    onClick={() => navigate("/")}
                    name={"← HOME"}
                    $bgc={"black"}
                    color={"#C9F254"}
                    // bd={"1px solid #C9F254"}
                />
                <LogoBox>
                    <img src={logoImg} width={270} alt="logo" />
                </LogoBox>
            </HeaderBox>
            <MainWrapper>
                <FormHeader>
                    <CategoryDisplay>{post.category}</CategoryDisplay>
                    <NicknameDisplay>{post.nickname}</NicknameDisplay>
                </FormHeader>
                {isEditing ? (
                    <StyledInput
                        type="text"
                        value={post.title}
                        onChange={(e) => setPost({ ...post, title: e.target.value })}
                    />
                ) : (
                    <StyledTitle>{post.title}</StyledTitle>
                )}
                {isEditing ? (
                    <StyledInput
                        type="text"
                        value={post.videoSrc}
                        onChange={(e) => setPost({ ...post, videoSrc: e.target.value })}
                    />
                ) : (
                    <RecommendPostVideoSection videoSrc={post.videoSrc} type="detail" />
                )}
                {isEditing ? (
                    <StyledTextarea
                        value={post.content}
                        onChange={(e) => setPost({ ...post, content: e.target.value })}
                    />
                ) : (
                    <StyledContent>{post.content}</StyledContent>
                )}
                <div>
                    <DateTime>{formattedDate}</DateTime>
                    {isAuthor && (
                        <>
                            <Button
                                name={isEditing ? "수정완료" : "수정"}
                                onClick={isEditing ? handleSubmit : handleEditClick}
                            />
                            <DangerButton
                                name="삭제"
                                onClick={deletePostHandler}
                                style={{ marginLeft: "10px" }}
                            />
                        </>
                    )}
                </div>
            </MainWrapper>
            <Footer />
        </LayoutStyle>
    );
};

export default Detail;

const HeaderBox = styled.header`
    background-color: var(--mainColor);
    width: 100%;
    height: 100px;
    margin: 0px auto 10px auto;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const LogoBox = styled.div`
    flex-grow: 1;
    text-align: center;
    margin-right: 140px;
`;

const MainWrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: var(--mainColor);
    width: 100%;
    /* min-height: 550px; */
    /* margin-bottom: 20px; */
    min-height: 900px;
    margin-bottom: 10px;
`;

const StyledTitle = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    padding: 10px;
    font-size: 16px;
    width: 1000px;
    margin-bottom: 10px;
    background-color: var(--subColor3);
    color: white;
`;

const StyledContent = styled.div`
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

const FormHeader = styled.div`
    margin-bottom: 20px;
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NicknameDisplay = styled.span`
    font-size: 20px;
`;

const CategoryDisplay = styled.span`
    /* border: 1px solid var(--subColor1); */
    border-radius: 20px;
    padding: 15px;
    width: 120px;
    font-size: 16px;
    color: white;
    background-color: var(--mainColor);
    outline: none;
    appearance: none;
    box-shadow: 0px 0px 3px 2px var(--subColor1);
`;

const DateTime = styled.span`
    color: var(--subColor1);
    font-size: 20px;
    margin-right: 500px;
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
