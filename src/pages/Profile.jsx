import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { __getprofile } from '../redux/modules/ProfileSlice';
import Button from '../components/elem/Button';
import { modalOnOff } from '../redux/modules/modalSlice';
import { ModalBackground,ModalContent,ModalOpenTrigger} from '../components/elem/Modal';
import ProfileDetail from './ProfileDetail';

function Profile() {

  const {profile, isLoading, isError} = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  //모달
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const modalState = useSelector((state) => state.modalSlice.modal);

  const images = [
    "img/netflix-profile1.png",
    "img/netflix-profile2.png",
    "img/netflix-profile3.png",
    "img/netflix-profile4.png"
  ];


  const onClickDetail = () => {
    dispatch(modalOnOff(modalState));
  };

  return ( 
    <StDiv>
      <p>Netfilx를 시청할 프로필을 선택하세요.</p>

    <ModalOpenTrigger>
    <ModalBackground />
  </ModalOpenTrigger>
  <StContainer>
    <StSlideContainer>
      {
      images.map((image, index) => (
        <StSlide key={index} src={image} onClick={onClickDetail} />
      ))
      }
      {
        profile.map((item)=> {
          <div key={item.id}>
            {item.nickname}
          </div>
        })
      }
    </StSlideContainer>
    {/* <StSlideContainer>
    <img key='netflix-profile4.png' src='img/netflix-profile4.png' onClick={onClickDetail} />
    </StSlideContainer> */}

  </StContainer>
  <ModalContent>
    <ProfileDetail />
    {/* 프로필 추가 모달창 부분 */}
  </ModalContent>
  </StDiv>
  )
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
  box-shadow: 0 2px 5px rgba(0,0,0,0.1); /* 로그인 폼 주위에 그림자를 만듭니다 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #252525;
  opacity: 1.2;
  color: gray;
  line-height: 20px;
  font-size: 14px;
`

const StContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  /* width: 80%; */
  padding: 0px 40px 0px 40px;
`

const StSlideContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  transform: translateX(${(props) => props.translateX}%);
  transition: transform 0.4s ease-in-out;
  gap: 15px;
  justify-content: space-between;
`

const StSlide = styled.img`
  width: 20%;
  max-width: 200px;
  margin-bottom: 20px;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 0;
  cursor: pointer;
`;