import styled from "styled-components";

/* 쓸 수 있는 props : bgc, pd, mg, ml, mr, mb bRadius, color, fSize */
export const NormalButton = styled.button`
    background-color: ${(style) => style.bgc || "#333"};
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
            : "0.4rem 1rem"};
    /* 기본 
  1rem = 16px,2rem = 32px, 0.8rem = 16px 미만의 px등등 
  padding: 0.4rem 1rem; 
   props 넘겨주는 입력 형식 : pd={0.4, 1}*/

    margin-top: ${(style) =>
        style.mt ? style.mt.map((value) => `${value}rem`).join(" ") : "0rem"};
    margin-left: ${(style) =>
        style.ml ? style.ml.map((value) => `${value}rem`).join(" ") : "0rem"};
    margin-right: ${(style) =>
        style.mr ? style.mr.map((value) => `${value}rem`).join(" ") : "0rem"};
    margin-bottom: ${(style) =>
        style.mb ? style.mb.map((value) => `${value}rem`).join(" ") : "0rem"};

    border: ${(style) => style.bd || "none"};
    border-radius: ${(style) =>
        style.bRadius && style.bRadius.includes("rem")
            ? style.radius
            : style.radius
            ? style.radius + "rem"
            : "0.8rem"};

    /* 20rem, 10rem, 3rem, 0.4rem 등등 */

    color: ${(style) => style.color || "white"};
    font-size: ${(style) => style.fSize || "1.2rem"};

    cursor: pointer;
`;
