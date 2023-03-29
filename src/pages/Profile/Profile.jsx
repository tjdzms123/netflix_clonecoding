import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getprofile } from "../../redux/modules/ProfileSlice";
import Button from "../../components/elem/Button";
import { modalOnOff } from "../../redux/modules/modalSlice";
import {
  ModalBackground,
  ModalContent,
  ModalOpenTrigger,
} from "../../components/elem/Modal";
import ProfileDetail from "./ProfileDetail";
import ProfileDetail2 from "./ProfileDetail2";
import { instance } from "../../axios/api";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { HiOutlinePlus } from "react-icons/hi";



function Profile() {
  const  allProfiles  = useSelector((state) => state.allProfiles);
  console.log(allProfiles);

  const dispatch = useDispatch();
  const navi = useNavigate();

  //모달
  const modalState = useSelector((state) => state.modalSlice.modal);

  const images = [
    "img/netflix-profile1.png",
    "img/netflix-profile2.png",
    "img/netflix-profile3.png",
    "img/netflix-profile4.png",
  ];

  const onClickDetail = () => {
    dispatch(modalOnOff(modalState));
  };

  const onClickBtn = () => {
    dispatch(modalOnOff(modalState));
    navi('/')
  }

  const token = decodeURI(document.cookie).replace("token=Bearer ", "");
  console.log("Profile.jsx token value---->", token);

  // const {mutate} = useMutation({
  //   mutationFn: async (payload) => {
  //     const { data } = await instance.post(`/profile`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       }
  //       ,
  //       body: {
  //         profileName: "예상기"
  //       }
  //     });
  //     console.log("토큰", token);
  //     console.log("데이터", data);
  //     return data;
  //   },
  // });

  // const response1 = useQuery({
  //   queryKey: ["GET_PROFILE"],
  //   queryFn: async () => {
  //     const { data } = await instance.get(`/profile`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     console.log(data);
  //     return data;
  //   },
  // });

//   const {response} = useQuery({
//     querykey: ["GET_PROFILE"],
//     queryFn: async () => {
//       const {data} = await instance.get(`/profile`,
//       {headers: { Authorization: `Bearer ${token}` }
//     });
//       return data;
//     },
//   });
//  console.log(response);


  return (
    <StDiv>
      <p>Netfilx를 시청할 프로필을 선택하세요.</p>

      <ModalOpenTrigger>
        <ModalBackground />
      </ModalOpenTrigger>

      <StContainer>
        <StSlideContainer>
          {/* <StSlide src='img/netflix-profile4.png' onClick={onClickDetail} /> */}
        
        <HiOutlinePlus onClick={onClickDetail}
        style={{
          width:'80px',
          height:'80px'
        }}/>

        </StSlideContainer>
        <StSlide src='img/netflix-profile2.png' onClick={onClickBtn} 
        style={{
          width:'80px',
          height:'80px'
        }}/>

      </StContainer>
      
      <ModalContent backgroundColor='transparent'>
      <ProfileDetail />

        {/* <ProfileDetail2 /> */}
        {/* 프로필 추가 모달창 부분 */}
      </ModalContent>
    </StDiv>
  );
}

export default Profile;

const StDiv = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;

  height: 70vh;
  width: 300px; /* 로그인 폼의 너비 */
  margin: 0 auto; /* 로그인 폼을 중앙에 위치시키기 위한 마진 */
  padding: 40px; /* 로그인 폼 주위의 여백 */
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

  position: relative;
  top: 15vh;
`;

const StContainer = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* overflow-x: hidden; */
  /* width: 80%; */
  padding: 0px 40px 0px 40px;
`;

const StSlideContainer = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* transform: translateX(${(props) => props.translateX}%);
  transition: transform 0.4s ease-in-out; */
  gap: 15px;
  justify-content: space-between;
`;

const StSlide = styled.img`
  margin-bottom: 20px;
  object-fit: cover;
  position: relative;
  z-index: 0;
  cursor: pointer;
`;
