import styled from "styled-components";

export const RecommendSection = styled.section`
    background-color: var(--mainColor);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 40px;
`;

export const MyRecommentMusicDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    padding: 30px 0px;

    font-size: 1.4rem;
    gap: 20px;
`;

export const RecommendContentsWrap = styled.article`
    display: grid;
    grid-template-columns: repeat(2, minmax(400px, 2fr));
    grid-auto-rows: auto;

    gap: 40px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(500px, 1fr)); /* 화면이 작을 때 1줄로 변경 */
    }
`;

export const ListText = styled.p`
    color: gray;
    font-size: 1.2rem;
    height: 20px;
`;

export const RecoommendVideoWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 302px;
`;

export const CardsWrap = styled.div`
    background-color: var(--subColor3);
    grid-row: span min-content;
    padding: 1rem;

    border-radius: 1.2rem;
`;
