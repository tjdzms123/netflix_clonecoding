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
            transition: "opacity 1.3s ease-in-out",
          }}
        >
          <div>영상 제목</div>
          <div>소개글</div>
          <div>버튼 | 버튼</div>
        </VideoDesc>
        <div
          style={{
            backgroundColor: "black",
            position: "relative",
            top: "-48vh", //외부 player UI cover
            // top: "-48%", //외부 player UI cover
            fontSize: "30vh",
            // fontSize: "22vh",
            color: "rgb(0,0,0,0)",
          }}
        >
          UI
        </div>
      </VideoDescWrapper>
      {/* <OverlayVideo /> */}
    </VideoCont>
  );
}

const videoUrls = [
  "https://youtu.be/gCpt-eiYoDM",
  "https://youtu.be/TQzv00NjFJg",
];

const VideoDesc = styled.div`
  padding-left: 10vh;
  position: relative;
  top: -60vh;
`;
const VideoDescWrapper = styled.div`
  position: relative;
  bottom: 100vh; //120whole / 100without UI
  left: 0;
  width: 100%;
  height: 10vh;
  color: #ffffff;
  font-size: 100px;
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
