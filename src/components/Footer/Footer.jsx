import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <FooterWrapper>@ developed by N을 품은 S, 멤버 : 보라돌이, 뚜비, 나나, 뽀</FooterWrapper>
    );
};

export default Footer;

export const FooterWrapper = styled.div`
    width: 100%;
    height: 100px;
    background-color: var(--mainColor);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
