import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StButton, StFont, StSmfont } from "./Singstyled";

function Signup3() {
  const navi = useNavigate();

  const onNavigate = () => {
    navi('/movies')
  }
  return (
    <StDiv>        
      <StFont>
      <StTable>
        <StSmfont>3/3단계</StSmfont>

        <p>원하는 멤버십을 선택하세요</p>
        <p>무제한으로 즐기세요.</p>
        <p>취향에 꼭 맞는 콘텐츠를 추천해 드립니다.</p>
        <p>멤버십은 언제든지 변경 또는 해지 가능.</p>
      </StTable>

      <StTable>
        <tbody>
          <table class="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">광고형 베이식</th>
                <th scope="col">스탠다드</th>
                <th scope="col">프리미엄</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">월 요금</th>
                <td>5,500원</td>
                <td>13,500원</td>
                <td>17,000원</td>
              </tr>
              <tr>
                <th scope="row">영상화질</th>
                <td>좋음</td>
                <td>매우 좋음</td>
                <td>가장 좋음</td>
              </tr>
              <tr>
                <th scope="row">해상도</th>
                {/* <td colspan="2">✔️</td> */}
                <td>✔️</td>
                <td>✔️</td>
                <td>✔️</td>
              </tr>
              <tr>
                <th scope="row">저장</th>
                <td></td>
                <td>✔️</td>
                <td>✔️</td>
              </tr>
            </tbody>
          </table>
        </tbody>
      </StTable>
      </StFont>
      <StButton 
      onClick={onNavigate}
      style={{
        marginTop:'50px'
      }}
      >로그인 완료</StButton>
    </StDiv>
  );
}

export default Signup3;

//전체
const StDiv = styled.div`
  /* background-color: antiquewhite; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color:#fff
`

//표
const StTable = styled.table`
  border-collapse: collapse;
  width: 100%;


  td,th {
    border-bottom: 1px solid gray;
    padding: 8px;
    text-align: left;
    width: 200px;
  }

`;
