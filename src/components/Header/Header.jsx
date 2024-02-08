import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    return (
        <HeaderWrapper>
            <div>
                <p>What's Your Music?</p>
            </div>
            <nav>
                <ul>
                    <li>팝</li>
                    <li>클래식/재즈</li>
                </ul>
            </nav>
            <NewPostLink to={`/`}>글쓰기</NewPostLink>
            <LoginLink>로그인</LoginLink>
        </HeaderWrapper>
    );
};

export default Header;

const HeaderWrapper = styled.div`
    background-color: var(--mainColor);
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 20px;
`;

const NewPostLink = styled(Link)`
    border: 1px solid var(--subColor1);
    color: white;
`;

const LoginLink = styled(Link)``;
