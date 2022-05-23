import styled from "styled-components";
import { Colors } from "../../Constants/constants";

const Images = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 8vw;
`;

const Img = styled.div<{ $imageUrl: string }>`
  position: relative;
  margin: 20px auto;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 500px;
  border-radius: 25px;
  background-image: ${({ $imageUrl }) => `url(${$imageUrl})`};

  @media (max-width: 576px) {
    height: 150px;
  }
`;

const Title = styled.span`
  top: 6%;
  position: absolute;
  left: 4%;
  color: ${Colors.White};
  font-size: 24px;

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

const Info = styled.span`
  right: 6%;
  position: absolute;
  bottom: 4%;
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  border: 1px solid #ffffff;

  @media (max-width: 576px) {
    font-size: 15px;
    font-weight: 600px;
  }
`;

const Lesson = styled.span`
  position: absolute;
  top: 14%;
  left: 4%;
  color: ${Colors.White};
  font-size: 16px;

  @media (max-width: 576px) {
    font-size: 12px;
    top: 23%;
  }
`;

const Duration = styled.span`
  top: 6%;
  position: absolute;
  bottom: 10px;
  right: 5%;
  color: ${Colors.White};
  font-size: 24px;

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

const IconWrap = styled.span`
  width: 10vh;
  height: 10vh;
  bottom: 6%;
  position: absolute;
  left: 4%;
  color: ${Colors.White};
  font-size: 24px;

  @media (max-width: 576px) {
    width: 5vh;
    height: 5vh;
  }
`;

export { Images, Img, Title, Info, Lesson, Duration, IconWrap };