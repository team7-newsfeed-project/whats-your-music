import React, { useEffect, useState } from "react";
import { LayoutStyle } from "components/styles/LayoutStyle";
import styled from "styled-components";
import Button from "components/common/Button";
import logoImg from "assets/whatsyourmusicLogo.png";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "components/Footer/Footer";
import { doc, getDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "database/firebase";
import DangerButton from "components/common/DangerButton";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, editPost } from "store/modules/posts";

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
            dispatch(deletePost({ postId: id }));
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

        const { id, title, videoSrc, content } = post;

        const docRef = doc(db, "posts", id);
        await updateDoc(docRef, {
            title,
            videoSrc,
            content,
        });

        const editedPost = { id, title, videoSrc, content };
        dispatch(editPost(editedPost));
        setIsEditing(false);
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
                    <CategoryDisplay>{post.category}</CategoryDisplay>
                    <NicknameDisplay>{post.nickname}</NicknameDisplay>
                </FormHeader>
                <StyledTitle>
                    {isEditing ? (
                        <StyledInput
                            type="text"
                            value={post.title}
                            onChange={(e) => setPost({ ...post, title: e.target.value })}
                        />
                    ) : (
                        post.title
                    )}
                </StyledTitle>
                <StyledTitle>
                    {isEditing ? (
                        <StyledInput
                            type="text"
                            value={post.videoSrc}
                            onChange={(e) => setPost({ ...post, videoSrc: e.target.value })}
                        />
                    ) : (
                        post.videoSrc
                    )}
                </StyledTitle>
                <StyledContent>
                    {isEditing ? (
                        <StyledTextarea
                            value={post.content}
                            onChange={(e) => setPost({ ...post, content: e.target.value })}
                        />
                    ) : (
                        post.content
                    )}
                </StyledContent>
                <div>
                    <DateTime>{post.date}</DateTime>
                    {isAuthor && (
                        <>
                            <Button
                                name={isEditing ? "수정완료" : "수정"}
                                onClick={isEditing ? handleSubmit : handleEditClick}
                            />
                            <DangerButton name="삭제" onClick={deletePostHandler} />
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
`;

const NicknameDisplay = styled.span`
    font-size: 20px;
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
