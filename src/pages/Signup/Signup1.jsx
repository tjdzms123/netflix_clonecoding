import React from "react";
import styled from "styled-components";
import { StButton, Stfont, StInput } from "./Singstyled";

function Signup() {
  return (
    <StDiv>
      <form>
        <Stfont>1/3단계</Stfont>
        <h3>비밀번호를 설정해 멤버십을 시작하세요.</h3>
        <p>몇 단계만 더 거치면 넷플릭스 가입 완료!</p>
        <p>복잡한 단계는 모두 없앴습니다.</p>
        <StInput type="text"

        />
        <br />
        <StInput type="text" 
        />
        {/* radio 알아보기 체크리스트 구현 */}
        <br />
        <StButton>동의하고 계속</StButton>
      </form>
    </StDiv>
  )
}

export default Signup;

//전체
const StDiv = styled.div`
  /* background-color: antiquewhite; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
