import { Link } from "react-router-dom";
import styled from "styled-components";

export const MyPageWapper = styled.section`
    min-width: 320px;
    max-width: 1060px;
`;

export const ProfileWrapDiv = styled.div``;

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
