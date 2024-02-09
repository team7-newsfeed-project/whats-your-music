import React from "react";
import * as S from "./StyledButton";

const Button = ({ onClick, name, ...style }) => {
    return (
        <S.NormalButton onClick={onClick} {...style}>
            {name}
        </S.NormalButton>
    );
};

export default Button;
