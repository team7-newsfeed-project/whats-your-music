import styled from "styled-components";

/* 쓸 수 있는 props : bgc, pd, mg, ml, mr, mb, bdc, bradius, color, fsize */
export const NormalButton = styled.button`
    background-color: ${(style) => style.bgc || "var(--mainColor)"};
    padding: ${(style) =>
        style.pd
            ? style.pd
                  .split(", ")
                  .map((value) => `${value}rem`)
                  .join(" ")
            : "0.4rem 1rem"};
    /* 기본 
  1rem = 16px, 0.8rem = 16px 미만의 px등등
  padding: 0.4rem 1rem; 
   props 입력 형식 : pd={0.4, 1}  pd="0.4, 1" pd="2px" mg={2, 1} mg="2" */

    margin: ${(style) =>
        style.mg
            ? style.mg
                  .split(", ")
                  .map((value) => `${value}rem`)
                  .join(" ")
            : "0rem 0rem"};
    /* 기본 
  1rem = 16px,2rem = 32px, 0.8rem = 16px 미만의 px등등 
  padding: 0.4rem 1rem; 
   props 넘겨주는 입력 형식 : pd={0.4, 1}*/
    margin-top: ${(style) => (style.mt ? `${style.mt}rem`.join(" ") : "0rem")};
    margin-left: ${(style) => (style.ml ? `${style.ml}rem`.join(" ") : "0rem")};
    margin-right: ${(style) => (style.mr ? `${style.mr}rem`.join(" ") : "0rem")};
    margin-bottom: ${(style) => (style.mb ? `${style.mb}rem`.join(" ") : "0rem")};

    border: 1px solid ${(style) => style.bdc || "var(--subColor2)"};
    border-radius: ${(style) =>
        style.radius || (style.bradius && style.$bradius.includes("rem"))
            ? style.radius
            : style.radius
            ? style.radius + "rem"
            : "0.8rem"};

    /* 20rem, 10rem, 3rem, 0.4rem 등등 */

    border: 0; // border 안주고 shadow로 경계선구분하는 것으로 추가

    color: ${(style) => style.color || "white"};
    font-size: ${(style) => style.fsize || "1.2rem"};

    box-shadow: 0px 0px 3px 1px var(--subColor2);

    cursor: pointer;
    &:hover {
        background-color: ${(style) => style.hoverbgc || "var(--subColor2)"};
        color: ${(style) => style.hovercolor || "var(--mainColor)"};
        transition: all 0.3s; // 시간차두고 바뀌도록 추가
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

    border: 0; // border 안주고 shadow로 경계선구분하는 것으로 추가

    font-size: ${(style) => style.fsize || "1.2rem"};

    box-shadow: 0px 0px 3px 1px var(--subColor1);

    cursor: pointer;
    &:hover {
        background-color: ${(style) => style.hoverbgc || "var(--subColor1)"};
        color: ${(style) => style.hovercolor || "var(--mainColor)"};
        transition: all 0.3s; // 시간차두고 바뀌도록 추가
    }
`;
