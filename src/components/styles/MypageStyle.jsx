import { Link } from "react-router-dom";
import styled from "styled-components";

export const MyPageSection = styled.section`
    min-width: 400px;
    width: 1060px;
    max-width: 1060px;
    border: 1px solid white;
`;

export const MyPageheadDiv = styled.div`
    background-color: var(--subColor3);
    display: flex;
    flex-direction: column;
    align-items: center;
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

export const ImageNdInfo = styled.article`
    background-color: var(--mainColor);
    width: 1060px;

    padding: 44px;

    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 30px;
`;
export const ProfileThumbnailImg = styled.img`
    max-width: 230px;
    max-height: 230px;

    object-fit: cover;
`;
export const ProfileUpLoadLabel = styled.label`
    max-width: 225px;
    max-height: 58px;

    border: 1px solid var(--subColor2);
`;
export const ProfileUpLoad = styled.input`
    display: none;
    background-color: red;
`;

export const UserImage = styled.div``;
