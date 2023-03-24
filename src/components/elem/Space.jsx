import React from "react";
import styled from "styled-components";

const Space = ({ children, css }) => {
  return <StyledSpace css={css}>{children}</StyledSpace>;
};

const StyledSpace = styled.div`
  ${({ css }) => ({ ...css })}
`;

export default Space;
