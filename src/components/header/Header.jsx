import React from "react";
// import { useNavigate } from "react-router-dom";
import {
  StyledHeader,
  GreetingContainer,
  // GreetingNickname,
  Greeting,
  HeaderNav,
  HeaderLi,
  HeaderUl,
  HeaderLink,
} from "./styles";

const Header = () => {
  // const navi = useNavigate();

  return (
    <StyledHeader>
      <HeaderNav>
        <HeaderUl>
          <HeaderLi>
            <HeaderLink to="/">Home &nbsp;|</HeaderLink>
          </HeaderLi>
          <HeaderLi>
            <HeaderLink to="/movies">Movies &nbsp;|</HeaderLink>
          </HeaderLi>
          <HeaderLi>
            <HeaderLink to="/board">Profile &nbsp;</HeaderLink>
          </HeaderLi>
          {/* <HeaderLi>
            {isLogin ? (
              <p type="button" style={{ cursor: "pointer" }} onClick={logout}>
                Logout
              </p>
            ) : (
              <p
                type="button"
                style={{ cursor: "pointer" }}
                onClick={() => navi("/login")}
              >
                LogIn
              </p>
            )}
          </HeaderLi> */}
        </HeaderUl>
      </HeaderNav>
    </StyledHeader>
  );
};

export default Header;
