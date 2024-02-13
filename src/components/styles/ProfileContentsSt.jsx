import styled from "styled-components";

export const ProfileContentsSection = styled.section`
    min-width: 400px;
    max-width: 1020px;

    display: flex;
    flex-direction: row;
    background-color: #8ac78a;

    gap: 10px;
`;

export const ProfileThumbnailImg = styled.img`
    width: 230px;
    height: 230px;
    min-width: 130px;
    min-height: 130px;

    object-fit: cover;
`;

export const UserImage = styled.div``;

export const ProfileUpLoad = styled.input`
    display: none;
    background-color: red;
`;

export const ProfileUpLoadBtnLabel = styled.label``;
