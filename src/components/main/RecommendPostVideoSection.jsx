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
            // else if 안하면 안뜨는 라이브영상있으니 주의 - ? 연속문자열 포함이 아닌가 설마하나하나
            // 일반 유튭주소의 경우 (공유주소아닌)
            const youtubeId = videoSrc.substring(32, 43);
            // console.log("일반유튭주소:", youtubeId);
            youtubeIdRef.current = youtubeId;
        } else {
            // 일반 공유 주소 : ..youtu.be/..
            const youtubeId = videoSrc.substring(17, 28);
            youtubeIdRef.current = youtubeId;
        }
        // console.log(youtubeId);
    }

    console.log("youtubeIdRef ", youtubeIdRef);

    // 공유 주소 기준
    // const youtubeId = videoSrc ? videoSrc.substring(17, 28) : "";
    // console.log("youtubeId:", youtubeId, videoSrc);

    return (
        <VideoSection>
            <Iframe
                // src 유저가 넣으면 토대로 iframe태그로 (메인홈페이지에서) 영상뜨게하기
                // 유튜브 공유 링크를 넣도록 하기 (공유링크아니어도 그냥 주소에서도 id값만 embed/뒤에 넣으면됨 but live'는 끼면안됨)
                // 공유링크에 live가 들어가는 경우 live없애고 뒷부분 embed/뒤에넣기  ?전까지
                // 그냥`  ... ${youtubeId}` 하면 안됨. src={}안에 ``백틱 하고 쓰기
                // 주의 : 그냥 youtubeIdRef 쓰면안되고 .current 꼭 !
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
