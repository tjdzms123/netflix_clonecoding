import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { modalOnOff } from "../../redux/modules/modalSlice";
import { SlClose } from "react-icons/sl";

export const ModalOpenTrigger = ({ children }) => {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modalSlice.modal);
  return (
    <div
      style={{ display: "block" }}
      onClick={() => dispatch(modalOnOff(modalState))}
    >
      {children}
    </div>
  );
};

export const ModalBackground = () => {
  const modalState = useSelector((state) => state.modalSlice.modal);
  return modalState && <Background />;
};

const Background = styled.div`
  background-color: rgb(26, 26, 26);
  opacity: 0.6;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 4;
`;

export const ModalContent = ({ children, backgroundColor  }) => {
  const modalState = useSelector((state) => state.modalSlice.modal);
  return modalState && <Body backgroundColor={backgroundColor}>{children}</Body>;
};

const Body = styled.div`
  width: 420px;
  position: absolute;
  background-color: ${(props) => props.backgroundColor || 'rgb(0, 0, 0)'};
  top: 3%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, 50%);
  border-radius: 40px;
  padding: 50px;
  padding-top: 60px;
  box-sizing: border-box;
  z-index: 5;
`;

export const ModalCloseBtn = ({ children }) => {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modalSlice.modal);
  return (
    <CloseBtn onClick={() => dispatch(modalOnOff(modalState))}>
      <SlClose />
    </CloseBtn>
  );
};

const CloseBtn = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 30px;
  cursor: pointer;
`;

export const Flexdiv = ({ children, ...rest }) => {
  return <Div {...rest}>{children}</Div>;
};

const Div = styled.div`
  display: flex;
  align-items: ${({ ai }) => ai};
  justify-content: ${({ jc }) => jc};
  flex-direction: ${({ fd }) => fd};
`;