import React, { useEffect } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import ImageSlider from "../components/elem/Slide";
import { useNavigate } from "react-router-dom";
import { cookies } from "../shared/cookies";

function Movies() {
  // ========== EH "Add Guard" ===========
  const navi = useNavigate();
  useEffect(() => {
    const token = cookies.get("token");
    if (!token) {
      navi("/login");
    }
  });
  // ========== EH "Add Guard" ===========

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
