import React from 'react'
import styled from 'styled-components'
import { StButton, Stfont } from './Singstyled'

function Signup2() {
  return (
    <StDiv>
      {/* 아이콘 */}
      <Stfont>2/3단계</Stfont>
      <p>원하는 멤버십을 선택하세요.</p>
      <p>無약정, 無위약금. 해지도 쿨하게 언제든지.</p>
      <p>하나의 요금으로 즐기는 끝없는 콘텐츠의 세계.</p>
      <p>모든 디바이스에서 무제한 시청.</p>
      <StButton>다음</StButton>
    </StDiv>
  )
}

export default Signup2

//전체
const StDiv = styled.div`
  /* background-color: antiquewhite; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`