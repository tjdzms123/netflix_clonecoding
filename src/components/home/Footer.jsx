import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <>
      <CopyWrapper>
        <SpaceCont>
          <div
            style={{ width: "10%", border: "3px solid white", color: "white" }}
          >
            footer1
          </div>
          <div
            style={{ width: "10%", border: "3px solid white", color: "white" }}
          >
            footer2
          </div>
        </SpaceCont>
      </CopyWrapper>
    </>
  );
}

const CopyWrapper = styled.div`
  position: relative;
  top: 260vh;
  gap: 200px;
  display: flex;
`;

const SpaceCont = styled.div`
  margin-top: 200px; /* 여백 조정 */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default Footer;
