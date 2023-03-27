import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Detail from "../../pages/Detail";
import { modalOnOff } from "../../redux/modules/modalSlice";
import {
  Flexdiv,
  ModalBackground,
  ModalContent,
  ModalOpenTrigger,
} from "./Modal";

const images = [
  "https://upload.wikimedia.org/wikipedia/ko/thumb/b/b8/1917%EC%98%81%ED%99%94_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg/220px-1917%EC%98%81%ED%99%94_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
  "https://file2.nocutnews.co.kr/newsroom/image/2022/08/27/202208271436351479_0.jpg",
  "https://www.kukinews.com/data/kuk/image/2022/06/10/kuk202206100269.680x.0.jpg",
  "https://t1.daumcdn.net/movie/a0aaca4b87c541b11085139bd941da0996a78ec1",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fx7UCP%2Fbtqy4dZ2ef5%2FUjU276GKXbK5KGQxK7cus1%2Fimg.jpg",
  "http://image.dongascience.com/Photo/2018/04/04452dc945a759b923317a6921bebd62.jpg",
  "http://image.dongascience.com/Photo/2018/04/04452dc945a759b923317a6921bebd62.jpg",
  "http://image.dongascience.com/Photo/2018/04/04452dc945a759b923317a6921bebd62.jpg",
  "http://image.dongascience.com/Photo/2018/04/04452dc945a759b923317a6921bebd62.jpg",
  "http://image.dongascience.com/Photo/2018/04/04452dc945a759b923317a6921bebd62.jpg",
];

const ImageSlider = () => {

  const dispatch = useDispatch();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const modalState = useSelector((state) => state.modalSlice.modal);

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

  return (
    <>
      <StSliderHeader>
        <StMoviecategory>영화 장르 이름</StMoviecategory>
        <StIndicatorContainer>
          {isHovering
            ? images.map((image, index) => {
                return <Indicator key={index} />;
              })
            : null}
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
          {images.map((image, index) => (
            <StSlide key={index} src={image} onClick={onClickDetail} />
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
        <Detail />
      </ModalContent>
    </>
  );
};

export default ImageSlider;

const StSliderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 15px;
  padding: 0px 0px 0 45px;
`;

const StContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  /* width: 80%; */
  padding: 0px 40px 0px 40px;
`;

const StSlideContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  transform: translateX(${(props) => props.translateX}%);
  transition: transform 0.4s ease-in-out;
  gap: 15px;
  justify-content: space-between;
`;

const StSlide = styled.img`
  width: 30%;
  max-width: 200px;
  /* min-width: 100px; */
  margin-bottom: 20px;
  height: 100%;
  max-height: 150px;
  object-fit: cover;
  border-radius: 5px;
  position: relative;
  z-index: 0;
  cursor: pointer;
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
