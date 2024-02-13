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

    width: 100%;

    padding: 48px 0px;
    gap: 30px;
`;

export const ProfileInfoarticle = styled.section`
    display: flex;
    flex-direction: column;

    min-width: 708px;
    max-width: 100%;
    height: 296px;

    gap: 20px;
`;

export const ProfileContentsDiv = styled.div`
    display: flex;
    flex-direction: column;
    /* height: 100%; */

    gap: 20px;
`;

export const ProfileNicknameDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > div {
        background-color: var(--subColor3);
        display: flex;
        align-items: center;

        min-width: 110px;
        width: 350px;
        height: 56px;

        border-radius: 1rem;

        padding: 5px 10px;

        text-align: center;
        font-size: 1.2rem;
    }
`;

export const ProfileCommentDiv = styled.div`
    background-color: var(--subColor3);
    height: 150px;
    padding: 10px;
    border-radius: 1rem;
`;

export const ProfileEditor = styled.div`
    display: flex;
    justify-content: right;
`;
