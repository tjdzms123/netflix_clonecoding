import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import { instance } from "../axios/api";

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

  const response0 = useQuery({
    queryKey: ["GET_DETAIL"],
    queryFn: async () => {
      const { data } = await instance.get(`/movies/detail/1`);
      console.log("GET_DETAIL----->", data);
      return data;
    },
  });

  const response1 = useQuery({
    queryKey: ["GET_CATEGORY"],
    queryFn: async () => {
      const { data } = await instance.get(`/movies/category`);
      console.log("GET_CATEGORY----->", data.category);
      return data.category;
    },
  });

  const response2 = useQuery({
    queryKey: ["GET_ALLMOVIES"],
    queryFn: async () => {
      const { data } = await instance.get(`/movies`);
      console.log("GET_ALLMOVIES----->", data.movies);
      return data.movies;
    },
  });

  // * =============== TEST ================== *

  return <StDetailBox>1</StDetailBox>;
}

export default Detail;

const StDetailBox = styled.div`
  color: white;
`;
