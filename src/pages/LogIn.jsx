import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "database/firebase";
import { getUserInfo, googleLogIn } from "../database/FirebaseAPI";
import { useDispatch, useSelector } from "react-redux";

const LogIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const reduxUser = useSelector((state) => state.userAccount);
    const dispatch = useDispatch();

    const onLogIn = async (event) => {
        event.preventDefault();
        if (email === "") {
            alert("이메일을 입력해주세요.");
            return;
        } else if (pw === "") {
            alert("비밀번호를 입력해주세요.");
            return;
        }
        try {
            await signInWithEmailAndPassword(auth, email, pw);
        } catch (error) {
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
                default:
                    alert("로그인에 실패했습니다.");
                    return;
            }
        }
        getUserInfo(email, dispatch);
        alert("로그인이 되었습니다.");
    };

    const onGoogleLogIn = async (event) => {
        event.preventDefault();
        const provider = new GoogleAuthProvider();
        let user;

        provider.addScope("https://www.googleapis.com/auth/userinfo.email");
        try {
            const result = await signInWithPopup(auth, provider);
            user = result.user;
        } catch (error) {
            alert(error.code + " : " + error.message);
            return;
        }

        googleLogIn({ email: user.email, nickname: user.displayName }, dispatch);
    };

    return (
        <>
            <LogInForm onSubmit={(event) => onLogIn(event)}>
                <button onClick={() => navigate("/")}>home</button>
                <p>WHAT'S YOUR MUSIC?</p>
                <p>LOGIN</p>
                <input
                    type="email"
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                    placeholder="이메일을 적어주세요."
                ></input>
                <input
                    type="password"
                    value={pw}
                    onChange={(event) => {
                        setPw(event.target.value);
                    }}
                    placeholder="비밀번호를 적어주세요."
                ></input>
                <button type="submit">로그인</button>
                <button type="submit" onClick={onGoogleLogIn}>
                    google 로그인
                </button>
                <p>
                    회원이 아니신가요?<span onClick={() => navigate("/register")}>회원가입</span>
                </p>
            </LogInForm>
        </>
    );
};

export default LogIn;

const LogInForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
