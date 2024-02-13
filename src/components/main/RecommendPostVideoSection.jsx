import React, { useRef } from "react";
import styled, { css } from "styled-components";

const RecommendPostVideoSection = ({ videoSrc, type }) => {
    const youtubeIdRef = useRef("");
    if (videoSrc) {
        if (videoSrc.includes("youtube.com/live")) {
            // 유튭 라이브영상 (공유)주소의 경우
            const youtubeId = videoSrc.substring(29, 40);
            youtubeIdRef.current = youtubeId;
        } else if (videoSrc.includes("youtube.com/watch")) {
            // 일반 유튭주소의 경우 (공유주소아닌)
            const youtubeId = videoSrc.substring(32, 43);
            youtubeIdRef.current = youtubeId;
        } else {
            // 일반 공유 주소 : ..youtu.be/..
            const youtubeId = videoSrc.substring(17, 28);
            youtubeIdRef.current = youtubeId;
        }
    }
    return (
        <VideoSection>
            <Iframe
                // src 유저가 넣으면 토대로 iframe태그로 (메인홈페이지에서) 영상뜨게하기
                // 유튜브 공유 링크주소든, 일반 링크주소든 상관 X
                src={`https://www.youtube.com/embed/${youtubeIdRef.current}?autoplay=0&mute=0;&loop=1`}
                title="youtube-video-player"
                frameBorder="0"
                allowFullScreen
                $type={type}
            ></Iframe>
        </VideoSection>
    );
};

export default RecommendPostVideoSection;

const VideoSection = styled.section`
    margin-left: 20px;
    overflow: hidden;
`;

const Iframe = styled.iframe`
    position: relative;
    width: 302px; // 볼륨크기조절이 같이 뜨려면 최소 이정도 넓이 부여해야
    height: 150px;
    border: 1px solid var(--mainColor);
    border-radius: 15px;
    ${(props) => {
        if (props.$type === "detail") {
            return css`
                width: 720px;
                height: 400px;
            `;
        }
    }}
`;
