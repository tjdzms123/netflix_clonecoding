import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <>
      <StHeader />
      <StMovieContainer>
        <StMovieWrap>
          <StMoviecategory>영화 장르 이름</StMoviecategory>
          <StMovieCards>
            <StMovieCard>장르별 영화</StMovieCard>
            <StMovieCard>장르별 영화</StMovieCard>
          </StMovieCards>
        </StMovieWrap>
      </StMovieContainer>
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

const StMovieContainer = styled.div`
  color: white;
  padding: 10px 30px 30px 30px;
`;

const StMovieWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const StMoviecategory = styled.p`
  margin-bottom: 15px;
`;
const StMovieCards = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const StMovieCard = styled.div`
  background-color: green;
  width: 200px;
  height: 150px;
`;
