import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import instance from "../axios/api"
import { cookies } from "../shared/cookies";
// import jwt_decode from "jwt"

function Login() {

  const navi = useNavigate();

  const [user,setUser] = useState({
    email:"",
    password:"",
  });
  console.log(user.email);
  console.log(user.password);

  const chgInputHandler = e => {
    const {value,name} = e.target;
    setUser(old => {  
      return {...old,[name]:value}
    });
  };


  const submitBtnHandler =async (e) =>  {
    e.preventDefault();
// 정확하지 않음 다시 확인하기
  // try{
  //   const result = await instance.post("/login",user);
  //   const payload = jwt_decode(result.data.token);

  //   cookies.set("token",result.data.token,{path:"/"});
  //   cookies.set("userId",payload.id,{path:"/"});

    navi("/home");
  // } catch (error){
  //   alert(error.message)
  // }
  }

  return (
    <Stbackground>
    <Styled>
      <form onSubmit={submitBtnHandler}>
        <StTitle>로그인</StTitle>
        <StInput type="text" 
        value={user.email}
        onChange={chgInputHandler}
        name='email'
        placeholder='이메일 주소'
        maxLength='15'
        required 
        />
        <StInput
        value={user.password}
        onChange={chgInputHandler}
        name='password'
        placeholder='비밀번호'
        maxLength='15'
        required 
        />
        <StButton>로그인</StButton>
      </form>

      <p>로그인 정보 저장</p>
      <p>도움이 필요하신가요?</p>

      <p>Netflix 회원이 아닌가요? 
        <Link to='./singup1'>지금 가입하세요.</Link>
      이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다. 자세히 알아보기.</p>
    </Styled>
    </Stbackground>

    )
}

export default Login;

const Styled = styled.div`
  height: 70vh;
  width: 300px; /* 로그인 폼의 너비 */
  margin: 0 auto; /* 로그인 폼을 중앙에 위치시키기 위한 마진 */
  padding: 30px; /* 로그인 폼 주위의 여백 */
  border: 1px solid #ccc; /* 로그인 폼 주위에 테두리를 만듭니다 */
  border-radius: 5px; /* 로그인 폼의 모서리를 둥글게 만듭니다 */
  box-shadow: 0 2px 5px rgba(0,0,0,0.1); /* 로그인 폼 주위에 그림자를 만듭니다 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #c5c5c5;
  opacity: 0.9;
`

//배경 이미지
const Stbackground = styled.div`
  background-image: url(https://i.ibb.co/vXqDmnh/background.jpg); 
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 712px;
  opacity: 0.8;
` 

//제목
  const StTitle = styled.p`
  text-align: center;
  margin-bottom: 20px;
  font-size: 28px;
`

//input
const StInput = styled.input`
  width: 100%; 
  padding: 10px;
  margin-bottom: 15px; 
  border: none; 
  border-radius: 5px; 
  background-color: #f3f3f3; 
  font-size: 16px; 
  font-weight: 600;
`

//버튼
const StButton = styled.button`
  background-color: #e50914; /* 배경 색상 */
  color: #fff;
  padding: 16px; 
  border: none; 
  border-radius: 5px; 
  width: 100%; 
  cursor: pointer; 
  font-size: 16px;
  font-weight: 600; 
  letter-spacing: 1px; 
  margin-bottom: 15px;
  text-transform: uppercase; 
`
