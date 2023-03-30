import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <>
      <CopyWrapper>
        <SpaceCont style={{ gap: "10px" }}>
          <div style={{ color: "rgba(255,255,255, 0.5)" }}>
            넷플릭스에 오신 걸 환영합니다.
          </div>
          <div style={{ color: "rgba(255,255,255, 0.5)" }}>
            FE: 김성근, 이은형, 정은선
          </div>
          <div style={{ color: "rgba(255,255,255, 0.5)" }}>
            BE: 김다빈, 김오성, 문지혜, 임건
          </div>
        </SpaceCont>
      </CopyWrapper>
    </>
  );
}

const CopyWrapper = styled.div`
  position: relative;
  top: 0vh;
  gap: 200px;
  display: flex;
`;

const SpaceCont = styled.div`
  margin-top: 200px; /* 여백 조정 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default Footer;
