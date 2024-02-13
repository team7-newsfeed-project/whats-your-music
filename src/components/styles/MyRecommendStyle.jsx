import styled from "styled-components";

export const RecommendSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const MyRecommentMusicDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const RecommendContentsWrap = styled.article`
    display: grid;
    grid-template-columns: repeat(2, minmax(500px, 1fr));
    grid-auto-rows: auto;

    gap: 40px;
`;

export const CardsWrap = styled.div``;
