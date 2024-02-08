import React from "react";
import styled from "styled-components";

const MainPostItem = () => {
    return (
        <MainArticleWrapper>
            <MainArticle>
                {/* <img src="/" alt="" width="100px"></img> */}
                {/*<img></img>*/}
                <div>
                    <p>title</p>
                    <p>content</p>
                    <p>writer</p>
                </div>
            </MainArticle>
        </MainArticleWrapper>
    );
};

export default MainPostItem;

const MainArticleWrapper = styled.li`
    list-style: none;
`;

const MainArticle = styled.article`
    background-color: var(--subColor3);
    width: 400px;
    height: 150px;
    border-radius: 20px;
`;
