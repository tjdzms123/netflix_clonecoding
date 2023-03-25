import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <>
      <StTop />
      <StMovieList>
        <h2>영화 장르 이름</h2>
        <StMovieCardWrap>
          <StMovieCard>장르별 영화</StMovieCard>
          <StMovieCard>장르별 영화</StMovieCard>
        </StMovieCardWrap>
      </StMovieList>
    </>
  );
}

export default Movies;

const StTop = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(https://i.ibb.co/vXqDmnh/background.jpg);
  background-size: cover;
  background-position: center;
`;

const StMovieList = styled.div`
  background-color: black;
  color: white;
  padding: 30px;
`;

const StMovieCardWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const StMovieCard = styled.div`
  background-color: green;
  width: 200px;
  height: 150px;
`;
