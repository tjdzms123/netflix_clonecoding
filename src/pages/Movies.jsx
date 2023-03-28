import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import ImageSlider from "../components/elem/Slide";
import FalseGuard from "../hook/guard/FalseGuard";
import { useQuery } from "@tanstack/react-query";
import { instance } from "../axios/api";

function Movies() {
  FalseGuard();
  
  const { data } = useQuery({
    queryKey: ["GET_MOVIES"],
    queryFn: async () => {
      const { data } = await instance.get(`/movies`);
      return data.movies;
    },
  });
  return (
    <>
      <Helmet>
        <title>Netflix</title>
      </Helmet>
      <StHeader />
      <ImageSlider movies={data} />
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
