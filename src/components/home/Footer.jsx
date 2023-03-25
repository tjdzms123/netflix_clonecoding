import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <>
      <CopyWrapper>
        <SpaceCont>
          <div style={{ border: "3px solid white", color: "white" }}>try</div>
          <div style={{ border: "3px solid white", color: "white" }}>try</div>
        </SpaceCont>
      </CopyWrapper>
    </>
  );
}

const SpaceCont = styled.div`
  padding-left: 240px; /* absolute라 justify-content 이걸로 */
  margin-top: 200px; /* 여백 조정 */
  display: flex;
  flex-direction: column;
`;
const CopyWrapper = styled.div`
  position: absolute;
  top: 2000px;
  gap: 200px;
  display: flex;
  flex-direction: row;
`;

export default Footer;
