import { useQuery } from "@tanstack/react-query";
import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { instance } from "../axios/api";

function Detail() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9maWxlSWR4IjoiYjcwODNhMjktNGU0ZC00MGFjLTkyYmYtZTQ2MjE0ZTVlMTMwIiwiaWF0IjoxNjgwMDY2NjkyLCJleHAiOjE2ODAzOTA2OTJ9.dL5d2xT1W-Wtsa_oZrcNUTz-u6p_748kd26tMlKQBCs";

  // const response1 = useQuery({
  //   queryKey: ["GET_CATEGORY"],
  //   queryFn: async () => {
  //     const { data } = await axios.get(
  //       `http://52.78.166.176:3000/movies/category`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     console.log("GET_CATEGORY----->", data);
  //     return data.genre;
  //   },
  // });
  // * =============== TEST ================== *
  //   // "> Query data cannot be undefined. Please make sure to return a value
  //   // other than undefined from your query function.
  //   // Affected query key: ["GET_$$$$$$$$"]"
  //   const token =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9maWxlSWR4IjoiYjcwODNhMjktNGU0ZC00MGFjLTkyYmYtZTQ2MjE0ZTVlMTMwIiwiaWF0IjoxNjgwMDUyMTQ3LCJleHAiOjE2ODAwNTU3NDd9.bX9d1Wt4bMY6D3WrOjxlNV3K7IrKXpRALvALJc9SuRY";
  //   const response0 = useQuery({
  //     queryKey: ["GET_DETAIL"],
  //     queryFn: async () => {
  //       const { data } = await instance.get(`/movies/detail/599f5490cca311ed9284025ab6c89464`, {
  //         headers: { Authorization: `Bearer ${token}` },
  //       });
  //       console.log("GET_DETAIL----->", data);

  //   // * ============== ALLMOVIES =============== *
  const allMovies = useQuery({
    queryKey: ["GET_ALLMOVIES"],
    queryFn: async () => {
      const { data } = await instance.get(`/movies`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data.allVideos;
    },
  });
  // console.log(allMovies.data);
  // const contentIdx = allMovies.data[2].contentIdx;
  const contentIdx = "1037f448-cdfa-11ed-9284-025ab6c89464";
  // console.log(allMovies.data[2]);
  // console.log(contentIdx);

  //   // * ============== ALLMOVIES =============== *

  //   // * ============== DETAIL_MOVIES =============== *
  const response = useQuery({
    queryKey: ["GET_DETAIL"],
    queryFn: async () => {
      const { data } = await instance.get(
        // `/movies/detail/0ba0172ccca311ed9284025ab6c89464`,
        `/movies/detail/${contentIdx}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    },
  });
  console.log(response.data);
  // const detailVideo = response.data.detailVideo.Video;
  // console.log("detailVideo---------->", detailVideo);

  // const detailDesc = detailVideo.desc;
  const detailDesc =
    "어릴 적에 부모를 여읜 폴은 말을 잃은 채 두 이모와 함께 산다. 이모들은 폴을 세계적인 피아니스트로 만들려고 했지만 33살의 폴은 댄스교습소에서 피아노 연주를 하는 것이 전부이다. 그러던 어느 날 우연히 이웃 마담 프루스트의 집을 방문한 폴은 그녀가 준 차와 마들렌을 먹고 과거의 상처와 추억을...";
  // const detailTitie = detailVideo.name;
  const detailTitie = "마담 프루스트의 비밀정원";
  // const detailPlaytime = detailVideo.playtime;
  const detailPlaytime = "1시간46분";
  // const detailUrl = detailVideo.videoUrl;
  const detailUrl = "http://52.78.166.176:3000/uploads/madam.mp4";
  // * ============== DETAIL_MOVIES =============== *

  const MoviePlayHandler = () => {
    alert("영상 준비 중입니다.");
  };
  return (
    // ============== Detail Modal Temp ==============

    <StDetailBox>
      <StDetailVideoBox>
        <ReactPlayer
          className="react-player"
          url={detailUrl}
          playing={true}
          muted={true}
          controls={true}
          width="100%"
          height="100%"
        />
      </StDetailVideoBox>
      <StDetailDescBox>
        <StDetailTitle>{detailTitie}</StDetailTitle>
        <StDetailPlaytime>{detailPlaytime}</StDetailPlaytime>
        <StDetailSum>{detailDesc}</StDetailSum>
      </StDetailDescBox>
      <StDetailButton onClick={MoviePlayHandler}>
        {detailTitie} 보러 가기
      </StDetailButton>
    </StDetailBox>
    // ============== Detail Modal Temp ==============
  );
}

export default Detail;

const StDetailButton = styled.button`
  padding: 0.75rem;
  background-color: red;
  border-radius: 0.5rem;
  color: white;
  font-size: 1rem;
  cursor: pointer;
`;
const StDetailTitle = styled.div`
  font-size: 3rem;
`;

const StDetailPlaytime = styled.div`
  padding-top: 0.5rem;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
`;

const StDetailSum = styled.div`
  padding-top: 1rem;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.5);
`;

const StDetailBox = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100vh;
  border-radius: 50px;
  /* padding: 20px; */
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 5rem;
  background-color: rgba(0, 0, 0, 0.5);
  position: relative;
  left: -38vh;
  top: -45vh;
`;

const StDetailVideoBox = styled.div`
  width: 100%;
  height: auto;
  border-radius: 50px;
`;

const StDetailDescBox = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  border-top: 0.5rem solid red;
`;
