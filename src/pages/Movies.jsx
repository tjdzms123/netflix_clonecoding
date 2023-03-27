import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import ImageSlider from "../components/elem/Slide";


function Movies() {
  return (
    <>
      //========= EH =============
      <Helmet>
        <title>Netflix</title>
      </Helmet>
      //========= EH =============
      <StHeader />
      <ImageSlider />
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