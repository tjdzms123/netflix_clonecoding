import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../../components/elem/Button";
import { modalOnOff } from "../../redux/modules/modalSlice";
import {
  ModalBackground,
  ModalContent,
  ModalOpenTrigger,
} from "../../components/elem/Modal";
import ProfileDetail from "./ProfileDetail";
import { useNavigate } from "react-router-dom";
import { HiOutlinePlus } from "react-icons/hi";

function Profile() {
  const allProfiles = useSelector((state) => state.allProfiles);
  console.log(allProfiles);

  const dispatch = useDispatch();
  const navi = useNavigate();

  //모달
  const modalState = useSelector((state) => state.modalSlice.modal);


  const onClickDetail = () => {
    dispatch(modalOnOff(modalState));
  };

  const onClickBtn = () => {
    // dispatch(modalOnOff(modalState));
    navi('/')
  }

  const token = decodeURI(document.cookie).replace("token=Bearer ", "");
  console.log("Profile.jsx token value---->", token);

return (
    <StDiv>
      <p>Netfilx를 시청할 프로필을 선택하세요.</p>

      <ModalOpenTrigger>
        <ModalBackground />
      </ModalOpenTrigger>

      <StContainer>
        <StSlideContainer>
        <HiOutlinePlus onClick={onClickDetail}
        style={{
          width:'80px',
          height:'80px',
          cursor: 'pointer'
        }}/>

        </StSlideContainer>
        <StSlide src='img/netflix-profile2.png' onClick={onClickBtn} 
        style={{
          width:'80px',
          height:'80px',
        }}/>

      </StContainer>
      
      <ModalContent backgroundColor='transparent'>
      <ProfileDetail />
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
  width: 300px;
  margin: 0 auto; 
  padding: 40px; 
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
  padding: 0px 40px 0px 40px;
`;

const StSlideContainer = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
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
