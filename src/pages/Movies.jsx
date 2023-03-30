import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import RecommendSlider from "../components/elem/RecommendSlide";
import FalseGuard from "../hook/guard/FalseGuard";
import { useQuery } from "@tanstack/react-query";
import { instance } from "../axios/api";
import ActionSlider from "../components/elem/ActionSlide";
import ComedySlider from "../components/elem/ComedySlide";
import AnimationSlider from "../components/elem/AnimationSlide";

function Movies() {
  FalseGuard();

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9maWxlSWR4IjoiYjcwODNhMjktNGU0ZC00MGFjLTkyYmYtZTQ2MjE0ZTVlMTMwIiwiaWF0IjoxNjgwMDY2NjkyLCJleHAiOjE2ODAzOTA2OTJ9.dL5d2xT1W-Wtsa_oZrcNUTz-u6p_748kd26tMlKQBCs";

  const { data: recommendMovies } = useQuery({
    queryKey: ["GET_RECOMMENDMOVIES"],
    queryFn: async () => {
      const { data } = await instance.get(`/movies`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data.allVideos;
    },
  });
  // console.log("RECOMMEND", recommendMovies);

  const { data: action } = useQuery({
    queryKey: ["GET_ACTION"],
    queryFn: async () => {
      const { data } = await instance.get(`/movies/category/CS000002`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data.category.videos;
    },
  });
  // console.log("ACTION", action);

  const { data: comedy } = useQuery({
    queryKey: ["GET_COMEDY"],
    queryFn: async () => {
      const { data } = await instance.get(`/movies/category/CS000003`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data.category.videos;
    },
  });
  // console.log("COMEDY", comedy);

  const { data: animation } = useQuery({
    queryKey: ["GET_ANIMATION"],
    queryFn: async () => {
      const { data } = await instance.get(`/movies/category/CS000005`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data.category.videos;
    },
  });
  // console.log("ANIMATION", animation);

  return (
    <>
      <Helmet>
        <title>Netflix</title>
      </Helmet>
      <StHeader />
      <RecommendSlider movies={recommendMovies} />
      <ActionSlider actions={action} />
      <ComedySlider comedies={comedy} />
      <AnimationSlider animations={animation} />
    </>
  );
}

export default Movies;

const StHeader = styled.div`
  height: 500px;
  background-image: url(https://i.ibb.co/vXqDmnh/background.jpg);
  background-size: cover;
  background-position: center;
`;
