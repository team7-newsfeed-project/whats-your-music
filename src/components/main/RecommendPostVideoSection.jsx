import React, { useRef } from "react";
import styled from "styled-components";

const RecommendPostVideoSection = ({ videoSrc }) => {
    const youtubeIdRef = useRef("");
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
    // console.log("youtubeIdRef ", youtubeIdRef);
    return (
        <VideoSection>
            <Iframe
                // src 유저가 넣으면 토대로 iframe태그로 (메인홈페이지에서) 영상뜨게하기
                // 유튜브 공유 링크주소든, 일반 링크주소든 상관 X
                src={`https://www.youtube.com/embed/${youtubeIdRef.current}?autoplay=0&mute=0;&loop=1`}
                title="youtube-video-player"
                frameBorder="0"
                allowFullScreen
            ></Iframe>
        </VideoSection>
    );
};

export default RecommendPostVideoSection;

const VideoSection = styled.section`
    /* margin-top: 20px; */
    /* margin */
    overflow: hidden;
    /* width: 100%; */
    /* height: 100%; */
`;

const Iframe = styled.iframe`
    position: relative; // 상관 x
    /* top: 0px; // 마진 */
    /* bottom: 0px; */
    width: 250px;
    height: 150px;
    border: 1px solid var(--mainColor);
    border-radius: 15px;
    /* margin-top: 30px; */
`;
