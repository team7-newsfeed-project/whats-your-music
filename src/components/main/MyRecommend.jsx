import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RecommendPostVideoSection from "./RecommendPostVideoSection";
import * as MR from "components/styles/MyRecommendStyle";

const MyRecommend = () => {
    const myRecommends = useSelector((store) => store.userRecommend);
    const { email } = useSelector((store) => store.userAccount);
    const filterMyRecommends = myRecommends.filter((boardItem) => boardItem.email === email);

    return (
        <MR.RecommendSection>
            <MR.MyRecommentMusicDiv>
                <p>내가 추천한 음악들</p>
                <div></div>
            </MR.MyRecommentMusicDiv>
            <MR.RecommendContentsWrap>
                {filterMyRecommends.map((recommends) => {
                    const { id, title, date, content, videoSrc, nickname } = recommends;
                    return (
                        <Link to={`/detail/${id}`} key={id}>
                            <MR.CardsWrap>
                                <RecommendPostVideoSection videoSrc={videoSrc} />

                                <div>
                                    <div>
                                        <p>{title}</p>
                                        <p>{content}</p>
                                    </div>
                                    <ul>
                                        <li>
                                            {date.toLocaleString("ko-KR", {
                                                year: "2-digit", // 혹은 numeric
                                                month: "numeric",
                                                day: "numeric",
                                            })}
                                        </li>

                                        <li>
                                            <p>
                                                <span>{nickname}</span>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </MR.CardsWrap>
                        </Link>
                    );
                })}
            </MR.RecommendContentsWrap>
            <article>
                {filterMyRecommends.length === 0 ? <div> 오늘의 음악을 추천해 보세요!</div> : null}
            </article>
        </MR.RecommendSection>
    );
};

export default MyRecommend;
