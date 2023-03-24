import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

function Home() {
  const [showImg, setShowImg] = useState(false);

  useEffect(() => {
    setShowImg(true);
  }, []);

  return (
    <>
      <VideoCont>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={"https://youtu.be/qZ9SWtg02H4"}
            playing={true}
            muted={true}
            controls={true}
            width="100%"
            height="100%"
          />
          <h1 style={{ color: "white" }}>VIDEO</h1>
        </div>
      </VideoCont>

      <EhStPage>
        <StLayout>
          <EhCont1>
            <ImgWrapper showImg={showImg}>
              {/* <StyledImg src="img/test1.jpg" /> */}
            </ImgWrapper>
            <CopyWrapper>
              <StyledP
                style={{
                  marginTop: "10px",
                  fontWeight: "bold",
                  color: "rgb(190, 93, 88)",
                  WebkitTextStroke: "1px rgb(24, 24, 24)",
                  textStroke: "1px rgb(24, 24, 24)",
                }}
              >
                항해99
              </StyledP>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "row",
                }}
              >
                <StyledP
                  style={{
                    fontWeight: "bold",
                    color: "rgb(76, 76, 198)",
                    WebkitTextStroke: "1px rgb(24, 24, 24)",
                    textStroke: "1px rgb(24, 24, 24)",
                  }}
                >
                  게더타운
                </StyledP>

                <p
                  style={{
                    fontSize: "100px",
                    color: "white",
                    textDecoration: "none",
                    textShadow:
                      "0px 0px 2px black, 0px 0px 2px black, 0px 0px 2px black, 0px 0px 2px black",
                  }}
                >
                  의
                </p>
              </div>

              <StyledP>모든</StyledP>
              <StyledP>비공식 소식이</StyledP>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "row",
                }}
              >
                <BounceAni>
                  <StyledP
                    style={{
                      fontWeight: "bold",
                      color: "rgb(40, 40, 40)",
                      WebkitTextStroke: "2px white",
                      textStroke: "2px white",
                    }}
                  >
                    한 곳
                  </StyledP>
                </BounceAni>
                <p
                  style={{
                    fontSize: "100px",
                    color: "white",
                  }}
                >
                  에!
                </p>
              </div>
            </CopyWrapper>
          </EhCont1>
        </StLayout>
        <StLayout style={{ paddingTop: "150px", paddingBottom: "200px" }}>
          <EhCont1 style={{ gap: "0px" }}>
            <CopyWrapper style={{ textAlign: "center" }}>
              <StyledP>여기로 ! !</StyledP>

              <BounceAni>
                <StyledP
                  style={{
                    marginTop: "10px",
                    fontWeight: "bold",
                    color: "rgb(76, 76, 198)",
                    WebkitTextStroke: "1px rgb(24, 24, 24)",
                    textStroke: "1px rgb(24, 24, 24)",
                  }}
                >
                  리액트
                </StyledP>
              </BounceAni>

              <BounceAni>
                <StyledP
                  style={{
                    fontWeight: "bold",
                    color: "rgb(40, 40, 40)",
                    WebkitTextStroke: "2px white",
                    textStroke: "2px white",
                  }}
                >
                  노드
                </StyledP>
              </BounceAni>

              <BounceAni>
                <StyledP
                  style={{
                    fontWeight: "bold",
                    color: "rgb(190, 93, 88)",
                    WebkitTextStroke: "1px rgb(24, 24, 24)",
                    textStroke: "1px rgb(24, 24, 24)",
                  }}
                >
                  스프링
                </StyledP>
              </BounceAni>

              <StyledP>! ! 모여라</StyledP>
            </CopyWrapper>
            <ImgWrapper style={{ marginLeft: "100px" }} showImg={showImg}>
              {/* <StyledImg src="img/test3.jpg" /> */}
            </ImgWrapper>
          </EhCont1>
        </StLayout>
      </EhStPage>
    </>
  );
}

const BounceAni = styled.div`
  animation-name: bounce;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  @keyframes bounce {
    0% {
      transform: scale(0.95);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(0.95);
    }
  }
`;

const CopyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  opacity: 0;
  animation: fadeIn 2s ease forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ImgWrapper = styled.div`
  margin-left: 200px;
  opacity: ${(props) => (props.showImg ? 1 : 0)};
  transition: opacity 2s;
`;

const StyledP = styled.p`
  margin-left: 50px;
  font-size: 100px;
  color: white;
  text-decoration: none;
  text-shadow: 0px 0px 2px black, 0px 0px 2px black, 0px 0px 2px black,
    0px 0px 2px black;
`;

const StyledImg = styled.img`
  border-radius: 10%;
  border: 1px solid rgb(0, 0, 0);
`;

const EhStPage = styled.div`
  height: 80vh;
  background-image: url(https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcZXn9R%2Fbtr5pa5degz%2FV2hd9LvzX1hLOKpmK9WNK0%2Fimg.png);
  padding-top: 250px;
`;

const EhCont1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
`;

const StLayout = styled.div`
  background-image: url(https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcZXn9R%2Fbtr5pa5degz%2FV2hd9LvzX1hLOKpmK9WNK0%2Fimg.png);
  display: flex;
  justify-content: center;
  /* margin-top: 20px; */
  padding: 20px;
  box-sizing: border-box;
`;

//==================

const StyledHome = styled.div``;

const VideoCont = styled.div`
  z-index: 10;
  position: relative;
  object-fit: cover;
  width: 100%;
  height: 100%;

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

export default Home;
