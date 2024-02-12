import { Link } from "react-router-dom";
import styled from "styled-components";

export const MyPageSection = styled.section`
    min-width: 400px;
    /* width: 1060px; */
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
    background-color: ${(style) => style.bgc || "var(--mainColor)"};
    padding: ${(style) =>
        style.pd
            ? style.pd
                  .split(", ")
                  .map((value) => `${value}rem`)
                  .join(" ")
            : "0.4rem 1rem"};

    margin: ${(style) =>
        style.mg
            ? style.mg
                  .split(", ")
                  .map((value) => `${value}rem`)
                  .join(" ")
            : "0rem 0rem"};
    margin-top: ${(style) => (style.mt ? `${style.mt}rem`.join(" ") : "0rem")};
    margin-left: ${(style) => (style.ml ? `${style.ml}rem`.join(" ") : "0rem")};
    margin-right: ${(style) => (style.mr ? `${style.mr}rem`.join(" ") : "0rem")};
    margin-bottom: ${(style) => (style.mb ? `${style.mb}rem`.join(" ") : "0rem")};

    border: 1px solid ${(style) => style.bdc || "var(--subColor2)"};
    border-radius: ${(style) =>
        style.radius || (style.bradius && style.$bradius.includes("rem"))
            ? style.radius
            : style.radius
            ? style.radius + "rem"
            : "0.8rem"};
    color: ${(style) => style.color || "white"};
    font-size: ${(style) => style.fsize || "1.2rem"};

    cursor: pointer;
    &:hover {
        background-color: ${(style) => style.hoverbgc || "var(--subColor2)"};
        color: ${(style) => style.hovercolor || "var(--mainColor)"};
    }
`;

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

export const ImageNdInfo = styled.article`
    background-color: var(--mainColor);

    padding: 44px;

    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 30px;
`;
export const ProfileThumbnailImg = styled.img`
    width: 230px;
    height: 230px;
    min-width: 130px;
    min-height: 130px;

    object-fit: cover;
`;
export const ProfileUpLoadBtnLabel = styled.label``;
export const ProfileUpLoad = styled.input`
    display: none;
    background-color: red;
`;

export const UserImage = styled.div``;
