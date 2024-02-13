import styled from "styled-components";

export const ProfileContentsSection = styled.section`
    min-width: 330px;
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
    display: flex;
    flex-direction: column;

    min-width: 300px;
    max-width: 100%;
    width: 708px;
    height: 296px;

    gap: 10px;
`;

export const ProfileContentsDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #a07979;

    gap: 20px;
`;

export const ProfileNicknameDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > div {
        background-color: black;
        display: flex;
        align-items: center;

        min-width: 50px;
        width: 300px;
        height: 56px;

        padding: 5px 10px;

        text-align: center;
        font-size: 1.2rem;
    }
`;

export const ProfileEditor = styled.div`
    background-color: #fff;
`;
