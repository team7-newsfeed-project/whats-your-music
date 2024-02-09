import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "database/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// 아이디는 이메일로 대체, displayname이 닉네임을 참조, updateprofile catch문 수정 필요, 안내무구 친절하게 요자 쓰기

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [checkPw, setCheckPw] = useState("");
    const [nickname, setNickname] = useState("");

    const onRegister = async (event) => {
        event.preventDefault();

        if (email === "") {
            alert("이메일을 입력하십시오.");
            return;
        }

        if (pw === "") {
            alert("비밀번호를 입력하십시오.");
            return;
        }

        if (checkPw === "") {
            alert("비밀번호 확인이 비밀번호와 다릅니다.");
            return;
        }

        if (nickname === "") {
            alert("닉네임을 입력하십시오.");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, pw);
        } catch (error) {
            switch (error.code) {
                case "auth/email-already-in-use":
                    alert("입력하신 이메일로 가입하신 계정이 이미 존재합니다.");
                    return;
                case "auth/invalid-email":
                    alert("입력하신 이메일은 유효하지 않은 이메일입니다.");
                    return;
                case "auth/operation-not-allowed":
                    alert("회원가입 시스템이 닫혔습니다. 관리자에게 문의하십시오.");
                    return;
                case "auth/weak-password":
                    alert("비밀번호를 6자리 이상으로 입력하십시오.");
                    return;
                default:
                    alert("회원가입에 실패했습니다.");
                    return;
            }
        }

        try {
            updateProfile(auth.currentUser, {
                displayName: nickname, // displayName을 닉네임으로 설정
            });
        } catch (error) {
            //alert(error.code + " : " + error.message);
            alert("닉네임 설정에 실패했습니다.");
            return;
        }
        //console.log(auth.currentUser);
        alert("회원가입이 완료되었습니다.");

        navigate("/");
    };

    return (
        <>
            <RegisterForm onSubmit={onRegister}>
                <button onClick={() => navigate("/")}>home</button>
                <p>회원가입</p>
                <div>
                    <label>이메일</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        placeholder="이메일을 적어주세요."
                    ></input>
                </div>
                <div>
                    <label>비밀번호</label>
                    <input
                        type="password"
                        value={pw}
                        onChange={(event) => {
                            setPw(event.target.value);
                        }}
                        placeholder="비밀번호를 적어주세요."
                    ></input>
                </div>
                <div>
                    <label>비밀번호 확인</label>
                    <input
                        type="password"
                        value={checkPw}
                        onChange={(event) => {
                            setCheckPw(event.target.value);
                        }}
                        placeholder="비밀번호를 다시 한 번 적어주세요."
                    ></input>
                </div>
                <div>
                    <label>닉네임</label>
                    <input
                        type="text"
                        value={nickname}
                        onChange={(event) => {
                            setNickname(event.target.value);
                        }}
                        placeholder="닉네임을 적어주세요."
                    ></input>
                </div>
                <button type="submit">회원가입</button>
            </RegisterForm>
        </>
    );
};

export default Register;

const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
