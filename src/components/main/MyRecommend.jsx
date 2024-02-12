import React from "react";
import { useSelector } from "react-redux";
import RecommendPostVideoSection from "./RecommendPostVideoSection";
import { Link } from "react-router-dom";

const MyRecommend = () => {
    const myRecommends = useSelector((store) => store.userRecommend);
    const userEmail = useSelector((store) => store.userAccount.email);
    const filterMyRecommends = myRecommends.filter((boardItem) => boardItem.email === userEmail);

    return (
        <article>
            <div>
                <p>내가 추천한 음악들</p>
            </div>
            <section>
                {filterMyRecommends.map((recommends) => {
                    const { id, title, date, content, videoSrc, nickname } = recommends;
                    return (
                        <Link to={`/detail/${id}`} key={id}>
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
                        </Link>
                    );
                })}
            </section>
            <section>{filterMyRecommends.length === 0 ? <div></div> : null}</section>
        </article>
    );
};

export default MyRecommend;
