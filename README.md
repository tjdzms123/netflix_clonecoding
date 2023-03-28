# 기술 스택

- styled-components
- react-router-dom
- axios
- jwt
- query

REMOTE

> main
> #######
> dev
> #######
> dev>features/ES -->
> dev>features/SG -->
> dev>features/EH -->

# Commit Ruling

git commit
• 의미없는 주석 및 console.log 삭제 후 commit
• 지정된 commit msg 사용

- feat: message - 새로운 기능 추가
- fix: message - 예상치 못한 에러, 버그 수정
- style: message - 코드 스타일 변경 (코드 포매팅, 세미콜론 누락 등) 기능 수정이 없는 경우 add . message: Css, 컴포넌트 추가
- update: message - 전반적인 build up
- delete: message - 파일을 삭제만 한 경우
- merge: message - 병합 메세지
- tempSave : 현재 작업중이지만 작업진행사항을 저장하고자 중간에 저장할 때

##feautures/ES

##로그인

##회원가입

##추가 패키지 설치 -체크박스
yarn add @mui/material @emotion/react @emotion/styled
-tanstack
리액트 쿼리
yarn add @tanstack/react-query
yarn add @tanstack/react-query-devtools -비동기 통신
yarn add axios

- yarn add json-server

## EH

yarn add react-intersection-observer (취소)
yarn add react-helmet (페이지마다 meta title 지정용)

# EH > home > components

- 작업 중 03/27 10:10-

- [ ] Home.jsx

  - [V] Header
    - [V] 영역
      - [V] Height 조정 > heigth 20px->30px && >padding 20px 0; -> 25px 0;
  - [ ] CardSlider (pages > Test.jsx)
    - [V] 기능
    - [V] 영역
    - [V] CSS
    - [ ] Contents
      - [ ] Img Unvisible Issue
  - [ ] VideoDesc
    - [V] 영역
    - [ ] CSS
    - [ ] Contents
  - [ ] Footer
    - [V] 영역
    - [ ] CSS
    - [ ] Contents
  - [ ] Movies.jsx
    - [V] CRUD GET REQ CHECK with TANSTACK

- 03/28 09:40-

- [ ] src > shared > Router.js

  - [ ] Routering with Token State
  - [ ] Guarding with Token State

- [ ] src > utils > createQueryKey.js
