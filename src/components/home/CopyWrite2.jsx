import React from "react";
import styled from "styled-components";

function CopyWrite2() {
  return (
    <CopyWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          textAlign: "center",
          fontSize: "40px",
          top: "-90px",
          color: "white",
          paddingLeft: "40px",
          gap: "50px",
        }}
      >
        <CopyImg1 />
        <div style={{ borderLeft: "7px solid red", paddingLeft: "40px" }}>
          <CopyCont>
            <RedText>이야기</RedText>는 사람을 움직입니다.
          </CopyCont>
          <CopyCont>
            <RedText>이야기</RedText>를 통해 우리는 더 많은 감정을 느끼고,
          </CopyCont>
          <CopyCont>새로운 관점을 접하고,</CopyCont>
          <CopyCont>서로에 대한 이해를 높일 수 있습니다.</CopyCont>
        </div>
      </div>
    </CopyWrapper>
  );
}

const CopyImg1 = styled.div`
  border-radius: 5px;
  width: 400px;
  background-image: url("/img/EHcopywrite1.webp");
  background-size: cover;
  background-position-x: -30px;
`;

const CopyCont = styled.div`
  margin-bottom: 20px;
`;
const CopyWrapper = styled.div`
  position: absolute;
  /* top: 1550px; */
  top: 1550px;
  gap: 200px;
  display: flex;
  flex-direction: row;
  /* justify-content: center; //absolute라 적용 안 됨 */
  transform: translateX(5%);
`;

const RedText = styled.span`
  color: red;
`;
export default CopyWrite2;
