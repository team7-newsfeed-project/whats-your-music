import React from "react";
import styled from "styled-components";
import thumbnailImg from "assets/thumbnailExImg.png";
import { Navigate, useNavigate } from "react-router-dom";

const RecommendPostItem = ({ post }) => {
    const { id, writer, title, content, date } = post;

    const navigate = useNavigate();

    const onPostItemClick = (id) => {
        navigate(`detail/${id}`);
    };

    return (
        <MainArticleWrapper>
            <MainArticle onClick={() => onPostItemClick(id)}>
                <ThumbImg />
                <div>
                    <p>{title}</p>
                    <p>{content}</p>
                    <p>{writer}</p>
                </div>
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
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    background-color: var(--subColor3);
    width: 550px;
    height: 200px;
    border-radius: 20px;
`;

const ThumbImg = styled.img.attrs({
    alt: "thumbnailImg",
    src: `${thumbnailImg}`,
})`
    width: 260px;
    height: 150px;
`;
