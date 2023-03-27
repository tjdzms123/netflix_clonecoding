import React from "react";
import styled from "styled-components";
import ImageSlider from "../components/elem/Slide";

function Movies() {
  return (
    <>
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