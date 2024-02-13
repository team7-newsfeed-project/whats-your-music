import { Link } from "react-router-dom";
import styled from "styled-components";

export const MyPageSection = styled.section`
    background-color: var(--subColor3);
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    gap: 10px;
`;

export const MyPageheadDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MyPageheadWrapDiv = styled.div`
    background-color: var(--mainColor);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    min-width: 320px;
    width: 100%;

    height: 100px;
`;

export const HomeLink = styled(Link)`
    width: 140px;
    height: 56px;
    text-align: center;
    background-color: var(--mainColor);
    padding: 1rem 1.1rem;

    /* border: var(--subColor2); */
    border-radius: 0.8rem;
    color: white;
    font-size: 1.4rem;
    box-shadow: 0rem 0rem 0.3rem 0rem var(--subColor2);
    transition: all 0.3s;

    color: var(--subColor2);
    text-align: center;
    cursor: pointer;

    &:hover {
        background-color: var(--subColor2);
        color: var(--mainColor);
    }
`;

export const HomeBtnP = styled.p`
    width: 100px;
    height: 1rem;
`;

export const ProfileInfoDiv = styled.div``;

export const LogOutLink = styled(Link)`
    width: 123px;
    height: 56px;

    padding: 20px;

    text-decoration: none;
    border: 1px solid var(--subColor2);
    border-radius: 20px;

    color: var(--subColor2);
`;

export const HeaderLogo = styled.img`
    width: 253px;
    height: 56px;
`;

export const MyPageText = styled.p`
    font-size: 1.2rem;
`;
