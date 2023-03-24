import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  padding: 20px 0;
  font-size: 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  z-index: 50;
  background-color: rgb(60,60,60);
  opacity: 0.8;
`;

const HeaderNav = styled.nav`
  border-bottom: 1.5px solid rgb(0, 0, 0);
  padding-bottom: 15px;
  padding-right: 30px;
`
const GreetingContainer = styled.div`
  display: flex;
  padding-bottom: 25px;
  padding-right: 30px;
  padding-top: 30px;
  align-items: center;
  font-size: 16px;
`;

const Greeting = styled.div`
  padding-right: 15px;
  padding-left: 5px;
  font-size:1.3rem;
`;

const GreetingNickname = styled.div`
  font-weight: bold;
  font-size:1.3rem;
  color: rgb(76, 76, 198);
`;

const HeaderLi = styled.li`
                text-decoration: none;
                display: inline-block;
                padding-right: 15px;
`

const HeaderUl = styled.ul`
              display: flex;
              list-style: none;
              width: 100%;
`

const HeaderLink = styled(Link)`
                  color: rgb(0, 0, 0);
                  text-decoration: none;
                  font-size: larger;
                  
                  &:hover {
                    color: red;
                  }
`

export { StyledHeader, GreetingContainer, Greeting, GreetingNickname, HeaderNav, HeaderLi, HeaderUl, HeaderLink };
