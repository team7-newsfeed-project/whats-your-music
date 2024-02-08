import React from "react";
import logoImage from "assets/logoImage.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PostForm = () => {
    return (
        <HeaderContainer>
            <HomeLink>← HOME</HomeLink>
            <HeaderLogo src={logoImage} alt="logo" />
        </HeaderContainer>
    );
};

export default PostForm;

const HeaderContainer = styled.header`
    width: 100%;
    height: 70px;
    margin: 30px 0;
    background-color: var(--mainColor);
    border-radius: 20px;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HeaderLogo = styled.img`
    height: 60px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
`;

const HomeLink = styled(Link)`
    text-decoration: none;
    color: var(--subColor2);
    border: 1px solid var(--subColor2);
    padding: 20px;
    border-radius: 20px;
`;
