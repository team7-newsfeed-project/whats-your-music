import React from "react";
import * as S from "components/styles/ButtonStyled";

const DangerButton = ({ onClick, name, ...style }) => {
    return (
        <S.DangerButton onClick={onClick} {...style}>
            {name}
        </S.DangerButton>
    );
};

export default DangerButton;
