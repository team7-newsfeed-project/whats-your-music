import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setId as setReduxId } from "store/modules/userId";

const LogIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const setUserId = (id) => {
        dispatch(setReduxId(id));
    };
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const onLogIn = (event) => {
        event.preventDefault();
        const isPassed = true; // 로그인 검증 부분, 유효성 검사, DB 필요
        setUserId(id);
        setUserId("test"); // 테스트용 코드, 로그인된 id가 필요하면 여기에 test 대신에 id 넣어서 쓰세요
        navigate("/");
        console.log(id);
    };

    const onGoogleLogIn = () => {
        navigate("/");
    };

    return (
        <>
            <LogInForm onSubmit={(event) => onLogIn(event)}>
                <button onClick={() => navigate("/")}>home</button>
                <p>WHAT'S YOUR MUSIC?</p>
                <p>LOGIN</p>
                <input
                    type="text"
                    value={id}
                    onChange={(event) => {
                        setId(event.target.value);
                    }}
                    placeholder="아이디를 적어주세요."
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
                <button onClick={onGoogleLogIn}>google 로그인</button>
                <span>
                    회원이 아니신가요?<Link to="register">회원가입</Link>
                </span>
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
