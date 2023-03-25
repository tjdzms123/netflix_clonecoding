import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Row } from "../elem/Flex";
import { HiOutlineSearch } from "react-icons/hi";
import { BiBell } from "react-icons/bi";
function Nav() {
  return (
    <StyledNav>
      <Row style={{ paddingLeft: "27.441px", gap: "20px" }}>
        <Logo src="img/EHlogo1.png" />
        <HeaderUl>
          <HeaderLi1>
            <HeaderLink to="/">Home</HeaderLink>
          </HeaderLi1>
          <HeaderLi1>
            <HeaderLink to="/movies">Movies</HeaderLink>
          </HeaderLi1>
          <HeaderLi1>
            <HeaderLink to="/board">Board</HeaderLink>
          </HeaderLi1>
        </HeaderUl>
      </Row>
      <Row style={{ paddingRight: "27.441px", color: "white" }}>
        <HeaderUl>
          <HeaderLi2>
            <HiOutlineSearch />
          </HeaderLi2>
          <HeaderLi2>
            <BiBell />
          </HeaderLi2>
        </HeaderUl>
        <Profile src="img/EHprofile1.png" />
      </Row>
    </StyledNav>
  );
}

const Logo = styled.img`
  top: 0;
  width: 80px;
  height: auto;
`;

const Profile = styled.img`
  top: 0;
  width: 25px;
  height: auto;
  border-radius: 5px;
`;
const StyledNav = styled.nav`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;

const HeaderLi1 = styled.li`
  width: 80px;
  text-align: center;
  font-size: 20px;
  text-decoration: none;
  display: inline-block;
  padding-right: 15px;
`;

const HeaderLi2 = styled.li`
  width: 20px;
  text-align: center;
  font-size: 20px;
  text-decoration: none;
  display: inline-block;
  padding-right: 15px;
`;

const HeaderUl = styled.ul`
  margin-top: 5px;
  display: flex;
  list-style: none;
  width: 100%;
`;

const HeaderLink = styled(Link)`
  color: rgb(220, 220, 220);
  text-decoration: none;

  &:hover {
    color: rgb(180, 180, 180);
    cursor: pointer;
  }
`;

export default Nav;
