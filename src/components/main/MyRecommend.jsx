import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as MR from "components/styles/MyRecommendStyle";

const MyRecommend = () => {
    const myRecommends = useSelector((store) => store.userRecommend);
    const { email } = useSelector((store) => store.userAccount);
    const filterMyRecommends = myRecommends.filter((boardItem) => boardItem.email === email);
    const youtubeIdRef = useRef("");
    const setPosts = useSelector((state) => state.posts);
    const activeCategory = useSelector((state) => state.category);
    const filteredPosts = setPosts.filter((post) => post.category === activeCategory);
    const { videoSrc } = filteredPosts.map((post) => post);
    if (videoSrc) {
        if (videoSrc.includes("youtube.com/live")) {
            // 유튭 라이브영상 (공유)주소의 경우
            const youtubeId = videoSrc.substring(29, 40);
            // console.log("라이브영상 (공유)주소:", youtubeId);
            youtubeIdRef.current = youtubeId;
        } else if (videoSrc.includes("youtube.com/watch")) {
            // 일반 유튭주소의 경우 (공유주소아닌)
            const youtubeId = videoSrc.substring(32, 43);
            // console.log("일반유튭주소:", youtubeId);
            youtubeIdRef.current = youtubeId;
        } else {
            // 일반 공유 주소 : ..youtu.be/..
            const youtubeId = videoSrc.substring(17, 28);
            youtubeIdRef.current = youtubeId;
        }
    }

    return (
        <>
            {filterMyRecommends.length === 0 ? (
                <MR.MyRecommentMusicDiv> 오늘의 음악을 추천해 보세요!</MR.MyRecommentMusicDiv>
            ) : (
                <MR.RecommendSection>
                    <MR.MyRecommentMusicDiv>
                        <p>내가 추천한 음악들</p>
                        <MR.ListText>
                            '동영상을 재생할 수 없음'이라고 뜨는 경우, &nbsp;
                            <span
                                style={{
                                    textDecorationLine: "underline",
                                    textDecorationColor: "gray",
                                }}
                            >
                                YouTube에서 보기
                            </span>
                            &nbsp;를 눌러주세요 :)
                        </MR.ListText>
                    </MR.MyRecommentMusicDiv>
                    <MR.RecommendContentsWrap>
                        {filterMyRecommends.map((recommends) => {
                            const { id, title, date, content, videoSrc, nickname } = recommends;
                            return (
                                <Link to={`/detail/${id}`} key={id}>
                                    <MR.CardsWrap>
                                        <MR.RecoommendVideoWrap>
                                            <MR.VideoSection>
                                                <MR.Iframe
                                                    src={`https://www.youtube.com/embed/${youtubeIdRef.current}?autoplay=0&mute=0;&loop=1`}
                                                    title="youtube-video-player"
                                                    frameBorder="0"
                                                    allowFullScreen
                                                    // $type={type}
                                                ></MR.Iframe>
                                            </MR.VideoSection>
                                        </MR.RecoommendVideoWrap>

                                        <MR.RecommendContentsDiv>
                                            <MR.RecommendTitleNdContentDiv>
                                                <MR.RecommendTitleP>
                                                    <MR.RecommendTitle>{title}</MR.RecommendTitle>
                                                </MR.RecommendTitleP>
                                                <MR.RecommendContent>
                                                    <span>{content}</span>
                                                </MR.RecommendContent>
                                            </MR.RecommendTitleNdContentDiv>
                                            <MR.DateNdNicknameUl>
                                                <MR.RecommendDateColorLi>
                                                    {new Date(date).toLocaleString("ko-KR", {
                                                        year: "numeric",
                                                        month: "numeric",
                                                        day: "numeric",
                                                        hour: "numeric",
                                                        minute: "numeric",
                                                    })}
                                                    &emsp;│
                                                </MR.RecommendDateColorLi>

                                                <li>
                                                    <MR.NicknameIncludesSpanP>
                                                        <MR.DateNdNicknameSpan>
                                                            &emsp;{nickname}
                                                        </MR.DateNdNicknameSpan>
                                                    </MR.NicknameIncludesSpanP>
                                                </li>
                                            </MR.DateNdNicknameUl>
                                        </MR.RecommendContentsDiv>
                                    </MR.CardsWrap>
                                </Link>
                            );
                        })}
                    </MR.RecommendContentsWrap>
                </MR.RecommendSection>
            )}
        </>
    );
};

export default MyRecommend;
