import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function CopyWrite3() {
  return (
    <CopyWrapper>
      <Relative>
        <CopyImg2 style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              marginTop: "150px",
            }}
          >
            <CopyCont>지금 시청하기</CopyCont>
            <LinkButton to="/movies">Netflix.com →</LinkButton>
          </div>
        </CopyImg2>
      </Relative>
    </CopyWrapper>
  );
}

const CopyWrapper = styled.div`
  position: relative;
  top: 0vh;
  gap: 200px;
  width: calc(100%);
  display: flex;
  flex-direction: row;
`;

const Relative = styled.div`
  position: relative;
  display: block;
  width: calc(100%);
`;

const CopyImg2 = styled.div`
  border-radius: 5px;
  background-image: url("/img/EHcopywrite2.jpeg");
  background-size: cover;

  box-shadow: rgba(255, 255, 255, 0.617) 0px 1px 10px;

  display: block;
  flex-direction: row;
  text-align: center;
  font-size: 80px;
  top: -90px;
  color: white;
  gap: 50px;
  width: calc(100%);
  /* width: 1920px; */
  //width 100%가 왜 안 뒈는 거야......
  /* width: 100%; */
  height: 500px;
`;

const LinkButton = styled(Link)`
  font-size: 25px;
  color: white;
  padding: 20px 70px;
  background-color: red;
  border: 1px solid red;
  border-radius: 2px;
  text-decoration: none;

  &:hover {
    color: rgb(180, 180, 180);
    cursor: pointer;
  }
`;

const CopyCont = styled.div`
  margin-bottom: 20px;
`;

export default CopyWrite3;
