import styled from "styled-components";

export const ProfileContentsSection = styled.section`
    min-width: 400px;
    max-width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: var(--mainColor);

    gap: 10px;
`;
export const ImageNdInfo = styled.article`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

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

    padding: 48px 154px;
    gap: 30px;
`;

export const ProfileInfoarticle = styled.article`
    background-color: #333;
    height: 296px;
`;

export const ProfileContentsDiv = styled.div``;
