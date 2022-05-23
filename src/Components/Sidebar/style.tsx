import styled from "styled-components";
import { Colors } from "../../Constants/constants";

interface IProps {
  border: boolean;
}
const SidebarWrap = styled.div`
  padding-top: 15vh;
  width: 10vw;
  height: 100vh;
  min-width: 60px;
  background-color: ${Colors.Milk};
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;

const IconsWrap = styled.div<IProps>`
  margin: 3vh 0;
  cursor: pointer;
  width: 100%;
  text-align: center;
  border-left: 3px solid
    ${(props) => (props.border ? Colors.Pink : Colors.Milk)};
  @media (max-width: 576px) {
    margin: 1vh 0;
  }
`;

export { IconsWrap, SidebarWrap };