import React from "react";
import styled from "styled-components";

function Button({ children, style, onClick }) {
  return (
    <StButton style={style} onClick={onClick}>
      {children}
    </StButton>
  );
}

const StButton = styled.button`
  background-color: white;
  border: 1px solid lightgray;
  width: 50px;
  height: 30px;
  margin: 2.5px;
  cursor: pointer;
`;

export default Button;
