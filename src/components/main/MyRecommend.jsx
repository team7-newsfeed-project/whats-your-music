import React from "react";
import { useSelector } from "react-redux";
import RecommendPostVideoSection from "./RecommendPostVideoSection";

const MyRecommend = ({ userUid }) => {
    const myRecommends = useSelector((store) => store.userRecommend);
    const filterMyRecommends = myRecommends.filter((boardItem) => console.log(boardItem));

    return (
        <article>
            <div>
                <p>내가 추천한 음악들</p>
            </div>
            <section>
                {filterMyRecommends.map((recommends) => {
                    const { id, title, date, content, videoSrc, nickname } = recommends;
                    return (
                        <article key={id}>
                            <RecommendPostVideoSection />
                            <section>
                                <iframe
                                    src={videoSrc}
                                    title="youtube-video-player"
                                    frameborder="0"
                                    allowFullScreen
                                ></iframe>
                            </section>
                            <div>
                                <div>
                                    {date.toLocaleString("ko-KR", {
                                        year: "2-digit", // 혹은 numeric
                                        month: "numeric",
                                        day: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </div>
                                <div></div>
                            </div>
                        </article>
                    );
                })}
            </section>
        </article>
    );
};

export default MyRecommend;
