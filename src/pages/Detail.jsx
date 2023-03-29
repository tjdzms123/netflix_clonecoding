import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import { instance } from "../axios/api";
import axios from "axios";
import ReactPlayer from "react-player";

function Detail() {
  // const response = useQuery({
  //   queryKey: ["GET_DETAIL", query.id],
  //   queryFn: async () => {
  //     const {data} = await instance.get(`/movies/detail/${query.id}`);
  //     return console.log("GET_DETAIL----->", data);
  //   },
  //  enabled: Boolean(query.id),
  // });

  // return <StDetailBox onClick={ClickMovieHandler}>1</StDetailBox>;

  // * =============== TEST ================== *
  // "> Query data cannot be undefined. Please make sure to return a value
  // other than undefined from your query function.
  // Affected query key: ["GET_$$$$$$$$"]"

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9maWxlSWR4IjoiYjcwODNhMjktNGU0ZC00MGFjLTkyYmYtZTQ2MjE0ZTVlMTMwIiwiaWF0IjoxNjgwMDY2NjkyLCJleHAiOjE2ODAzOTA2OTJ9.dL5d2xT1W-Wtsa_oZrcNUTz-u6p_748kd26tMlKQBCs";

  const response0 = useQuery({
    queryKey: ["GET_DETAIL"],
    queryFn: async () => {
      console.log(token);
      const { data } = await instance.get(
        `/movies/detail/599f5490cca311ed9284025ab6c89464`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("GET_DETAIL----->", data);
      return data;
    },
  });

  const response1 = useQuery({
    queryKey: ["GET_CATEGORY"],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://52.78.166.176:3000/movies/category`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("GET_CATEGORY----->", data);
      return data.genre;
    },
  });

  const response2 = useQuery({
    queryKey: ["GET_ALLMOVIES"],
    queryFn: async () => {
      const { data } = await instance.get(`/movies`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("GET_ALLMOVIES----->", data.movies);
      return data.allVideos;
    },
  });

  // * =============== TEST ================== *

  return (
    // ============== Detail Modal Temp ==============

    <StDetailBox>
      <StDetailVideoBox>
        {/* <ReactPlayer
        className="react-player"
        url={currentUrl}
        playing={true}
        muted={true}
        controls={true}
        width="100%"
        height="100%"
      /> */}
      </StDetailVideoBox>
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
`;

const StDetailVideoBox = styled.div`
  width: 100%;
  height: auto;
`;
