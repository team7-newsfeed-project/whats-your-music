import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    GithubAuthProvider,
} from "firebase/auth";
import { auth } from "database/firebase";
import { getUserInfo, do3rdPartyLogIn, setUserInfo } from "database/FirebaseAPI";
import { useDispatch, useSelector } from "react-redux";
import Button from "components/common/Button";
import { setAccount } from "store/modules/userAccount";

const LogIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    let reduxUser = useSelector((state) => state.userAccount);
    const dispatch = useDispatch();

    const onLogIn = async (event) => {
        event.preventDefault();
        if (email === "") {
            alert("이메일을 입력해주세요.");
            return;
        } else if (pw === "") {
            alert("비밀번호를 입력해주세요.");
            return;
        } else if (reduxUser.isLoggedIn === true) {
            alert("이미 로그인되어 있습니다.");
            return;
        }
        try {
            await signInWithEmailAndPassword(auth, email, pw);
        } catch (error) {
            console.log(error);
            switch (error.code) {
                case "auth/user-not-found":
                    alert("입력하신 이메일로 가입하신 계정이 존재하지 않습니다.");
                    return;
                case "auth/invalid-email":
                    alert("올바르지 않은 이메일 형식입니다.");
                    return;
                case "auth/wrong-password":
                    alert("비밀번호가 올바르지 않습니다.");
                    return;
                case "auth/too-many-requests":
                    alert("로그인 시도를 많이 하셔서 차단되었습니다. 관리자에게 문의해주세요.");
                    return;
                case "auth/user-disabled":
                    alert("해당 계정이 비활성화 되었습니다. 관리자에게 문의해주세요.");
                    return;
                case "auth/operation-not-allowed":
                    alert("현재 로그인이 허가되지 않습니다. 관리자에게 문의해주세요.");
                    return;
                case "auth/invalid-credential":
                    alert("올바른 이메일과 비밀번호를 입력해주세요.");
                    return;
                default:
                    alert(`${error.code}`);
                    return;
            }
        }
        reduxUser = await getUserInfo(email);
        reduxUser = await setUserInfo(reduxUser, { isLoggedIn: true });
        dispatch(setAccount(reduxUser));
        alert("로그인이 되었습니다.");
        navigate("/");
    };

    const onGoogleLogIn = async (event) => {
        event.preventDefault();
        let provider = new GoogleAuthProvider();
        let user;

        provider.addScope("https://www.googleapis.com/auth/userinfo.email");

        try {
            const result = await signInWithPopup(auth, provider);
            user = result.user;
        } catch (error) {
            alert(`로그인을 실패했습니다.${error.code}`);
            return;
        }

        await do3rdPartyLogIn({ email: user.email, nickname: user.displayName });
        reduxUser = await getUserInfo(user.email);
        await setUserInfo(reduxUser, { isLoggedIn: true });
        dispatch(setAccount(reduxUser));
        alert("로그인이 되었습니다.");
        navigate("/");
    };
    const onGitHubLogIn = async (event) => {
        event.preventDefault();
        let provider = new GithubAuthProvider();
        let user;
        let email;
        let nickname;

        provider.addScope("read:user");

        try {
            const result = await signInWithPopup(auth, provider);
            user = result.user;
        } catch (error) {
            alert(`로그인을 실패했습니다.${error.code}`);
            return;
        }

        email = user.reloadUserInfo.providerUserInfo[0].email;
        nickname = user.reloadUserInfo.providerUserInfo[0].screenName;
        await do3rdPartyLogIn({ email, nickname });
        reduxUser = await getUserInfo(email);
        reduxUser = await setUserInfo(reduxUser, { isLoggedIn: true });
        dispatch(setAccount(reduxUser));
        alert("로그인이 되었습니다.");
        navigate("/");
    };

    return (
        <>
            <HomeBtn onClick={() => navigate("/")}>&larr;home</HomeBtn>
            <LogInForm onSubmit={(event) => onLogIn(event)}>
                <Logo>WHAT'S YOUR MUSIC?</Logo>
                <Title>LOGIN</Title>
                <InputFiled
                    type="email"
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                    placeholder="이메일을 적어주세요."
                />
                <InputFiled
                    type="password"
                    value={pw}
                    onChange={(event) => {
                        setPw(event.target.value);
                    }}
                    placeholder="비밀번호를 적어주세요."
                />
                <Button
                    type="submit"
                    name="로그인"
                    bgc="var(--subColor1)"
                    color="black"
                    bdc="--subColor1"
                />
                <Button
                    name="Google 로그인"
                    bgc="var(--subColor1)"
                    color="black"
                    bdc="--subColor1"
                    onClick={(event) => onGoogleLogIn(event)}
                />
                <Button
                    name="GitHub 로그인"
                    bgc="var(--subColor1)"
                    color="black"
                    bdc="--subColor1"
                    onClick={(event) => onGitHubLogIn(event)}
                />
                <LogInInfo>
                    회원이 아니신가요?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <RegisterText onClick={() => navigate("/register")}>회원가입</RegisterText>
                </LogInInfo>
            </LogInForm>
        </>
    );
};

export default LogIn;

const LogInForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: auto;
    gap: 20px;
    width: 500px;
`;

const HomeBtn = styled.button`
    font-size: 20px;
    border: 1px solid var(--subColor2);
    background-color: var(--subColor3);
    color: var(--subColor2);
    border-radius: 15px;
    width: 90px;
    padding: 5px;
    margin-top: 10px;
    margin-left: 10px;
    cursor: pointer;
`;

const Logo = styled.p`
    text-align: center;
    font-size: 20px;
    border: 1px solid var(--subColor1);
    color: var(--subColor1);
    height: 100%;
    line-height: 100px;
    border-radius: 10px;
    vertical-align: middle;
`;

const Title = styled.p`
    font-size: 20px;
    color: var(--subColor1);
    width: 200px;
    margin: 0 auto;
    text-align: center;
`;

const InputFiled = styled.input`
    text-align: center;
    border-radius: 10px;
    height: 50px;
`;

const LogInInfo = styled.p`
    text-align: center;
`;

const RegisterText = styled.span`
    color: var(--subColor1);
    & {
        cursor: pointer;
    }
`;
