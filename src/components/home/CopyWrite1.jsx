import React from "react";
import styled from "styled-components";

function CopyWrite1() {
  return (
    <CopyWrapper>
      <CopyCont>
        <CopyImg1 />
        <CopyTextCont>
          <CopyText>
            <RedText>이야기</RedText>는 사람을 움직입니다.
          </CopyText>
          <CopyText>
            <RedText>이야기</RedText>를 통해 우리는 더 많은 감정을 느끼고,
          </CopyText>
          <CopyText>새로운 관점을 접하고,</CopyText>
          <CopyText>서로에 대한 이해를 높일 수 있습니다.</CopyText>
        </CopyTextCont>
      </CopyCont>
    </CopyWrapper>
  );
}

const CopyCont = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  font-size: 40px;
  top: -90px;
  color: white;
  padding-left: 40px;
  gap: 50px;
`;
const CopyTextCont = styled.div`
  border-left: 7px solid red;
  padding-left: 40px;
`;
const CopyImg1 = styled.div`
  border-radius: 5px;
  width: 400px;
  background-image: url("/img/EHcopywrite1.webp");
  background-size: cover;
  background-position-x: -30px;
`;

const CopyText = styled.div`
  margin-bottom: 20px;
`;
const CopyWrapper = styled.div`
  position: absolute;
  top: 1000px;
  gap: 200px;
  display: flex;
  flex-direction: row;
  /* justify-content: center; //absolute라 적용 안 됨 */
  transform: translateX(5%);
`;

const RedText = styled.span`
  color: red;
`;
export default CopyWrite1;
