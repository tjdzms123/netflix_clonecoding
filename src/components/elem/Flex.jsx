import React from "react";
import styled from "styled-components";

const Flex = ({ children, css }) => {
  return <StyledFlex css={css}>{children}</StyledFlex>;
};

const StyledFlex = styled.div`
  ${({ css }) => ({ ...css })}
  display: flex;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Flex;
