import styled from "styled-components";

export const NormalButton = styled.button`
    background-color: ${(style) => style.bgc || "#333"};
    padding: ${(style) =>
        style.pd
            ? style.pd
                  .split(", ")
                  .map((value) => `${value}rem`)
                  .join(" ")
            : "0.4rem 1rem"};
    /* padding: 0.4rem 1rem; */

    border: none;
    border-radius: ${(style) =>
        style.radius && style.radius.includes("rem")
            ? style.radius
            : style.radius
            ? style.radius + "rem"
            : "0.8rem"};

    color: ${(style) => style.color || "white"};

    font-size: ${(style) => style.fontS || "1.2rem"};
    cursor: pointer;
`;
