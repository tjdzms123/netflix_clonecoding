import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Detail from "../../pages/Detail";
import { modalOnOff } from "../../redux/modules/modalSlice";
import { ModalBackground, ModalContent, ModalOpenTrigger } from "./Modal";

const ActionSlider = ({ actions }) => {
  const dispatch = useDispatch();
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const [isHovering, setIsHovering] = useState(false);

  const [movieId, setMovieId] = useState(0);

  const modalState = useSelector((state) => state.modalSlice.modal);

  const handlePrevClick = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === 0 ? actions.length - 1 : currentSlide - 1
    );
  };

  const handleNextClick = () => {
    setCurrentSlide((currentSlide) => (currentSlide + 1) % actions.length);
  };

  const onClickThum = (index) => {
    dispatch(modalOnOff(modalState));
    setMovieId(index);
  };

  return (
    <>
      <StSliderHeader>
        <StMoviecategory>액션</StMoviecategory>
        <StIndicatorContainer>
          {/* {isHovering
            ? action?.map((movie, index) => {
                return (
                  <Indicator key={index} active={index === currentSlide} />
                );
              })
            : null} */}
        </StIndicatorContainer>
      </StSliderHeader>
      <ModalOpenTrigger>
        <ModalBackground />
      </ModalOpenTrigger>
      <StContainer>
        <StArrow
          onClick={handlePrevClick}
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() => setIsHovering(false)}
        >
          &lt;
        </StArrow>
        <StSlideContainer translateX={-currentSlide * 100}>
          {actions?.map((action) => (
            <StSlideThum
              key={action.contentIdx}
              src={action.videoThumUrl}
              onClick={() => onClickThum(action.contentIdx)}
            />
          ))}
        </StSlideContainer>
        <StArrow
          onClick={handleNextClick}
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() => setIsHovering(false)}
        >
          &gt;
        </StArrow>
      </StContainer>
      <ModalContent>
        {/* {클릭한 썸네일id값을 useState에 넣은 후 그 id 값과 같은 놈만 deatail에 내려주면 될듯?} */}
        <Detail />
      </ModalContent>
    </>
  );
};

export default ActionSlider;

const StSliderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 15px;
  padding: 0px 0px 0px 50px;
`;

const StContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: hidden;
  width: 95%;
  /* padding: 0px 20px 0px 20px; */
`;

const StSlideContainer = styled.div`
  display: flex;
  /* flex-direction: row; */
  /* align-items: center; */
  /* justify-content: center; */
  /* flex-wrap: wrap; */
  transform: translateX(${(props) => props.translateX}%);
  transition: transform 0.4s ease-in-out;
  gap: 20px;
`;

const StSlideThum = styled.img`
  width: 100%;
  max-width: 200px;
  height: 100%;
  max-height: 150px;
  margin-bottom: 20px;
  object-fit: fill;
  border-radius: 5px;
  position: relative;
  z-index: 0;
  cursor: pointer;
  flex: 0 0 calc(20% - 20px);
  // 5개씩 보이도록 크기 지정

  @media screen and (max-width: 768px) {
    /* 뷰포트가 768px 이하인 경우 3개씩 보이도록 크기 조정 */
    flex: 0 0 calc(33.33% - 20px);
  }
`;

const StArrow = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: relative;
  z-index: 1;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  &:disabled {
    background-color: rgba(0, 0, 0, 0.3);
    cursor: not-allowed;
  }
`;

const StIndicatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* margin-top: 20px; */
`;

const Indicator = styled.div`
  width: 15px;
  height: 7px;
  border-radius: 1px solid gray;
  background-color: ${(props) => (props.active ? "#ffffff" : "#a3a3a3")};
  margin-right: 10px;
`;

const StMoviecategory = styled.h2`
  color: wheat;
`;
