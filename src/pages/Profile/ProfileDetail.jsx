import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import styled from "styled-components";
import { instance } from "../../axios/api";
import { ESInput, useInput } from "../../hook/useInput";
import { StSmfont } from ".././Signup/Singstyled";
import { useMutation } from "@tanstack/react-query"
import { cookies } from "../../shared/cookies";
// import { useCookies } from 'react-cookie'

function ProfileDetail() {

  const [newProfile, newProfileHandler, setNewProfile] = useInput("");
  const token = decodeURI(document.cookie).replace("token=Bearer ", "");

  //전체조회
  const { data1 } = useQuery({
    queryKey: ["GET_PROFILE"],
    queryFn: async () => {
      const { data1 } = await instance.get(`/profile`, {
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

  //프로필 개별조회
  const { data2 } = useQuery({
    querykey: ["GET_INDIV_PROFILE"],
    queryFn: async () => {
      //   const { data2 } = await instance.get(`/profile/:profileIdx`
      // ,
      const { data2 } = await instance.get(
        `/profile/e494d2a3-b037-464e-ab74-ea354c6d3e39/login`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data2;
    },
  });

  console.log("데이터1", data1);

  const profile1 = async () => {
    await instance.get(`/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).allProfiles[0];
    console.log("profile check", profile1);
  };

  //추가
  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: async (payload) => {
      const { data } = await instance.post(
        `/profile`,
        { profileName: payload }, //request body
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    },
  });
  // cookies.set("profileToken", data.headers.authorization, { path: "/" });

  // const { mutate, isLoading, isSuccess } = useMutation({
  //   mutationFn: async (payload) => {
  //     const { data } = await instance.post(
  //       `/profile`,
  //       { profileName: payload },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     const [cookies, setCookie] = useCookies(['profileToken']);
  //     setCookie('profileToken', data, { path: '/' }); // 쿠키에 token 저장
  //     return data;
  //   }
  // });

  const submitButtonHandler = (e) => {
    e.preventDefault();
    console.log(newProfile);
    mutate(newProfile);
  };


  return (
    <StDetailBox>
      <StDiv>
        <StHeader>
          <StImage key="netflix-profile2.png" src="img/netflix-profile2.png" />
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
        </div>

        <div>
          <StMenu>
            <StButton onClick={() => mutate()}>저장</StButton>
            <StButton>수정</StButton>
            <StButton>프로필 삭제</StButton>
          </StMenu>
        </div>
      </StDiv>
    </StDetailBox>
  );
}

export default ProfileDetail;

const StDetailBox = styled.form`
  color: white;
  position: relative;
  top: -30vh;
`;

const StDiv = styled.div`
  padding: 20px;
  height: 50vh;
  width: 300px;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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
  width: 70px;
  height: 70px;
  margin-right: 10px;
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
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  gap: 10px;
`;
