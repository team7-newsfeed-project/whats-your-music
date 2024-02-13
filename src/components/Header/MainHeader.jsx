import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { setCategory } from "store/modules/category";
import logoImg from "assets/whatsyourmusic_logo.png";

const MainHeader = () => {
    const userImgStyles = {
        width: 50,
        height: 50,
        borderRadius: 50,
        boxShadow: "0px 0px 2px 0.5px var(--subColor2)",
    };

    const dispatch = useDispatch();
    const activeCategory = useSelector((state) => state.category);
    const userSetAccount = useSelector((state) => state.userAccount);
    const isUserLoggedIn = userSetAccount.isLoggedIn;
    const userSetImg = userSetAccount.image;

    const defaultImage = useSelector((store) => store.userImage.selectFile);

    // const imgUpFile = useSelector((store) => store.userImage.imgUpFile); // 올린 이미지 주소?

    const onActiveCategory = (e) => {
        dispatch(setCategory(e.target.id));
    };

    return (
        <HeaderWrapper>
            <LogoImgBox>
                <img src={logoImg} width={270} alt="logo" />
            </LogoImgBox>
            <TabsWrapper>
                <Tab id="팝" onClick={onActiveCategory} $isActive={activeCategory}>
                    팝
                </Tab>
                <Tab id="클래식및재즈" onClick={onActiveCategory} $isActive={activeCategory}>
                    클래식 / 재즈
                </Tab>
            </TabsWrapper>
            <LinkWrapper>
                {/* 유저 로그인상태 ? (O)유저이미지뜨게하고 클릭 시 마이페이지 이동가능 : (X)로그인버튼 */}
                {isUserLoggedIn ? (
                    <>
                        <NewPostLink to={`postform`}>글쓰기</NewPostLink>
                        <Link to="mypage">
                            {userSetImg ? (
                                <img src={userSetImg} style={userImgStyles} />
                            ) : (
                                <img src={defaultImage} style={userImgStyles} />
                            )}
                        </Link>
                    </>
                ) : (
                    <LoginLink to="log_in">로그인</LoginLink>
                )}
            </LinkWrapper>
        </HeaderWrapper>
    );
};

export default MainHeader;

const HeaderWrapper = styled.header`
    background-color: var(--mainColor);
    display: flex;
    align-items: center;
    /* width: 1650px; */
    width: 100%;
    height: 100px;
    margin: 0px auto 10px auto;
`;

const LogoImgBox = styled.div`
    margin-left: 40px;
    margin-right: 160px;
    margin-top: 10px;
`;

const TabsWrapper = styled.ul`
    display: flex;
    gap: 150px;
    margin-right: 300px; // 이렇게 맞추면 화면전체사이즈마다 다르게 나오는 문제점
`;

const Tab = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    border-radius: 20px;
    background-color: ${(props) => (props.$isActive === props.id ? "var(--subColor1)" : "none")};
    color: ${(props) => (props.$isActive === props.id ? "var(--mainColor)" : "none")};
    box-shadow: 0px 0px 3px 1px var(--subColor1);
    cursor: pointer;
    &:hover {
        background-color: var(--subColor1);
        color: var(--mainColor);
        transition: all 0.3s;
    }
    font-family: "Pretendard-Regular";
    font-size: 17px;
`;

const LinkWrapper = styled.div`
    display: flex;
    margin-right: 250px;
    gap: 20px;
`;

const NewPostLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    color: white;
    text-decoration: none;
    border-radius: 20px;
    box-shadow: 0px 0px 3px 1px var(--subColor1);
    &:hover {
        background-color: var(--subColor1);
        color: var(--mainColor);
        transition: all 0.3s;
    }
    font-family: "Pretendard-Regular";
    font-size: 17px;
    margin-top: 0.3rem;
`;

const LoginLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    color: white;
    text-decoration: none;
    border-radius: 20px;
    box-shadow: 0px 0px 3px 1px var(--subColor2);
    &:hover {
        background-color: var(--subColor2);
        color: var(--mainColor);
        transition: all 0.3s;
    }
    font-family: "Pretendard-Regular";
    font-size: 17px;
    margin-top: 0.3rem;
    margin-left: 4rem;
`;
