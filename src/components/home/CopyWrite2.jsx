import React, { useState } from "react";
import styled from "styled-components";

function CopyWrite2() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleClickNext = () => {
    setCurrentCardIndex(currentCardIndex + 1);
  };

  const handleClickPrev = () => {
    setCurrentCardIndex(currentCardIndex - 1);
  };

  // * ============= Cards Img Unvisible Issue ============== *

  const cards = [
    { id: 1, backgroundColor: "#ff7f502b", imageUrl: "/img/CopyImg1.jpeg" },
    { id: 2, backgroundColor: "#4169e1" },
    { id: 3, backgroundColor: "#f08080" },
    { id: 4, backgroundColor: "#87cefa" },
    { id: 5, backgroundColor: "#da70d6" },
    { id: 6, backgroundColor: "#1d252a" },
    { id: 7, backgroundColor: "#545667" },
  ];
  // * ============= for Test ============== *
  // [
  //   {
  //     id: 1,
  //     backgroundImage: "url('/img/CopyImg1.jpeg')",
  //     backgroundSize: "cover",
  //   },
  //   {
  //     id: 2,
  //     backgroundImage: "url('/img/EHhome1.jpg')",
  //     backgroundSize: "cover",
  //   },
  //   {
  //     id: 3,
  //     backgroundImage: "url('/img/EHprofile1.png')",
  //     backgroundSize: "cover",
  //   },
  // ];
  // * ============= for Test ============== *
  // * ============= Cards Img Unvisible Issue ============== *
  return (
    <CopyWrapper>
      <Container>
        <Button onClick={handleClickPrev} disabled={currentCardIndex === 0}>
          〈
        </Button>
        <CardWrapper>
          {cards.map((card, index) => (
            <Card
              key={card.id}
              backgroundColor={card.backgroundColor}
              isActive={index === currentCardIndex}
            />
          ))}
        </CardWrapper>
        <Button
          onClick={handleClickNext}
          disabled={currentCardIndex === cards.length - 1}
        >
          〉
        </Button>
      </Container>
    </CopyWrapper>
  );
}

const CopyWrapper = styled.div`
  position: relative;
  top: -35vh;
  gap: 200px;
  width: calc(100%);
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Card = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  background-color: ${(props) => props.backgroundColor};
  transition: left 0.3s ease-in-out;
  left: ${(props) => (props.isActive ? "0" : "-100%")};
  z-index: ${(props) => (props.isActive ? 1 : 0)};
`;

const CardWrapper = styled.div`
  position: relative;
  width: 100vh;
  height: 60vh;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 2vh;
`;

const Button = styled.button`
  font-size: 30px;
  padding: 10px 20px;
  border: none;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
`;

export default CopyWrite2;
