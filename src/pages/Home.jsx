import React, { useEffect, useState } from "react";
import styled from "styled-components";
import VideoPlayer from "../components/home/VideoPlayer";
import Row from "../components/elem/Flex";

function Home() {
  const [showImg, setShowImg] = useState(false);

  useEffect(() => {
    setShowImg(true);
  }, []);

  return (
    <>
      <VideoPlayer />
      <EhStPage>
        <StLayout>
          <EhCont1>
            <ImgWrapper showImg={showImg}>
              <StyledImg
                style={{ position: "absolute" }}
                src="img/EHhome1.jpg"
              />
            </ImgWrapper>
            <CopyWrapper>
              <StyledP
                style={{
                  marginTop: "10px",
                  fontWeight: "bold",

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
        {/* ======================== */}
        {/* <StLayout style={{ paddingTop: "150px", paddingBottom: "200px" }}>
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
              <StyledImg src="img/test3.jpg" />
            </ImgWrapper>
          </EhCont1>
        </StLayout> */}
      </EhStPage>
    </>
  );
}

const BounceAni = styled.div`
  animation-name: bounce;
  animation-duration: 1s;
`;

const CopyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  flex: 10;

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
  margin-left: 10px;
  flex: 1;
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
  padding-top: 1250px;
  display: flex;
`;

const EhCont1 = styled.div`
  display: flex;
  /* flex-direction: row; */
  justify-content: space-between;
  /* gap: 800px; */
`;

const StLayout = styled.div`
  display: flex;
  /* justify-content: center; */
  justify-content: space-between;

  /* margin-top: 20px; */
  padding: 20px;
  box-sizing: border-box;
`;

const HomeWrapper = styled.div`
  max-width: 768px;
  padding: 30px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* border-top: 8px solid rgb(25,25,25); */
`;

const HomeCont1 = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
`;

const HomeContSub1 = styled.div`
  padding: 0px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
export default Home;
