import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  //================== Header Scroll Event =================
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHeaderOpaque = scrollPosition < 100;
  //================== Header Scroll Event =================

  return (
    <StyledHeader isOpaque={isHeaderOpaque}>
      <Nav />
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  padding: 25px 0;
  font-size: 1.3rem;
  z-index: 50;
  background-color: rgb(0, 0, 0);
  opacity: ${({ isOpaque }) => (isOpaque ? 1 : 0.5)};
  transition: opacity 0.3s ease-in-out;
  justify-content: space-between;
`;

export default Header;
