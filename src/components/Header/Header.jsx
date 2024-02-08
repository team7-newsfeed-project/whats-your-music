import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { setCategory } from "store/modules/category";
import logoImage from "assets/logoImage.png";

const Header = () => {
    const activeCategory = useSelector((state) => state.category);
    const dispatch = useDispatch();

    const onActiveCategory = (e) => {
        if (e.target === e.target.currentTarget) return;
        dispatch(setCategory(e.target.textContent));
    };

    return (
        <HeaderWrapper>
            <div>
                <img src={logoImage} width={300} alt="logo" />
            </div>
            <MainNav>
                <TabsWrapper onClick={onActiveCategory}>
                    <Tab $isActive={activeCategory}>팝</Tab>
                    <Tab $isActive={activeCategory}>클래식 / 재즈</Tab>
                </TabsWrapper>
                <LinkWrapper>
                    <NewPostLink to={`postform`}>글쓰기</NewPostLink>
                    {/* to={`detail/${id}`} */}
                    <LoginLink to="login">로그인</LoginLink>
                </LinkWrapper>
            </MainNav>
        </HeaderWrapper> //
    );
};

export default Header;

const HeaderWrapper = styled.header`
    background-color: var(--mainColor);
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100px;
    margin: 20px;
    border-radius: 20px;
`;

const MainNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* gap: 50px; */
`;

const TabsWrapper = styled.ul`
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
    background-color: ${(props) =>
        props.$isActive === props.children ? "var(--subColor1)" : "none"};
    color: ${(props) => (props.$isActive === props.children ? "var(--mainColor)" : "none")};
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
    &:hover {
        background-color: var(--subColor1);
        color: var(--mainColor);
    }
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
    &:hover {
        background-color: var(--subColor2);
        color: var(--mainColor);
    }
`;
