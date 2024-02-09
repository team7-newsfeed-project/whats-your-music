import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { setCategory } from "store/modules/category";
import logoImg from "assets/logoImage.png";
import defaultUserImg from "assets/defaultImage.png";

const Header = () => {
    const activeCategory = useSelector((state) => state.category);
    const dispatch = useDispatch();

    const onActiveCategory = (e) => {
        if (e.target === e.target.currentTarget) return;
        dispatch(setCategory(e.target.id));
    };

    return (
        <HeaderWrapper>
            <div>
                <img src={logoImg} width={300} alt="logo" />
            </div>
            <MainNav>
                <TabsWrapper onClick={onActiveCategory}>
                    <Tab id="팝" $isActive={activeCategory}>
                        팝
                    </Tab>
                    <Tab id="클래식및재즈" $isActive={activeCategory}>
                        클래식 / 재즈
                    </Tab>
                </TabsWrapper>
                <LinkWrapper>
                    <NewPostLink to={`postform`}>글쓰기</NewPostLink>
                    {/* 유저 로그인상태? 마이페이지이동,이미지 : 로그인버튼 */}
                    <LoginLink to="log_in">로그인</LoginLink>
                    <Link to="mypage">
                        {/*유저프로필이미지 (없으면 기본이미지인) 가져오기 */}
                        <UserImg />
                    </Link>
                </LinkWrapper>
            </MainNav>
        </HeaderWrapper>
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
    background-color: ${(props) => (props.$isActive === props.id ? "var(--subColor1)" : "none")};
    color: ${(props) => (props.$isActive === props.id ? "var(--mainColor)" : "none")};
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

const UserImg = styled.img.attrs({
    alt: "userImg",
    src: `${defaultUserImg}`,
})`
    width: 50px;
    height: 50px;
`;