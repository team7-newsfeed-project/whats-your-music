import styled, { css } from "styled-components";

export const RecommendSection = styled.section`
    background-color: var(--mainColor);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 1rem;

    gap: 40px;
`;

export const MyRecommentMusicDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    padding: 20px 0px;

    font-size: 1.4rem;
    gap: 20px;
`;

export const RecommendContentsWrap = styled.article`
    display: grid;
    grid-template-columns: repeat(2, minmax(500px, 2fr));
    grid-auto-rows: auto;
    flex-direction: row;

    gap: 40px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(300px, 2fr)); /* 화면이 작을 때 1줄로 변경 */
    }
`;

export const ListText = styled.p`
    color: gray;
    font-size: 1.2rem;
    height: 20px;
`;

export const RecoommendVideoWrap = styled.div`
    height: auto;
    border-radius: 20px;
`;

export const CardsWrap = styled.div`
    background-color: var(--subColor3);
    grid-row: span min-content;
    display: flex;

    padding: 1rem;

    border-radius: 1.2rem;
    &:hover {
        box-shadow: 0px 0px 3px 0.3px var(--subColor1);
        transform: scale(1.03, 1.03);
        transition-duration: 0.2s;
    }
`;

export const RecommendContentsDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.4rem 1rem;
    border-radius: 1.2rem;
    width: 100%;
    gap: 10px;
`;

export const RecommendTitleP = styled.p`
    width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @media (max-width: 768px) {
        width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

export const RecommendTitle = styled.span`
    color: var(--subColor2);
    font-size: 1.4rem;
`;

export const RecommendTitleNdContentDiv = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 18px;

    gap: 12px;
`;

export const RecommendContentP = styled.p`
    width: 300px;

    > span {
        height: 36px;
        display: -webkit-box;
        -webkit-line-clamp: 3; /* 원하는 행 수 */
        -webkit-box-orient: vertical;
        overflow: hidden;
        line-height: 1.2rem;

        font-size: 1.2rem;
        @media (max-width: 768px) {
            width: 220px;
            height: 36px;
            display: -webkit-box;
            -webkit-line-clamp: 3; /* 원하는 행 수 */
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
    }
`;

export const DateNdNicknameUl = styled.ul`
    display: flex;
    margin-top: 6px;
`;

export const RecommendDateColorLi = styled.li`
    color: grey;
    @media (max-width: 768px) {
        width: 110px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

export const NicknameIncludesSpanP = styled.p`
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @media (max-width: 768px) {
        width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

export const DateNdNicknameSpan = styled.span`
    color: var(--subColor1);

    font-size: 1.1rem;
    text-align: center;
`;
