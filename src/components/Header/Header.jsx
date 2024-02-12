import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { setCategory } from "store/modules/category";
import logoImg from "assets/whatsyourmusic_logo.png";

const Header = () => {
    const userImgStyles = {
        width: 50,
        height: 50,
        borderRadius: 50,
        // border: 1,
        // borderColor: "var(--subColor2)",
        // borderStyle: "solid",
        boxShadow: "0px 0px 2px 0.5px var(--subColor2)",
    };

    const dispatch = useDispatch();
    const activeCategory = useSelector((state) => state.category);
    const userSetAccount = useSelector((state) => state.userAccount);
    const isUserLoggedIn = userSetAccount.isLoggedIn;
    const userSetImg = userSetAccount.image;
    // 테스트용 userSetImg -https://cdn.imweb.me/upload/S20221129c3c04fdc67a8b/09e904cb8f26f.png
    // https://i.pinimg.com/564x/d3/e0/d5/d3e0d50b6e4dd4c47757faedb737d9e4.jpg
    // const userSetImg = userSetAccount.image;

    const defaultImage = useSelector((store) => store.userImage.selectFile);
    // 이변수를 그냥 스타일컴포넌트에서 그대로 쓸 수 없다. props로 주기

    // const imgUpFile = useSelector((store) => store.userImage.imgUpFile); // 올린 이미지 주소?

    // console.log("isLogin:", isUserLoggedIn);
    // console.log("defaultImage: ", defaultImage);
    // console.log("userSetImg", userSetImg);

    const onActiveCategory = (e) => {
        dispatch(setCategory(e.target.id));
    };

    return (
        <HeaderWrapper>
            <LogoImgBox>
                <img src={logoImg} width={270} alt="logo" />
            </LogoImgBox>
            {/* <MainNav> */}
            <TabsWrapper>
                <Tab id="팝" onClick={onActiveCategory} $isActive={activeCategory}>
                    팝
                </Tab>
                <Tab id="클래식및재즈" onClick={onActiveCategory} $isActive={activeCategory}>
                    클래식 / 재즈
                </Tab>
            </TabsWrapper>
            <LinkWrapper>
                <NewPostLink to={`postform`}>글쓰기</NewPostLink>
                {/* 유저 로그인상태 ? (O)유저이미지뜨게하고 클릭 시 마이페이지 이동가능 : (X)로그인버튼 */}
                {isUserLoggedIn ? (
                    <Link to="mypage">
                        {userSetImg ? (
                            <img src={userSetImg} style={userImgStyles} />
                        ) : (
                            // borderRadius={10} "..px"등 다 적용안됨.. ㅠ imageStyle={{ borderRadius: 15 }}
                            // style={{}} 인스타일링 형식으로 안써줘서 생긴문제였음. 해결! and src는 style안에 써주는게 아님 따로 써줘야
                            <img src={defaultImage} style={userImgStyles} />
                        )}
                        {/* userAccount.js에서 useerLoginState - image 주소 문자열 넣어보면 잘 뜸 
                            auth설정해서 더 해보고 이미지border-radius등 조절하기 */}
                        {/* <UserImg $isImgSet={userSetImg} $defaultImage={defaultImage} /> */}
                        {/*유저프로필이미지 (없으면 기본이미지인) 가져오기 */}
                        {/* <UserProfileImgBox $defaultImage={defaultImage}></UserProfileImgBox> */}
                    </Link>
                ) : (
                    <LoginLink to="log_in">로그인</LoginLink>
                )}
            </LinkWrapper>
            {/* </MainNav> */}
        </HeaderWrapper>
    );
};

export default Header;

const HeaderWrapper = styled.header`
    background-color: var(--mainColor);
    display: flex;
    /* justify-content: space-around; */
    align-items: center;
    /* width: 1650px; */
    width: 100%;
    height: 100px;
    margin: 10px auto 10px auto;
    /* border-radius: 20px; */
`;

const LogoImgBox = styled.div`
    /* background-color: var(--subColor2); */
    margin-left: 40px;
    margin-right: 160px;
    margin-top: 10px;
`;

// const MainNav = styled.nav`
/* display: flex; */
// background-color: pink;
/* gap: 50px; */
// `;

const TabsWrapper = styled.ul`
    /* background-color: antiquewhite; */
    display: flex;
    gap: 150px;
    /* justify-content: center; */
    /* margin-left: 0px; */
    margin-right: 260px; // 이렇게 맞추면 화면전체사이즈마다 다르게 나오는 문제점
`;

const Tab = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    /* border: 1px solid var(--subColor1); */
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
    /* border: 1px solid var(--subColor1); */
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
    /* border: 1px solid var(--subColor2); */
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
`;

const UserImg = styled.img.attrs({
    alt: "userImg",
    // 유저 이미지 가져오기 or 기본이미지
    // src: `${defaultUserImg} `, // 잘 뜸
    // 실패 ${ userSetImg? `userSetImg` : `defaultUserImg`},
    // 실패 ${userSetImg? "none": `{defaultUserImg}`
    // 밸류?에 ""감싸야. 근데 안에 js문법이니 백틱 ``
    //`{userSetImg}`
    // 프로필등록된이미지 있으면 (true) 등록된 이미지 가져오기
    // 아래 ${} 안에서 안뜸}  :뒤부분 `{defaultUserImg}`,혹은 ``만, 혹은 `${}`,  {} 했지만 다 안뜸
    // src: `${(props) => props.$defaultImage}`,
    // src: `{defaultImage}`, 이렇게 하면 에러없이뜨긴하는데 이미지는 안뜸
    // src: `${defaultImage}`,
})`
    width: 50px;
    height: 50px;
`;

const UserProfileImgBox = styled.div`
    width: 50px;
    height: 50px;
    background-image: ${(props) => props.$defaultImage}; // 안뜸.  url() 넣고 해도 안뜸
`;
