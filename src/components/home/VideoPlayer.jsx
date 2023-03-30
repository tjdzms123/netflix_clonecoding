import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import Space from "../elem/Space";

function VideoPlayer() {
  const [currentUrl, setCurrentUrl] = useState(videoUrls[0]);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * videoUrls.length);
    setCurrentUrl(videoUrls[randomIndex]);
  }, []);

  return (
    <VideoCont>
      <Space>
        <ReactPlayer
          className="react-player"
          url={currentUrl}
          playing={true}
          muted={true}
          controls={true}
          width="100%"
          height="100%"
        />
      </Space>
      {/* 얘가 문제다 비율 유지가 안 됨 */}
      <VideoDescWrapper>
        <VideoDesc
          onMouseEnter={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}
          style={{
            opacity: isMouseOver ? 1 : 0,
            transition: "opacity 0.8s ease-in-out",
          }}
        >
          <VideoTitle>《스위트 투스: 사슴뿔을 가진 소년》 시즌 2</VideoTitle>
          <VideoSum style={{ paddingTop: "10px" }}>액션, 어드벤쳐</VideoSum>
          <VideoSum style={{ paddingTop: "10px" }}>
            10년 전, ‘대붕괴’가 발생했고 세상은 무자비하게 파괴됐다. 아기들의
            반은 인간, 반은 동물로 태어나게 된 것이다. 많은 인간들이 이들을
            두려워하고 사냥하기 시작했다.
          </VideoSum>
        </VideoDesc>
      </VideoDescWrapper>
    </VideoCont>
  );
}

const videoUrls = [
  // "https://youtu.be/gCpt-eiYoDM",

  // "https://youtu.be/TQzv00NjFJg",
  "http://52.78.166.176:3000/uploads/homemovie.mp4",
];

const VideoTitle = styled.div`
  font-size: 4rem;
  -webkit-text-stroke: 2.5px rgb(24, 24, 24);
  font-weight: bold;
`;

const VideoSum = styled.div`
  font-size: 2rem;
  -webkit-text-stroke: 1px rgb(24, 24, 24);
  font-weight: bold;
`;

const VideoDesc = styled.div`
  padding-left: 10vh;
  width: 45%;
  position: relative;
  top: -75vh;
  color: #ffffff;
  font-size: 4rem;
`;
const VideoDescWrapper = styled.div`
  position: relative;
  bottom: 100vh; //120whole / 100without UI
  left: 0;
  width: 100%;
  height: 10vh;
  background-color: #f7f7f716;
  display: flex;
  flex-direction: column;
`;

const VideoCont = styled.div`
  position: relative;
  object-fit: cover;
  width: 100%;
  /* height: 0; */

  > div {
    position: relative;
    padding-top: 56.25%; /* 비디오 가로세로 비율 */
  }

  > div > .react-player {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default VideoPlayer;
