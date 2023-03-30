import React, { useEffect, useRef } from "react";
import styled from "styled-components";

function CopyWrite1() {
  const copyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (copyRef.current) {
      observer.observe(copyRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <CopyWrapper>
      <CopyCont ref={copyRef}>
        <CopyImg1 />
        <CopyTextCont>
          <CopyText>
            <RedText>이야기</RedText>는 사람을 움직입니다.
          </CopyText>
          <CopyText>
            <RedText>이야기</RedText>를 통해 우리는 더 많은 감정을 느끼고,
          </CopyText>
          <CopyText>새로운 관점을 접하고,</CopyText>
          <CopyText>서로에 대한 이해를 높일 수 있습니다.</CopyText>
        </CopyTextCont>
      </CopyCont>
    </CopyWrapper>
  );
}

const CopyWrapper = styled.div`
  position: relative;
  width: calc(100%);
  top: -70vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CopyCont = styled.div`
  display: flex;
  width: calc(100%);
  flex-direction: row;
  text-align: center;
  justify-content: center;
  font-size: 40px;
  top: -90px;
  color: white;
  padding-left: 40px;
  gap: 100px;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CopyImg1 = styled.div`
  border-radius: 5px;
  width: 400px;
  background-image: url("/img/EHcopywrite1.jpeg");
  background-size: cover;
  box-shadow: rgba(255, 255, 255, 0.25) 0px 5px 15px;
`;
const CopyTextCont = styled.div`
  border-left: 7px solid red;
  padding-left: 40px;
`;

const CopyText = styled.div`
  margin-bottom: 20px;
`;

const RedText = styled.span`
  color: red;
`;
export default CopyWrite1;
