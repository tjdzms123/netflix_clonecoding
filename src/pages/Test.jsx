import React, { useState } from "react";
import styled from "styled-components";

const Test = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleClickNext = () => {
    setCurrentCardIndex(currentCardIndex + 1);
  };

  const handleClickPrev = () => {
    setCurrentCardIndex(currentCardIndex - 1);
  };

  const cards = [
    { id: 1, backgroundColor: "#ff7f50" },
    { id: 2, backgroundColor: "#4169e1" },
    { id: 3, backgroundColor: "#f08080" },
    { id: 4, backgroundColor: "#87cefa" },
    { id: 5, backgroundColor: "#da70d6" },
    { id: 6, backgroundColor: "#1d252a" },
    { id: 7, backgroundColor: "#545667" },
  ];

  return (
    <Container>
      <Button onClick={handleClickPrev} disabled={currentCardIndex === 0}>
        Prev
      </Button>
      <Button
        onClick={handleClickNext}
        disabled={currentCardIndex === cards.length - 1}
      >
        Next
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
    </Container>
  );
};

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
  width: 300px;
  height: 200px;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  font-size: 24px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
`;

export default Test;

// import React, { useState } from "react";
// import styled from "styled-components";

// const Test = () => {
//   const [isCardMoved, setIsCardMoved] = useState(false);
//   const [currentCardIndex, setCurrentCardIndex] = useState(0);

//   const handleClick = () => {
//     setCurrentCardIndex(currentCardIndex + 1);
//     setIsCardMoved(true);
//   };
//   const cards = [
//     { id: 1, backgroundColor: "#ff7f50" },
//     { id: 2, backgroundColor: "#4169e1" },
//     { id: 3, backgroundColor: "#f08080" },
//     { id: 4, backgroundColor: "#87cefa" },
//     { id: 5, backgroundColor: "#da70d6" },
//   ];

//   return (
//     <Container>
//       <Button onClick={handleClick}>Click Me</Button>
//       <CardWrapper className={isCardMoved ? "move-right" : ""}>
//         <Card
//           key={cards[currentCardIndex].id}
//           backgroundColor={cards[currentCardIndex].backgroundColor}
//         />
//       </CardWrapper>
//     </Container>
//   );
// };

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

// const Button = styled.button`
//   font-size: 24px;
//   padding: 10px 20px;
//   border-radius: 5px;
//   background-color: #333;
//   color: #fff;
//   cursor: pointer;
// `;

// // const Card = styled.div`
// //   width: 300px;
// //   height: 200px;
// //   border-radius: 10px;
// //   box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
// //   background-color: ${(props) => props.backgroundColor};
// //   transition: transform 0.3s ease-in-out;
// // `;

// // const CardWrapper = styled.div`
// //   display: flex;
// //   justify-content: space-between;
// //   width: 100%;
// //   height: 200px;
// //   transition: transform 0.3s ease-in-out;

// //   &.move-right {
// //     transform: translateX(200%);
// //   }
// // `;

// const CardWrapper = styled.div`
//   position: relative;
//   width: 300px;
//   height: 200px;
// `;

// const Card = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   border-radius: 10px;
//   box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
//   background-color: ${(props) => props.backgroundColor};
//   transition: transform 0.3s ease-in-out;
//   transform: ${(props) => (props.isActive ? "none" : "translateX(-200%)")};
//   z-index: ${(props) => (props.isActive ? 1 : 0)};
// `;

// export default Test;
