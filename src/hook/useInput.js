import { useState } from "react"
import styled from "styled-components"

//상태관리
export const useInput = (payload) => {
  const [value, setValue] = useState(payload ||"")
  const onChangeHandler = (e) => {
    setValue(e.target.value)
  }
  return [value, onChangeHandler, setValue]
}

export const ESInput = ({ type, placeholder, value, onChange, name }) => {
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

// const StyledInput = styled.input`
//   border: none;
//   border-bottom: 1.5px solid #333333;
//   height: 40px;
//   width: 350px;
//   outline: none;
//   padding-left: 12px;
//   padding-right: 12px;
//   margin-bottom: 5px;
//   &:focus-within {
//     border-radius: 10px;
//     box-shadow: rgba(100, 100, 100, 0.3) 0px 8px 16px -8px;
//     border-bottom: 1.5px solid #c9c9c9;
//     background-color: rgba(45, 32, 167, 0.1);
//   }
// `;

//input
const StyledInput = styled.input`
  width: 100%; 
  padding: 10px;
  margin-bottom: 15px; 
  border: none; 
  border-radius: 5px; 
  background-color: #f3f3f3; 
  font-size: 16px; 
  font-weight: 600;
`