import styled from "styled-components";
import { Colors } from "../../Constants/constants";

type ButtonProps = {
  isColor: boolean;
};

const HeaderWrap = styled.header`
  padding: 0 8vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 792px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavWrap = styled.nav`
  position: relative;
  display: flex;
`;

const ButtonWrap = styled.button<ButtonProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  position: relative;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 1vh;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: ${Colors.White};
  color: ${({ isColor }) => (isColor ? Colors.Pink : Colors.Bisque)};

  @media (max-width: 576px) {
    margin: 1vh;
    font-size: 18px;
    font-weight: bold;
  }
`;

const Button = styled.span`

`;

const LineWrap = styled.div<ButtonProps>`
  margin: 0;
  margin-top: 10px;
  display: inline-block; 
  background-color: ${(props) => (props.isColor ? Colors.Pink : Colors.White)};
  width: 25px;
  height: 4px;

  @media (max-width: 576px) {
    margin: 0;
    margin-top: 5px;
    width: 15px;
    height: 2px;
  }
`;

 const H1Wrap = styled.h1`
  margin: 6vh 0;
  font-size: 48px;
  font-weight: 400;
  @media (max-width: 792px) {
    margin: 6vh 0;
    font-size: 35px;
    font-weight: 400;
  }
`;

export { H1Wrap, LineWrap, Button, ButtonWrap, HeaderWrap, NavWrap };