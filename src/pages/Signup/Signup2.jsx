import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StButton, StFont, StSmfont } from "./Singstyled";
// =============== EH =================
import { Helmet } from "react-helmet";
import TrueGuard from "../../hook/guard/TrueGuard";
// =============== EH =================

function Signup2() {
  const navi = useNavigate();
  TrueGuard();

  const onNavigate = () => {
    navi("/signup3");
  };
  return (
    <>
      //========= EH =============
      <Helmet>
        <title>Login - Netflix</title>
      </Helmet>
      //========= EH =============
      <StDiv>
        {/* 아이콘 */}
        <StFont>
          <StSmfont>2/3단계</StSmfont>
          <p>원하는 멤버십을 선택하세요.</p>
          <p>無약정, 無위약금. 해지도 쿨하게 언제든지.</p>
          <p>하나의 요금으로 즐기는 끝없는 콘텐츠의 세계.</p>
          <p>모든 디바이스에서 무제한 시청.</p>
        </StFont>
        <StButton onClick={onNavigate}>다음</StButton>
      </StDiv>
    </>
  );
}

export default Signup2;

//전체
const StDiv = styled.div`
  /* background-color: antiquewhite; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
