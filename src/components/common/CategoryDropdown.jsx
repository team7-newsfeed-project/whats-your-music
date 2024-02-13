import React from "react";
import styled from "styled-components";

const CategoryDropdown = ({ onChange }) => {
    return (
        <SelectBox onChange={onChange}>
            <option value="">올리실 곳을 선택해주세요</option>
            <option value="팝">팝</option>
            <option value="클래식및재즈">클래식/재즈</option>
        </SelectBox>
    );
};

export default CategoryDropdown;

const SelectBox = styled.select`
    border: 1px solid var(--subColor1);
    border-radius: 20px;
    padding: 15px;
    margin-right: 30px;
    font-size: 16px;
    color: white;
    background-color: var(--mainColor);
    outline: none;
    appearance: none;
    cursor: pointer;
    box-shadow: 0px 0px 3px 1px var(--subColor1);
    &:hover {
        background-color: var(--subColor1);
        color: var(--mainColor);
        transition: all 0.3s;
    }
`;
