import { useQuery } from "@tanstack/react-query";
import React, {useState} from "react";
import styled from "styled-components";
import { instance } from "../../axios/api";
import { ESInput, useInput } from "../../hook/useInput";
import { StSmfont } from ".././Signup/Singstyled";
import ProfileButton from "./ProfileButton";

function ProfileDetail() {

  const token = decodeURI(document.cookie).replace("token=Bearer ", "");

  const [newProfile,setNewProfile] = useState('');

  const ChgInputHandler = (e) => {
    setNewProfile(e.target.value);
  };

  const submitButtonHandler = e => {
    e.preventDefault();
  };

  return (
    <StDetailBox>
      <StDiv>
        <StHeader>
          <StImage key="netflix-profile1.png" src="img/netflix-profile1.png" />
          <form onSubmit={submitButtonHandler}>
          <ESInput
            type="text"
            placeholder="닉네임을 입력해주세요."
            value={newProfile.profileName}
            onChange={ChgInputHandler}
            required
          />        
          </form>
        </StHeader>

        <div>
          <p>관람등급 설정 :</p>
          <select name="size" id="">
            <option value="성인">성인</option>
            <option value="청소년">19세 미만 청소년</option>
          </select>
          <StSmfont>
            이 프로필에서는 모든 관람등급의 콘텐츠가 표시됩니다.
          </StSmfont>
          {/* 성인이냐 청소년이냐 -> 성인이면 모든 관람msg 아니면 청소년 관람자 */}
        </div>

        <div>
          <ProfileButton newProfile={newProfile}> </ProfileButton>
        </div>
      </StDiv>
    </StDetailBox>
  );
}

export default ProfileDetail;

const StDetailBox = styled.div`
  color: white;
`;

const StDiv = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;

  height: 50vh;
  width: 300px; /* 로그인 폼의 너비 */
  margin: 0 auto; /* 로그인 폼을 중앙에 위치시키기 위한 마진 */
  border-radius: 5px; /* 로그인 폼의 모서리를 둥글게 만듭니다 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 로그인 폼 주위에 그림자를 만듭니다 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #252525;
  opacity: 1.2;
  color: gray;
  line-height: 20px;
  font-size: 14px;
`;

const StHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const StImage = styled.img`
  width: 200px;
  height: 200px;
`;
