import styled from "styled-components";

export const UserImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

export const ProfileThumbnailImg = styled.img`
    width: 230px;
    height: 230px;
    min-width: 130px;
    min-height: 130px;

    box-shadow: 0rem 0rem 0.4rem 0rem var(--subColor2);

    border-radius: 1.8rem;
    object-fit: cover;
`;

export const ProfileBtnWrapDiv = styled.div``;

export const ProfileImageBtnsDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`;

export const ProfileImageEditDiv = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: space-between;
`;

export const ProfileUpLoad = styled.input`
    display: none;
    background-color: red;
`;

export const ProfileUpLoadBtnLabel = styled.label`
    background-color: var(--mainColor);
    width: 100%;

    margin: 0rem 0rem;
    padding: 0.7rem 5.7rem;

    border: 1px solid var(--subColor2);
    border-radius: 0.8rem;

    text-align: center;
    color: white;
    font-size: 1.4rem;

    cursor: pointer;
    &:hover {
        background-color: var(--subColor2);
        color: var(--mainColor);
    }
`;

export const DangerButton = styled.button`
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

    color: ${(style) => style.color || "white"};
    border: 1px solid ${(style) => style.bdc || "var(--subColor1)"};
    border-radius: ${(style) =>
        style.radius || (style.bradius && style.bradius.includes("rem"))
            ? style.radius
            : style.radius
            ? style.radius + "rem"
            : "0.8rem"};

    font-size: ${(style) => style.fsize || "1.2rem"};
    cursor: pointer;
    &:hover {
        background-color: ${(style) => style.hoverbgc || "var(--subColor1)"};
        color: ${(style) => style.hovercolor || "var(--mainColor)"};
    }
`;
