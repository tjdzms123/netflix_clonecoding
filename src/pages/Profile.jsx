import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ESInput, useInput } from '../hook/useInput';
import { __getprofile } from '../redux/modules/ProfileSlice';
import { StSmfont } from './Signup/Singstyled';
import Button from '../components/elem/Button';
import { modalOnOff } from '../redux/modules/modalSlice';
import { ModalBackground,
  ModalContent,
  ModalOpenTrigger} from '../components/elem/Modal'
import Detail from './Detail';

function Profile() {

  const {profile, isLoading, isError} = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  const [newProfile, newProfileHandler, setNewProfile] = useInput('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const modalState = useSelector((state) => state.modalSlice.modal);

  const images = [
    "img/netflix-profile1.png",
    "img/netflix-profile2.png",
    "img/netflix-profile3.png"  ]

  const handlePrevClick = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === 0 ? images.length - 1 : currentSlide - 1
    );
  };

  const handleNextClick = () => {
    setCurrentSlide((currentSlide) => (currentSlide + 1) % images.length);
  };

  const onClickDetail = () => {
    dispatch(modalOnOff(modalState));
  };


  // if(isLoading || isError) {
  //   return <div> ... 로딩 중입니다.</div>
  // }

  // const onClickDetail = () => {
  //   dispatch(modalOnOff(modalState));
  // };

  // const images = [
  //   "netflix-profiles1"
  // ]

  // useEffect(()=>
  // dispatch(__getprofile())
  // ,[])

  return ( 
    <StDiv>
      <p>Netfilx를 시청할 프로필을 선택하세요.</p>
        <div>
        {/* <Modal>프로필1</Modal> */}
        {
          profile.map((item) => (
            <div key={item.id}>
              {/* {item.nickname} */}
              </div>
          ))
        }
      </div>
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
    </StSlideContainer>
  </StContainer>
  <ModalContent>
    <Detail />
  </ModalContent>
  </StDiv>

// 모달 안에 사용할 부분
  // <StDiv>
  //   <StHeader>
  //       <StButton>프로필 추가</StButton>
  //       <StImage src=''></StImage>
  //       <ESInput type="text" 
  //       name='newProfile'
  //       placeholder='프로필의 닉네임을 입력해주세요.'
  //       value={newProfile}
  //       onChange={newProfileHandler}
  //       required
  //       />
  //   </StHeader>

  //   <div>
  //       <p>관람등급 설정 :</p>
  //       <select name="size" id="">
  //           <option value="성인">성인</option>
  //           <option value="청소년">19세 미만 청소년</option>
  //       </select>
  //       <StSmfont>이 프로필에서는 모든 관람등급의 콘텐츠가 표시됩니다.</StSmfont>
  //       {/* 성인이냐 청소년이냐 -> 성인이면 모든 관람msg 아니면 청소년 관람자 */}
  //       <button>수정</button>
  //   </div>

  //   <div>
  //       <StMenu>
  //           <button>저장</button>
  //           <button>취소</button>
  //           <button>프로필 삭제</button>
  //       </StMenu>
  //   </div>
  // </StDiv>
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

const StHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const StImage = styled.image`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  `

  const StMenu = styled.div`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: inline-block;
    margin-right: 10px;
  }
  `

const StButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  `

  //////////////////////////////////////////////////////////
  

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
  width: 40%;
  max-width: 200px;
  margin-bottom: 20px;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 0;
  cursor: pointer;
`;