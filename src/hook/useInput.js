import { useState } from "react"
import styled from "styled-components"

//상태관리
export const useInput = (payload) => {
  const [value, setValue] = useState(payload ||"")
  const onChangeHandler = (e) => {
    setValue(e.target.value)
  }
  return [value, onChangeHandler, setValue]
};

export const ESInput = ({ type, placeholder, value, onChange, name, width }) => {
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      width={width}
      required
          />
  );
};


//input
const StyledInput = styled.input`
  width: ${props => props.width || '90%'};
  height: 40px;
  padding: 10px;
  margin-bottom: 15px; 
  border: none; 
  border-radius: 5px; 
  background-color: #D8D8D8;
  font-size: 16px; 
  font-weight: 500;
`