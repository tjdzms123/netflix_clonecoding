import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { StButton, StFont, StSmfont } from "./Singstyled";
import CheckboxLabels from "../../components/CheckboxLabels";
import { ESInput, useInput } from "../../hook/useInput";
import { Helmet } from "react-helmet";
import { __signUp } from "../../redux/modules/loginSlice";
import { useDispatch } from "react-redux";
import TrueGuard from "../../hook/guard/TrueGuard";

function Signup() {
  TrueGuard();

  const navi = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const chgInputHandler = (e) => {
    const { value, name } = e.target;
    setUser((old) => {
      return { ...old, [name]: value };
    });
  };

  const submitBtnHandler = async (e) => {
    e.preventDefault();
    const response = await dispatch(__signUp(user));
    if (response.type === "SIGN_UP/rejected") {
      navi("/signup1");
    } else {
      navi("/signup2");
    }
  };

  return (
    <>
      <Helmet>
        <title>Login - Netflix</title>
      </Helmet>

      <StForm onSubmit={submitBtnHandler}>
        <div>
          <StSmfont>1/3단계</StSmfont>
          <br />
          <StFont>
            <h3>비밀번호를 설정해 멤버십을 시작하세요.</h3>
            <p>몇 단계만 더 거치면 넷플릭스 가입 완료!</p>
            <p>복잡한 단계는 모두 없앴습니다.</p>
          </StFont>
          <br />
          <ESInput
            type="email"
            value={user.email}
            name="email"
            onChange={chgInputHandler}
            placeholder="이메일 주소를 추가하세요"
            maxLength="15"
            required
          />
          <br />
          <ESInput
            type="password"
            value={user.password}
            onChange={chgInputHandler}
            name="password"
            placeholder="비밀번호를 추가하세요(8 이상 20 미만)"
            maxLength="20"
            required
          />
          <CheckboxLabels />
          <br />
          <StButton>동의하고 계속</StButton>
        </div>
      </StForm>
    </>
  );
}

export default Signup;

//전체
const StForm = styled.form`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
