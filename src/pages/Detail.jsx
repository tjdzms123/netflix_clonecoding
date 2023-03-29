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

  // * ============== ALLMOVIES =============== *
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
  const contentIdx = allMovies.data[2].contentIdx;
  // console.log(allMovies.data[2]);
  console.log(contentIdx);

  // * ============== ALLMOVIES =============== *

  // * ============== DETAIL_MOVIES =============== *
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
  const detailVideo = response.data.detailVideo.Video;
  console.log("detailVideo---------->", detailVideo);

  const detailDesc = detailVideo.desc;
  const detailTitie = detailVideo.name;
  const detailPlaytime = detailVideo.playtime;
  const detailUrl = detailVideo.videoUrl;
  console.log(detailTitie);

  // * ============== DETAIL_MOVIES =============== *

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
        <div>{detailTitie}</div>
        <div>{detailPlaytime}</div>
        <div>{detailDesc}</div>
      </StDetailDescBox>
    </StDetailBox>
    // ============== Detail Modal Temp ==============
  );
}

export default Detail;

const StDetailBox = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  border: 2px solid red;
`;

const StDetailVideoBox = styled.div`
  width: 100%;
  height: auto;
`;

const StDetailDescBox = styled.div`
  display: flex;
  justify-content: column;
`;
