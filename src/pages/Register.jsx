import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Register = () => {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [checkPw, setCheckPw] = useState("");
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");

    const onRegister = (event) => {
        event.preventDefault();

        const isPassed = true; //유효성 검사, db 확인

        // db에 입력

        navigate("/");
    };

    return (
        <>
            <RegisterForm onSubmit={onRegister}>
                <button onClick={() => navigate("/")}>home</button>
                <p>회원가입</p>
                <div>
                    <label>아이디</label>
                    <input
                        type="text"
                        value={id}
                        onChange={(event) => {
                            setId(event.target.value);
                        }}
                        placeholder="아이디를 적어주세요."
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
