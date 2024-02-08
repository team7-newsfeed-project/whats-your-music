import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    return (
        <HeaderWrapper>
            <div>
                <p>What's Your Music?</p>
                {/*<img src="assets\logoImage.png" alt="logoImage" /> */}
            </div>
            <MainNav>
                <TabWrapper>
                    <Tab>팝</Tab>
                    <Tab>클래식/재즈</Tab>
                </TabWrapper>
                <LinkWrapper>
                    <NewPostLink to={`detail/11`}>글쓰기</NewPostLink>
                    {/* to={`detail/${id}`} */}
                    <LoginLink to={`log_in`}>로그인</LoginLink>
                </LinkWrapper>
            </MainNav>
        </HeaderWrapper> //
    );
};

export default Header;

const HeaderWrapper = styled.div`
    background-color: var(--mainColor);
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 70px;
    margin: 20px;
    border-radius: 20px;
`;

const MainNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* gap: 50px; */
`;

const TabWrapper = styled.ul`
    display: flex;
    gap: 70px;
    /* justify-content: space-between; */
`;

const Tab = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 50px;
    border: 1px solid var(--subColor1);
    border-radius: 20px;
`;

const LinkWrapper = styled.div`
    display: flex;
`;

const NewPostLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 50px;
    color: white;
    text-decoration: none;
    border: 1px solid var(--subColor1);
    border-radius: 20px;
`;

const LoginLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 50px;
    color: white;
    text-decoration: none;
    border: 1px solid var(--subColor2);
    border-radius: 20px;
`;
