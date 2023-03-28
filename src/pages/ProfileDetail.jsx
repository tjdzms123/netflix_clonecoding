import { useQuery } from "@tanstack/react-query";
import React, {useState} from "react";
import styled from "styled-components";
import { instance } from "../axios/api";
import { ESInput, useInput } from "../hook/useInput";
import { StSmfont } from "./Signup/Singstyled";
import { useMutation } from "@tanstack/react-query"
import { useParams } from "react-router-dom";

function ProfileDetail() {

  const [profileId, setProfiledId] = useState('');
  const [newProfile, newProfileHandler, setNewProfile] = useInput("");
  const token = decodeURI(document.cookie).replace("token=Bearer ", "");

  //전체조회
  const {data1} = useQuery({
    queryKey: ["GET_PROFILE"],
    queryFn: async () => {
      const {data1} = await instance.get(`/profile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("allProfiles", data1);
      console.log("profileName", data1.allProfiles[0].profileName);
      console.log("0번 프로필조회", data1.allProfiles[0]);
      return data1;
    },
  });


  console.log(data1);
  console.log({data1});
// console.log(data1);
  //프로필 개별조회

  const { data2 } = useQuery({    
    querykey: ["GET_INDIV_PROFILE"],
    queryFn: async () => {
      const { data2 } = await instance.get(`/profile/:profileIdx`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data2;
    },
  });


  // console.log("0번 프로필 조회", {data}.allprofiles);
  
//   const profile1 = async() => {
//     await instance.get(`/profile`,
//   {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }).allProfiles[0] 
//   console.log("profile check", profile1)
// }


  //추가
  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: async (payload) => {
      // console.log("mutation Working");
      // console.log(payload);
      const { data } = await instance.post(`/profile`,
      {profileName: payload}, //request body
      {
        headers: {
                  Authorization: `Bearer ${token}`,
                },
              })
              return data;
  }})


  const submitButtonHandler = (e) => {
    e.preventDefault();
    console.log(newProfile);
    mutate(newProfile);
  }

  // if (!data || isLoading) return <div>로딩중 ..</div>
  // if (isError) return <div>에러 !!!</div>

  return (
    <StDetailBox>
      <StDiv>
        <StHeader>
          <StImage key="netflix-profile1.png" src="img/netflix-profile1.png" />
          <form onSubmit={submitButtonHandler}>
          <ESInput
            type="text"
            placeholder="닉네임을 입력해주세요."
            value={newProfile}
            onChange={newProfileHandler}
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
          <StButton>수정</StButton>
        </div>

        <div>
          <StMenu>
            <StButton onClick={()=>mutate()}>저장</StButton>
            <StButton>취소</StButton>
            <StButton>프로필 삭제</StButton>
          </StMenu>
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

const StMenu = styled.div`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: inline-block;
    margin-right: 10px;
  }
`;

const StButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;
