import { Link } from "react-router-dom";
import styled from "styled-components";

export const MyPageSection = styled.section`
    background-color: #444;
    width: 100%;
    display: flex;
    flex-direction: column;

    gap: 20px;
`;

export const MyPageheadDiv = styled.div`
    /* background-color: var(--mainColor); */
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 70px;
`;

export const MyPageheadWrapDiv = styled.div`
    background-color: var(--mainColor);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: 320px;
    width: 100%;

    height: 70px;
    padding: 7px 120px;
    /* gap: 26rem; */
`;

export const HomeLink = styled(Link)`
    width: 140px;
    height: 56px;
    text-align: center;
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

export const HomeBtnP = styled.p`
    width: 100px;
    /* height: 19px; */
    margin: 0 auto;
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

export const MyPageText = styled.p`
    width: 80px;
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
