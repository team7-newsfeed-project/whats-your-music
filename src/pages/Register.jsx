import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "database/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { register } from "../database/FirebaseAPI";
import Button from "components/common/Button";

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
        } else if (pw === "") {
            alert("비밀번호를 입력하십시오.");
            return;
        } else if (checkPw === "") {
            alert("비밀번호 확인을 입력하십시오.");
            return;
        } else if (checkPw !== pw) {
            alert("비밀번호 확인이 비밀번호와 다릅니다.");
            return;
        } else if (nickname === "") {
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

        register({ email, nickname });
        alert("회원가입이 완료되었습니다.");

        navigate("/");
    };

    return (
        <>
            <HomeBtn onClick={() => navigate("/")}>&larr;home</HomeBtn>
            <RegisterForm onSubmit={onRegister}>
                <Title>회원가입</Title>
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
                <InputFiled
                    type="password"
                    value={checkPw}
                    onChange={(event) => {
                        setCheckPw(event.target.value);
                    }}
                    placeholder="비밀번호를 다시 한 번 적어주세요."
                />
                <InputFiled
                    type="text"
                    value={nickname}
                    onChange={(event) => {
                        setNickname(event.target.value);
                    }}
                    placeholder="닉네임을 적어주세요."
                />
                <Button
                    name="회원가입"
                    type="submit"
                    bgc="var(--subColor1)"
                    color="black"
                    bdc="--subColor1"
                />
            </RegisterForm>
        </>
    );
};

export default Register;

const RegisterForm = styled.form`
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
