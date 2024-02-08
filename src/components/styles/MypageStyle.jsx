import { Link } from "react-router-dom";
import styled from "styled-components";

export const MyPageSection = styled.section`
    min-width: 320px;
    max-width: 1060px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const MyPageheadDiv = styled.div`
    background-color: var(--mainColor);
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
`;

export const HomeLink = styled(Link)`
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
