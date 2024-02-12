import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <FooterWrapper>
            @ developed by N을 품은 S, 멤버 │ 김지민ㆍ김명환ㆍ남해리ㆍ서혜련
        </FooterWrapper>
    );
};

export default Footer;

export const FooterWrapper = styled.footer`
    width: 100%;
    height: 100px;
    background-color: var(--mainColor);
    color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
`;
